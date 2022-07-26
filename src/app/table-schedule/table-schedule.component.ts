import { TableSchedule } from './table-schedule.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-schedule',
  templateUrl: './table-schedule.component.html',
  styleUrls: ['./table-schedule.component.css']
})
export class TableScheduleComponent implements OnInit {

  entries: ScheduleEntry[] = [
    { id: 1, day: 'Monday', info: 'Team Alpha vs Team Beta' },
    { id: 2, day: 'Tuesday', info: 'Team Gamma vs Team Delta' },
    { id: 3, day: 'Wednesday', info: 'Team Meow vs Team Century' },
  ];

  selectedEntryId?: number | null;

  public show: boolean = false;
  public buttonName: any = 'show';
  
TableSchedules: TableSchedule[] = []

  constructor() { }

  ngOnInit(): void {
  }

  toggle(id: number){
    // this.selectedEntryId = id;
    if (this.show == true && this.selectedEntryId != id) {
      this.selectedEntryId = id;
      return;
    } else {
      this.selectedEntryId = null;
    }
    this.show = !this.show;
  }

}


export interface ScheduleEntry {
  id: number,
  day: string,
  info: string
}
