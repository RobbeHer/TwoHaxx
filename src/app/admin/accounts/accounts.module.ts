import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAddAccountComponent } from './admin-add-account/admin-add-account.component';
import { AdminEditAccountComponent } from './admin-edit-account/admin-edit-account.component';
import { AdminOverviewAccountsComponent } from './admin-overview-accounts/admin-overview-accounts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {​​​​​​​​ AppRoutingModule }​​​​​​​​ from 'src/app/app-routing.module';
import {​​​​​​​​ BrowserModule }​​​​​​​​ from'@angular/platform-browser';
import { AdminOverviewAccountComponent } from './admin-overview-account/admin-overview-account.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AdminAddAccountComponent, AdminEditAccountComponent, AdminOverviewAccountsComponent, AdminOverviewAccountComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  exports: [AdminAddAccountComponent, AdminEditAccountComponent, AdminOverviewAccountsComponent]
})
export class AccountsModule { }
