import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { TalkService } from 'src/app/services/talk.service';
import { Observable } from 'rxjs';
import { Talk } from 'src/app/models/talk.model';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-listener-chatroom',
  templateUrl: './listener-chatroom.component.html',
  styleUrls: ['./listener-chatroom.component.scss']
})
export class ListenerChatroomComponent implements OnInit {

  @ViewChild('talkCodeModal', { static: false }) private talkCodeModal;
  @ViewChild('warningModal', { static: false }) private warningModal;

  userHasPermissionToPerform: boolean = false;
  selectedTab: string;

  talkID: number;
  talk: Talk;
  talkCodeButtonSubmitted: boolean = false;
  talkCode: string;
  talkCodeForm = this.fb.group({
    code: ['']
  });
  closeResult = '';

  constructor(
    private _Activatedroute:ActivatedRoute,
    private fb: FormBuilder,
    private _talkService: TalkService,
    private _modalService: NgbModal) { }

  showComponent(tab) {
    this.selectedTab = tab;
  }

  onTalkCodeFormValueChanges() {
    this.talkCodeForm.get('code').valueChanges.subscribe(val => {
      this.talkCode = val;
    });
  }
  
  patchForm() {
    this.talkCodeForm.patchValue({
      code: ''
    });
  }

  askCodeOfTalk() {
    this.talkCodeModalOpen()
  }

  talkCodeModalOpen() {
    this._modalService.open(this.talkCodeModal, {ariaLabelledBy: 'talk-code-modal-title'}).result.then((result) => {
      if (result == "Pressed join talk button") {
        this.onChatRoomCodeFormSubmit();
      }
    }, (reason) => {
      this.warningModalOpen();
    });
  }

  warningModalOpen() {
    this._modalService.open(this.warningModal, {ariaLabelledBy: 'warning-modal-title'}).result.then((result) => {
      if (result == "Pressed close warning button") {
        this.askCodeOfTalk();
      }
    }, (reason) => {
      this.askCodeOfTalk();
    });
  }

  onChatRoomCodeFormSubmit() {
    this.talkCodeButtonSubmitted = true;
    this._talkService.canJoinTalk(this.talk.talkID, this.talkCode).subscribe(canJoin => {
      this.talkCodeButtonSubmitted = false;
      console.log(canJoin);
      if (canJoin) {
        this.userHasPermissionToPerform = true;
        this.selectedTab = 'app-listener-chat';
      } else {
        this.patchForm();
        this.warningModalOpen();
      }
    });
  }

  getTalkOfThisChatroom() {
    this._talkService.getTalk(this.talkID).subscribe(talk => {
      this.talk = talk;
      this.askCodeOfTalk();
    })
  }


  ngOnInit(): void {
    this.onTalkCodeFormValueChanges();
    this._Activatedroute.params.subscribe(params => { 
      this.talkID = Number(params['talkid']);
      this.getTalkOfThisChatroom();
    });
  }

}
