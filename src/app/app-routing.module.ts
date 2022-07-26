import { ScheduleTreeComponent } from './schedule-tree/schedule-tree.component';
import { LandingComponent } from './landing/landing.component';
import { TableScheduleComponent } from './table-schedule/table-schedule.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ClubsComponent } from './clubs/clubs.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: LandingComponent
  },
  {
    path: 'clubs', component: ClubsComponent
  },
  {
    path: 'landing', component: LandingComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },

  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'clubs', 
        component: ClubsComponent
      },
      {
        path: 'schedule-tree',
        component: ScheduleTreeComponent
      },
      {
        path: 'table-schedule',
        component: TableScheduleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
