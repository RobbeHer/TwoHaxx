import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListenerGiveFeedbackComponent } from './listener-give-feedback/listener-give-feedback.component';


@NgModule({
  declarations: [ListenerGiveFeedbackComponent],
  imports: [
    CommonModule
  ],
  exports: [ListenerGiveFeedbackComponent]
})
export class FeedbackModule { }
