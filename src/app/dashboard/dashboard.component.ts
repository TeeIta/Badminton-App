import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 public show: boolean = false;
 public buttonName: any

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.show = !this.show
  }

}
