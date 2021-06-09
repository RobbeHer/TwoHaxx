import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [ForbiddenComponent, PageNotFoundComponent],
  imports: [
    CommonModule
  ]
})
export class ErrorsModule { }
