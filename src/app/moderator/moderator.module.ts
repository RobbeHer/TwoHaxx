import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { IndexComponent as ModeratorIndexComponent } from './index/index.component';

// MODULES
import { FeedbackModule } from "./feedback/feedback.module";
import { ManageListenersModule } from "./manage-listeners/manage-listeners.module";
import { OpenQuestionsModule } from "./open-questions/open-questions.module";
import { SharedModule } from "./shared/shared.module";


@NgModule({
  declarations: [ModeratorIndexComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FeedbackModule,
    ManageListenersModule,
    OpenQuestionsModule,
    SharedModule
  ],
  exports: [ModeratorIndexComponent]
})
export class ModeratorModule { }
