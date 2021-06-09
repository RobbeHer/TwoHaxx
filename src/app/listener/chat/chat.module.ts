import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListenerChatComponent } from './listener-chat/listener-chat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [ListenerChatComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  exports: [ListenerChatComponent]
})
export class ChatModule { }
