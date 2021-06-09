import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Form, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-add-account',
  templateUrl: './admin-add-account.component.html',
  styleUrls: ['./admin-add-account.component.scss']
})
export class AdminAddAccountComponent implements OnInit {

  isAdmin = false;
  newUser: User = new User();
  submitted = false;
  userForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    isAdmin: ['']
  });
  constructor(private _userService: UserService, private fb: FormBuilder) {}
  onFormValueChanges() {
    this.userForm.get('firstName').valueChanges.subscribe(val => {
      this.newUser.firstName = val;
    });
    this.userForm.get('lastName').valueChanges.subscribe(val => {
      this.newUser.lastName = val;
    });
    this.userForm.get('email').valueChanges.subscribe(val => {
      this.newUser.email = val;
    });
    this.userForm.get('password').valueChanges.subscribe(val => {
      this.newUser.password = val;
    });
    this.userForm.get('isAdmin').valueChanges.subscribe(val => {
      this.newUser.isAdmin = val;
      console.log(val);
    });
  }

  onSubmit() {
    this.submitted = true;
    this._userService.addUser(this.newUser).subscribe(() => {
      location.assign("/admin/accounts");
    });;
  }



  ngOnInit() {
    this.onFormValueChanges();
  }

}
