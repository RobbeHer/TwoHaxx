import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeratorKickListenersComponent } from './moderator-kick-listeners/moderator-kick-listeners.component';
import { ModeratorManageListenersComponent } from './moderator-manage-listeners/moderator-manage-listeners.component';
import {​​​​​​​​ AppRoutingModule }​​​​​​​​ from 'src/app/app-routing.module';
import {​​​​​​​​ BrowserModule }​​​​​​​​ from'@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [ModeratorKickListenersComponent, ModeratorManageListenersComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  exports: [ModeratorKickListenersComponent, ModeratorManageListenersComponent]
})
export class ManageListenersModule { }
