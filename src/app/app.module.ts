import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {GlobalErrorHandler} from './error-handler.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// APPLICATION INSIGHTS
import {ApplicationInsightsService} from './application-insights.service';

// USER
import { UserModule } from 'src/app/user/user.module';

// ADMIN
import { AdminModule} from './admin/admin.module';

// MODERATOR
import { ModeratorModule} from './moderator/moderator.module';

// LISTENER
import { ListenerModule} from './listener/listener.module';

// POLLS
import { VoteChartComponent } from './vote-chart/vote-chart.component';
// MatComponent
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

// SPEAKER
import { SpeakerModule} from './speaker/speaker.module';

// SECURITY
import { SecurityInterceptor } from 'src/app/security/security.interceptor'; 
import { SignInComponent } from 'src/app/security/sign-in/sign-in.component';
import { GuestSignInComponent } from 'src/app/security/guest-sign-in/guest-sign-in.component';
import { SignUpComponent } from 'src/app/security/sign-up/sign-up.component';

// ERRORS
import { PageNotFoundComponent } from 'src/app/errors/page-not-found/page-not-found.component';
import { ForbiddenComponent } from 'src/app/errors/forbidden/forbidden.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ErrorHandler } from '@angular/core';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { TestChatComponent } from './test-chat/test-chat.component';
import { TestChartsComponent } from './test-charts/test-charts.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    GuestSignInComponent,
    SignUpComponent,
    PageNotFoundComponent,
    ForbiddenComponent,
    VoteChartComponent,
    TestChatComponent,
    TestChartsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ListenerModule,
    SpeakerModule,
    AdminModule,
    ModeratorModule,
    UserModule,
    NgbModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [ 
    { provide : ErrorHandler, useClass : GlobalErrorHandler },
    { provide: ApplicationInsights, useFactory: ApplicationInsightsService} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
