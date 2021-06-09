import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-edit-account',
  templateUrl: './admin-edit-account.component.html',
  styleUrls: ['./admin-edit-account.component.scss']
})
export class AdminEditAccountComponent implements OnInit {
  user: User;
  submitted = false;
  userForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    isAdmin: ['']
  });

  constructor(private _Activatedroute: ActivatedRoute, private _router: Router, private _userService: UserService, private fb: FormBuilder) { }

  getUser(id: number) {
    this._userService.getUser(id).subscribe(user => {
      this.user = user; 
      this.patchForm();
    });
  }

  patchForm() {
    this.userForm.patchValue({
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      password: this.user.password,
      isAdmin: this.user.isAdmin
    });
  }

  onFormValueChanges() {
    this.userForm.get('firstName').valueChanges.subscribe(val => {
      this.user.firstName = val;
    });
    this.userForm.get('lastName').valueChanges.subscribe(val => {
      this.user.lastName = val;
    });
    this.userForm.get('email').valueChanges.subscribe(val => {
      this.user.email = val;
    });
    this.userForm.get('password').valueChanges.subscribe(val => {
      this.user.password = val;
    });
    this.userForm.get('isAdmin').valueChanges.subscribe(val => {
      this.user.isAdmin = val;
    });
  }

  onSubmit() {
    this.submitted = true;
    this._userService.updateUser(this.user.userID, this.user).subscribe(() => {
      location.assign("/admin/accounts");
    });;
  }

  ngOnInit() {
    this.onFormValueChanges();
    this._Activatedroute.params.subscribe(params => { 
      let id = Number(params['id']);
      this.getUser(id);
    });
  }

}




