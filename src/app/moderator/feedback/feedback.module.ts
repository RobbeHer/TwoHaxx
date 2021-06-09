import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeratorConsultFeedbackComponent } from './moderator-consult-feedback/moderator-consult-feedback.component';
import { ModeratorSetUpFeedbackLinkComponent } from './moderator-set-up-feedback-link/moderator-set-up-feedback-link.component';
import {​​​​​​​​ AppRoutingModule }​​​​​​​​ from 'src/app/app-routing.module';
import {​​​​​​​​ BrowserModule }​​​​​​​​ from'@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ModeratorConsultFeedbackComponent, ModeratorSetUpFeedbackLinkComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  exports: [ModeratorConsultFeedbackComponent, ModeratorSetUpFeedbackLinkComponent]
})
export class FeedbackModule { }
