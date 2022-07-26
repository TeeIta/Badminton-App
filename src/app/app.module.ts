import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClubsComponent } from './clubs/clubs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { TableScheduleComponent } from './table-schedule/table-schedule.component';
import { ScheduleTreeComponent } from './schedule-tree/schedule-tree.component';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ClubsComponent,
    NavbarComponent,
    FooterComponent,
    SidenavComponent,
    AdminLayoutComponent,
    TableScheduleComponent,
    ScheduleTreeComponent,
    LandingComponent,
    DashboardComponent
  ],
  imports: [ 
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
