import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Talk } from 'src/app/models/talk.model';
import { TalkService } from 'src/app/services/talk.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-admin-edit-talk',
  templateUrl: './admin-edit-talk.component.html',
  styleUrls: ['./admin-edit-talk.component.scss']
})
export class AdminEditTalkComponent implements OnInit {
  isTagNotOk = true;
  roomID: number;
  talkID: number;
  talk: Talk;
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
    private _talkService: TalkService, 
    private fb: FormBuilder,
    private _userService: UserService) {
      this.getUsers();
     }

     getUsers() {
      this._userService.getUsers().subscribe(users => {
        console.log(users);
        this.users = users;
      });
    }
    
  getTalk(id: number) {
    this._talkService.getTalk(id).subscribe(talk => {
      
      this.talk = {...talk, startdate: talk.startDate, enddate:talk.endDate};
      console.log(talk)
      this.patchForm();
    });
  }

  patchForm() {
    this.talkForm.patchValue({
      name: this.talk.name,
      description: this.talk.description,
      startdate:(this.talk.startdate as string).split('T')[1],
      enddate: (this.talk.enddate as string).split('T')[1],
      talkerID: this.talk.talkerID,
      moderatorID: this.talk.moderatorID,
      code: this.talk.code
    });
  }

  onFormValueChanges() {
    this.talkForm.get('name').valueChanges.subscribe(val => {
      this.talk.name = val;
    });
    this.talkForm.get('description').valueChanges.subscribe(val => {
      this.talk.description = val;
    });
    this.talkForm.get('startdate').valueChanges.subscribe(val => {
      console.log("startdate:" + val);
      this.talk.startdate = val;
    });
    this.talkForm.get('enddate').valueChanges.subscribe(val => {
      this.talk.enddate = val
      console.log("enddate:" + this.talk.enddate);
    });
    this.talkForm.get('talkerID').valueChanges.subscribe(val => {​​​​​
      console.log("talkerID: "+val);
      this.talk.talkerID = parseInt(val);
      this.isTagNotOk = (parseInt(val) === 0) ? true : false;
    }​​​​​);
    this.talkForm.get('moderatorID').valueChanges.subscribe(val => {
      console.log("ModeratorID: "+val);
      this.talk.moderatorID = parseInt(val);
      this.isTagNotOk = (parseInt(val) === 0) ? true : false;
    });
    this.talkForm.get('code').valueChanges.subscribe(val => {
      this.talk.code = val;
    });
  }

  onSubmit() {
    this.submitted = true;
    this._talkService.updateTalk(this.talk.talkID, this.talk).subscribe(() => {
      location.assign("/admin/plannings");
    });;
  }

  ngOnInit(): void {
    this.onFormValueChanges();
    this._Activatedroute.params.subscribe(params => { 
      this.roomID = Number(params['roomid']);
      this.talkID = Number(params['talkid']);
      console.log(params);
      this.getTalk(this.talkID);
    });
  }

}




