import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListenerChooseRoomComponent } from './listener-choose-room/listener-choose-room.component'
import { ListenerJoinRoomComponent } from './listener-join-room/listener-join-room.component'
import {​​​​​​​​ BrowserModule }​​​​​​​​ from'@angular/platform-browser';
import {​​​​​​​​ AppRoutingModule }​​​​​​​​ from 'src/app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListenerChatroomComponent } from './listener-chatroom/listener-chatroom.component';
import { ChatModule } from '../chat/chat.module';
import { OpenQuestionsModule } from '../open-questions/open-questions.module';
import { PollsModule } from '../polls/polls.module';

@NgModule({
  declarations: [ListenerChooseRoomComponent, ListenerJoinRoomComponent, ListenerChatroomComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ChatModule,
    OpenQuestionsModule,
    PollsModule
  ],
  exports: [ListenerChooseRoomComponent, ListenerJoinRoomComponent, ListenerChatroomComponent]
})
export class RoomsModule { }
