import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { AuthenticationService } from 'src/app/security/services/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  newUser: User = new User();
  errorMessage: string = "Loading ..."
  showErrorMessage: boolean = false;
  submitted = false;
  signUpForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor( 
    private _userService: UserService, 
    private fb: FormBuilder,
    private _authenticationService : AuthenticationService ) {
  }

  onFormValueChanges() {
    this.signUpForm.get('firstName').valueChanges.subscribe(val => {
      this.newUser.firstName = val;
    });
    this.signUpForm.get('lastName').valueChanges.subscribe(val => {
      this.newUser.lastName = val;
    });
    this.signUpForm.get('email').valueChanges.subscribe(val => {
      this.newUser.email = val;
    });
    this.signUpForm.get('password').valueChanges.subscribe(val => {
      this.newUser.password = val;
    });
  }

  onSubmit() {
    this.submitted = true;
    this._userService.addUser(this.newUser).subscribe(
      () => {
        location.assign("/sign-in");
      },
      error => {
        console.log(error);
        this.submitted = false;
        switch (error.status) {
          case 404:
            this.errorMessage = "User credentials were incorrect, please try again";
            break;
          default:
            this.errorMessage = "Something went wrong with the API, please try again later";
        }
        this.showErrorMessage = true;
      });
  }

  ngOnInit() {
    this._authenticationService.signOut();
    this.onFormValueChanges();
  }
}