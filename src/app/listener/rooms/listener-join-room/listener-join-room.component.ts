import { Component, OnInit } from '@angular/core';

import { Room } from 'src/app/models/room.model';
import { RoomService } from 'src/app/services/room.service';
import {​​​​​​​ Talk }​​​​​​​ from 'src/app/models/talk.model';
import {​​​​​​​ TalkService }​​​​​​​ from 'src/app/services/talk.service';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/security/services/authentication.service';

@Component({
  selector: 'app-listener-join-room',
  templateUrl: './listener-join-room.component.html',
  styleUrls: ['./listener-join-room.component.scss']
})
export class ListenerJoinRoomComponent implements OnInit {
  room: Room;
  orderAlphabetically: number = 1;  // 0 => unordered, 1 => alphabetically, 2 => not alphabetically
  user: User;
  

  constructor(
    private _Activatedroute:ActivatedRoute, 
    private _roomService: RoomService,
    private router: Router,
    private _talkService: TalkService,
    private AuthenticationService: AuthenticationService) { }

  getPlannning(roomID: number) {
    this._roomService.getPlanning(roomID).subscribe(room => {
      this.room = room;
      this.room.talks.sort((a, b) => {
        return (this.orderAlphabetically == 1) ? (a.name > b.name) ? 1 : -1 : (a.name > b.name) ? -1 : 1;
      });
    });
  }



  ngOnInit() {
    this._Activatedroute.params.subscribe(params => { 
      let roomID = Number(params['id']);
      this.getPlannning(roomID);
      this.user = this.AuthenticationService.getUserFromLocalStorage();
    });
  }
}