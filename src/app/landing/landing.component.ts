import { Component, OnInit } from '@angular/core';
import { landingCategory } from './landing.module';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  public show: boolean = false;
  public buttonName: any = "show"; 
  landingCategoryId?: number | null;

  constructor() { }

  ngOnInit(): void {
  }
 
  toggle(id: number){
    if (this.show == true && this.landingCategoryId != id){
      this.landingCategoryId = id;
      return;
    } else {
      this.landingCategoryId = null;
    }
    this.show = !this.show;
  }

  categories: landingCategory[] = [
    {id: 1, day: 'First Training'}
  ]; 
}
