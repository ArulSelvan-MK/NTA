import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailed-report',
  templateUrl: './detailed-report.component.html',
  styleUrls: ['./detailed-report.component.scss']
})
export class DetailedReportComponent implements OnInit {

  data: any;
  tableData: any = [];
  noData: boolean = false;

  ngOnInit(): void {
   this.data = JSON.parse(localStorage.getItem('arp_result') || '0');
   for(let i = 0; i < this.data['ip'].length; i++){
      this.tableData.push({
      'ip': this.data['ip'][i], 
      'mac': this.data['mac'][i], 
      'type': this.data['type'][i]});
   }
   if(this.tableData.length == 0){
    this.noData = true;
   }   
  }
}
