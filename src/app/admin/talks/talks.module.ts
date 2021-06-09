import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminOverviewTalksComponent } from './admin-overview-talks/admin-overview-talks.component';
import { AdminEditTalkComponent } from './admin-edit-talk/admin-edit-talk.component';
import { AdminAddTalkComponent } from './admin-add-talk/admin-add-talk.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {​​​​​​​​ AppRoutingModule }​​​​​​​​ from 'src/app/app-routing.module';
import {​​​​​​​​ BrowserModule }​​​​​​​​ from'@angular/platform-browser';



@NgModule({
  declarations: [AdminOverviewTalksComponent, AdminEditTalkComponent, AdminAddTalkComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  exports: [AdminOverviewTalksComponent, AdminEditTalkComponent, AdminAddTalkComponent]
})
export class TalksModule { }
