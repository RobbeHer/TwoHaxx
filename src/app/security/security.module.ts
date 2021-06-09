import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { GuestSignInComponent } from './guest-sign-in/guest-sign-in.component';



@NgModule({
  declarations: [SignInComponent, SignUpComponent, GuestSignInComponent],
  imports: [
    CommonModule
  ]
})
export class SecurityModule { }
