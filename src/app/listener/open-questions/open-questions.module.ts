import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListenerOpenQuestionComponent } from './listener-open-question/listener-open-question.component'


@NgModule({
  declarations: [ListenerOpenQuestionComponent],
  imports: [
    CommonModule
  ],
  exports: [ListenerOpenQuestionComponent]
})
export class OpenQuestionsModule { }
