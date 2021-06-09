import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/models/room.model';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-moderator-manage-listeners',
  templateUrl: './moderator-manage-listeners.component.html',
  styleUrls: ['./moderator-manage-listeners.component.scss']
})
export class ModeratorManageListenersComponent implements OnInit {
  rooms: Room[];
  orderAlphabetically: number = 1;  // 0 => unordered, 1 => alphabetically, 2 => not alphabetically

  constructor(private _roomService: RoomService) {
    this.getRooms();
  }

  getRooms() {
    this._roomService.getRooms().subscribe(result => {
      this.rooms = result;
      this.rooms.sort((a, b) => {
        return (this.orderAlphabetically == 1) ? (a.name > b.name) ? 1 : -1 : (a.name > b.name) ? -1 : 1;
      });
    });
  }

  ngOnInit(): void {
  }

}
