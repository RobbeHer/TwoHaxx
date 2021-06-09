import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { IndexComponent } from './index/index.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [IndexComponent, UserComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [IndexComponent, UserComponent]
})
export class UserModule { }
