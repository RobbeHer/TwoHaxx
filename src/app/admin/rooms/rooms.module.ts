import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminOverviewRoomsComponent } from './admin-overview-rooms/admin-overview-rooms.component';
import { AdminAddRoomComponent } from './admin-add-room/admin-add-room.component';
import { AdminEditRoomComponent } from './admin-edit-room/admin-edit-room.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {​​​​​​​​ AppRoutingModule }​​​​​​​​ from 'src/app/app-routing.module';
import {​​​​​​​​ BrowserModule }​​​​​​​​ from'@angular/platform-browser';



@NgModule({
  declarations: [AdminOverviewRoomsComponent, AdminAddRoomComponent, AdminEditRoomComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  exports: [AdminOverviewRoomsComponent, AdminAddRoomComponent, AdminEditRoomComponent]
})
export class RoomsModule { }
