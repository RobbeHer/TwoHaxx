import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/security/services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  user: User = new User();
  errorMessage: string = "Loading ..."
  showErrorMessage: boolean = false;
  submitted: boolean = false;
  signInForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });
  returnUrl: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private _authenticationService : AuthenticationService, 
    private fb: FormBuilder) { } 

  onFormValueChanges() {
    this.signInForm.get('email').valueChanges.subscribe(val => {
      this.user.email = val;
    });
    this.signInForm.get('password').valueChanges.subscribe(val => {
      this.user.password = val;
    });
  }

  onSubmit() {
    this.submitted = true;
    this.showErrorMessage = false;

    this._authenticationService.authenticate(this.user).subscribe(
      result => {
        console.log(result);
        localStorage.setItem("token", result.token);
        localStorage.setItem("user", JSON.stringify(result));
        this.router.navigateByUrl(result.isAdmin ? "/admin" : "/");
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
      }
    ); 
  }

  ngOnInit(): void {
    this._authenticationService.signOut();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
    this.onFormValueChanges();
  }

}
