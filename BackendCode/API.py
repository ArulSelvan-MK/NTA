from flask import *
from main import *
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/check_arp', methods=['GET'])
def check_arp():
    return scan_arp()


if __name__ == '__main__':
    app.run(debug=True)
