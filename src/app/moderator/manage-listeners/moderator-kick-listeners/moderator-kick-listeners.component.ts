import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Room } from 'src/app/models/room.model';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-moderator-kick-listeners',
  templateUrl: './moderator-kick-listeners.component.html',
  styleUrls: ['./moderator-kick-listeners.component.scss']
})
export class ModeratorKickListenersComponent implements OnInit {
  room: Room;

  constructor(
    private _Activatedroute: ActivatedRoute,
    private _roomService: RoomService) { }

  getRoom(id: number) {
    this._roomService.getRoom(id).subscribe(room => {
      this.room = room;
    });
  }

  ngOnInit(): void {
    this._Activatedroute.params.subscribe(params => {
      let id = Number(params['id']);
      this.getRoom(id);
    });
  }

}
