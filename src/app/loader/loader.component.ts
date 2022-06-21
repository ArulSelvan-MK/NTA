import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})

export class LoaderComponent implements OnInit {
  loaderTime : boolean = false;

  ngOnInit(): void {
    setTimeout(()=>{ this.loaderTime = true; }, 10000);
  }
}
