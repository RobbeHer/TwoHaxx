import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { TalkService } from 'src/app/services/talk.service';
import { Talk } from 'src/app/models/talk.model';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-add-talk',
  templateUrl: './admin-add-talk.component.html',
  styleUrls: ['./admin-add-talk.component.scss']
})
export class AdminAddTalkComponent implements OnInit {
  isTagNotOk = true;
  roomID: number;
  newTalk: Talk = new Talk();
  submitted = false;
  talkForm = this.fb.group({
    name: ['', Validators.required],
    description: [''],
    startdate: [''],
    enddate: [''],
    talkerID: [''],
    moderatorID: [''],
    code: ['']
  });

  users: User[];

  constructor(
    private _Activatedroute: ActivatedRoute, 
    private _userService: UserService,
    private fb: FormBuilder,
    private _talkService: TalkService) {
      this.getUsers();
   }

   onFormValueChanges() {
    this.talkForm.get('name').valueChanges.subscribe(val => {
      this.newTalk.name = val;
    });
    this.talkForm.get('description').valueChanges.subscribe(val => {
      this.newTalk.description = val;
    });
    this.talkForm.get('startdate').valueChanges.subscribe(val => {
      console.log(val);
      this.newTalk.startdate = val;
    });
    this.talkForm.get('enddate').valueChanges.subscribe(val => {
      console.log(val);
      this.newTalk.enddate = val;
    });
    this.talkForm.get('talkerID').valueChanges.subscribe(val => {​​​​​
      console.log(val);
      this.newTalk.talkerID = parseInt(val);
      this.isTagNotOk = (parseInt(val) === 0) ? true : false;
    }​​​​​);
    this.talkForm.get('moderatorID').valueChanges.subscribe(val => {
      this.newTalk.moderatorID = parseInt(val);
      this.isTagNotOk = (parseInt(val) === 0) ? true : false;
    });
    this.talkForm.get('code').valueChanges.subscribe(val => {
      this.newTalk.code = val;
    });
  }

  onSubmit() {
    this.submitted = true;
    this._talkService.addTalk(this.newTalk).subscribe(() => {
      location.assign("/admin/plannings");
    });
    console.log(this.newTalk);
  }


   getUsers() {
    this._userService.getUsers().subscribe(users => {
      console.log(users);
      this.users = users;
    });
  }

  ngOnInit(): void {
    this.onFormValueChanges();
    this._Activatedroute.params.subscribe(params => { 
      this.roomID = Number(params['roomid']);
      this.newTalk.roomID = this.roomID;
    });
  }

}

