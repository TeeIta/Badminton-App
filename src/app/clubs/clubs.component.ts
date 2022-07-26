import { Player } from './player.module';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent implements OnInit {

public show:boolean = false;
public buttonName:any = 'show';

Players: Player[] = [];
newPlayer: FormGroup = new FormGroup({

  firstName: new FormControl('', Validators.required),
  email: new FormControl('', [Validators.email, Validators.required]),
  club: new FormControl('Club name',  Validators.required),
  DOB: new FormControl('')
  
});

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.show = !this.show;
  }

  create(){
  let name = this.newPlayer.controls["firstName"].value
  let mail = this.newPlayer.controls["email"].value
  let clubName = this.newPlayer.controls["club"].value
  let birthday = this.newPlayer.controls["DOB"].value

  this.Players.push({firstName: name, email: mail, club: clubName, DOB: birthday, order: this.Players.length+1})
  this.newPlayer.reset();
  }

  get newPlayerFormControls (){
    return this.newPlayer.controls;
  }

}
