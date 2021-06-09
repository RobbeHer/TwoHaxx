import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/security/services/authentication.service';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './guest-sign-in.component.html',
  styleUrls: ['./guest-sign-in.component.scss']
})
export class GuestSignInComponent implements OnInit {

  guest: User = new User();
  submitted: boolean = false;
  guestSignInForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });
  returnUrl: string;

  constructor(
    private _userService: UserService, 
    private route: ActivatedRoute,
    private router: Router,
    private _authenticationService : AuthenticationService, private fb: FormBuilder) { } 

  onFormValueChanges() {
    this.guestSignInForm.get('email').valueChanges.subscribe(val => {
      this.guest.email = val;
    });
    this.guestSignInForm.get('password').valueChanges.subscribe(val => {
      this.guest.password = val;
    });
  }

  onSubmit() {
    /*this.submitted = true;
    this._authenticationService.authenticate(this.guest).subscribe(result => {
      console.log(result);
      localStorage.setItem("token", result.token);
      localStorage.setItem("user", JSON.stringify(result));

      let newUrl;
      let basePath = this.returnUrl.split("/", 2)[1];
      switch (result.role.name) {
        case "Guest":
          newUrl = (basePath !== "moderator" && basePath !== "admin") ? this.returnUrl : "/";
          break;
        default:
          newUrl = "forbidden";
      }
      this.router.navigateByUrl(this.returnUrl);
    });*/ 
  }

  ngOnInit(): void {
    this._authenticationService.signOut();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
    this.onFormValueChanges();
  }

}