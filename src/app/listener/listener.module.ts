import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { IndexComponent as ListenerIndexComponent } from './index/index.component';

// MODULES
import { ChatModule } from "./chat/chat.module" 
import { FeedbackModule } from "./feedback/feedback.module"
import { OpenQuestionsModule } from "./open-questions/open-questions.module"
import { PollsModule } from "./polls/polls.module"
import { RoomsModule } from "./rooms/rooms.module";
import { SharedModule } from "./shared/shared.module";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListenerIndexComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    ChatModule,
    FeedbackModule,
    OpenQuestionsModule,
    PollsModule,
    RoomsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [ListenerIndexComponent]
})
export class ListenerModule { }
