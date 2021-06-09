
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from 'src/app/models/room.model';
import { RoomService } from 'src/app/services/room.service';
import { FormBuilder, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-admin-add-room',
  templateUrl: './admin-add-room.component.html',
  styleUrls: ['./admin-add-room.component.scss']
})
export class AdminAddRoomComponent implements OnInit {
 
  newRoom: Room = new Room();
  submitted = false;
  roomForm = this.fb.group({
    name: ['', Validators.required],
    description: ['']
  });
 
  constructor(
    private _roomService: RoomService, 
    private fb: FormBuilder) { }
 
  onFormValueChanges() {
    this.roomForm.get('name').valueChanges.subscribe(val => {
      console.log(val);
      this.newRoom.name = val;
    });
    this.roomForm.get('description').valueChanges.subscribe(val => {
      this.newRoom.description = val;
    });
  }
 
  onSubmit() {
    this.submitted = true;
    this._roomService.addRoom(this.newRoom).subscribe(() => {
      location.assign("/admin/rooms");
    });
  }
 
  ngOnInit() {
    this.onFormValueChanges();
  }
 
}