import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { IndexComponent as AdminIndexComponent } from './index/index.component';

// MODULES
import { RoomsModule } from "./rooms/rooms.module";
import { PlanningsModule } from "./plannings/plannings.module";
import { TalksModule } from "./talks/talks.module";
import { AccountsModule } from "./accounts/accounts.module";
import { SharedModule } from "./shared/shared.module";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdminIndexComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    RoomsModule,
    PlanningsModule,
    TalksModule,
    AccountsModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [AdminIndexComponent]
})
export class AdminModule { }
