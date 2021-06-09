import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListenerAnswerPollsComponent } from './listener-answer-polls/listener-answer-polls.component'
import { ListenerResultsPollsComponent } from './listener-results-polls/listener-results-polls.component'

@NgModule({
  declarations: [ListenerAnswerPollsComponent, ListenerResultsPollsComponent],
  imports: [
    CommonModule
  ],
  exports: [ListenerAnswerPollsComponent, ListenerResultsPollsComponent]
})
export class PollsModule { }
