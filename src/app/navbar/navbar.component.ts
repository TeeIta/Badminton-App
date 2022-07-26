import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public show:boolean = false;
  public buttonName:any = 'show';
  constructor() { }

  ngOnInit(): void {
  }


  toggle(){
    this.show = !this.show;
  }

}
