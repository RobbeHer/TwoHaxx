import { Component, OnInit } from '@angular/core';
import {​​​​​​​ Observable }​​​​​​​ from 'rxjs';
import {​​​​​​​ Room }​​​​​​​ from 'src/app/models/room.model';
import {​​​​​​​ RoomService }​​​​​​​ from 'src/app/services/room.service';

@Component({
  selector: 'app-admin-overview-rooms',
  templateUrl: './admin-overview-rooms.component.html',
  styleUrls: ['./admin-overview-rooms.component.scss']
})
export class AdminOverviewRoomsComponent implements OnInit {
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

   deleteRoom(roomID: number) {​​​​​
    this._roomService.deleteRoom(roomID).subscribe(() => {​​​​​
      this.getRooms();
    }​​​​​);
  }​​​​​

  ngOnInit(): void {
  }

}
