import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-analysis-result',
  templateUrl: './analysis-result.component.html',
  styleUrls: ['./analysis-result.component.scss']
})
export class AnalysisResultComponent implements OnInit {
status: number = 0;
  noData: boolean = false;

  ngOnInit(): void {
    axios.get('http://127.0.0.1:5000/check_arp').then(res => {
      localStorage.setItem('arp_result',JSON.stringify(res.data));
      this.status = res.data.status;      
      if(res.data.ip.length == 0){
        this.noData = true;
      }
    }).catch(err => {
      console.log(err);
    });
  }
}
