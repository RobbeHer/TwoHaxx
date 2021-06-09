import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminEditPlanningComponent } from './admin-edit-planning/admin-edit-planning.component';
import { AdminAddPlanningComponent } from './admin-add-planning/admin-add-planning.component';
import { AdminOverviewPlanningsComponent } from './admin-overview-plannings/admin-overview-plannings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {​​​​​​​​ AppRoutingModule }​​​​​​​​ from 'src/app/app-routing.module';
import {​​​​​​​​ BrowserModule }​​​​​​​​ from'@angular/platform-browser';
import { AdminOverviewPlanningComponent } from './admin-overview-planning/admin-overview-planning.component';



@NgModule({
  declarations: [AdminEditPlanningComponent, AdminAddPlanningComponent, AdminOverviewPlanningsComponent, AdminOverviewPlanningComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  exports: [AdminEditPlanningComponent, AdminAddPlanningComponent, AdminOverviewPlanningsComponent]
})
export class PlanningsModule { }
