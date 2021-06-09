import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from 'src/app/models/room.model';
import { RoomService } from 'src/app/services/room.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-edit-room',
  templateUrl: './admin-edit-room.component.html',
  styleUrls: ['./admin-edit-room.component.scss']
})

export class AdminEditRoomComponent implements OnInit {
 
  room: Room;
  submitted = false;
  roomForm = this.fb.group({
    name: ['', Validators.required],
    description: ['']
  });
 
  constructor(
    private _Activatedroute:ActivatedRoute, 
    private _router:Router, 
    private _roomService: RoomService, 
    private fb: FormBuilder) { }
 
  getRoom(id: number) {
    this._roomService.getRoom(id).subscribe(room => {
      this.room = room; 
      this.patchForm();
    });
  }
 
  patchForm() {
    this.roomForm.patchValue({
      name: this.room.name,
      description: this.room.description
    });
  }
 
  onFormValueChanges() {
    this.roomForm.get('name').valueChanges.subscribe(val => {
      this.room.name = val;
    });
    this.roomForm.get('description').valueChanges.subscribe(val => {
      this.room.description = val;
    });
  }
 
  onSubmit() {
    this.submitted = true;
    this._roomService.updateRoom(this.room.roomID, this.room).subscribe(() => {
      location.assign("/admin/rooms");
    });;
  }
 
  ngOnInit() {
    this.onFormValueChanges();
    this._Activatedroute.params.subscribe(params => { 
      let id = Number(params['id']);
      this.getRoom(id);
    });
  }
}


