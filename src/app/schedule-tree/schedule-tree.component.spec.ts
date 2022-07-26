import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleTreeComponent } from './schedule-tree.component';

describe('ScheduleTreeComponent', () => {
  let component: ScheduleTreeComponent;
  let fixture: ComponentFixture<ScheduleTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
