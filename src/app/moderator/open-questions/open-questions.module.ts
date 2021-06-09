import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeratorApproveOpenQuestionsComponent } from './moderator-approve-open-questions/moderator-approve-open-questions.component';
import {​​​​​​​​ AppRoutingModule }​​​​​​​​ from 'src/app/app-routing.module';
import {​​​​​​​​ BrowserModule }​​​​​​​​ from'@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [ModeratorApproveOpenQuestionsComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  exports: [ModeratorApproveOpenQuestionsComponent]
})
export class OpenQuestionsModule { }
