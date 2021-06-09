import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { SpeakerChooseTalkComponent } from './speaker-choose-talk/speaker-choose-talk.component';
import { SpeakerManagePollsComponent } from './speaker-manage-polls/speaker-manage-polls.component';
import { SpeakerEditPollComponent } from './speaker-edit-poll/speaker-edit-poll.component';
import {​​​​​​​​ AppRoutingModule }​​​​​​​​ from 'src/app/app-routing.module';
import {​​​​​​​​ BrowserModule }​​​​​​​​ from'@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpeakerAddPollComponent } from './speaker-add-poll/speaker-add-poll.component';

@NgModule({
  declarations: [IndexComponent, SpeakerChooseTalkComponent, SpeakerManagePollsComponent, SpeakerEditPollComponent, SpeakerAddPollComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [IndexComponent, SpeakerChooseTalkComponent, SpeakerManagePollsComponent, SpeakerEditPollComponent, SpeakerAddPollComponent]
})
export class SpeakerModule { }
