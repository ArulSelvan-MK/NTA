from scapy.all import *
from getmac import get_mac_address
from scapy.layers.l2 import ARP, Ether
import os
from collections import Counter



def scan_arp():
    result = {
        'ip': [],
        'mac': [],
        'type': [],
        'status': 0
    }
    a = []
    b = []
    c = []
    d = []
    count = 0
    attacker_ip = ""
    real_mac = ""
    flag = False


    os.system("arp -a> f1")
    with open("f1", "r") as f:
        j = 0
        for line in f:
            j += 1
            if len(line) > 1 and j > 3 and "ff-ff-ff-ff-ff-ff" not in line:
                result['ip'].append(line.split()[0])
                result['mac'].append(line.split()[1])
                result['type'].append(line.split()[2])
                a.append(line.split()[0])
                b.append(line.split()[1])

    if len(set(b)) != len(b):
        count += 1
        print("test_1: ")
        print(set(b))
        print(b)

    pkt_sniff = sniff(filter="arp", timeout=10)
    for pkt in pkt_sniff:
        if pkt[ARP].op == 2: # and pkt[Ether].dst == get_mac_address():
            c.append(pkt[ARP].psrc)
            d.append(pkt[Ether].src)
    if len(pkt_sniff) * 0.7 <= len(c):
        count += 1
        print("test_2: ")
        print(list(zip(c,d)))

    if len(c) !=0:
        if Counter(c).most_common(1)[0][1] > 3:
            attacker_ip = Counter(c).most_common(1)[0][0]
            count += 1
            print("test_3 ")

    if len(set(zip(c, d))) != len(dict(set(zip(c, d)))):
        count += 1
        print("test_4: ")
        print(set(zip(c,d)))
        print(dict(set(zip(c,d))))
        real_mac = get_mac_address(ip=attacker_ip)
        print("test_4_1: "+attacker_ip + " : " + real_mac)

    for add in zip(a, b):  # check this special
        if get_mac_address(ip=add[0]) != add[1]:
            if add[1]!="<incomplete>":
                attacker_ip = add[0]
                real_mac = get_mac_address(ip=add[0])
                print("test_5: "+attacker_ip + " : " + real_mac+ ", not-real: "+add[1])
                flag = True

    if flag:
        count += 1

    if count < 2:
        res = "Don't worry everything is ok"
        result['status'] = 0

    elif count == 2 or count == 3:
        res = "Your computer may be at risk"
        result['status'] = 1

    else:
        res = "Beware! You are under attack"
        os.system("arp -s " + attacker_ip + " " + real_mac)
        res += "\nThe threat has been eliminated, You are safe now"
        result['status'] = 2
    return result