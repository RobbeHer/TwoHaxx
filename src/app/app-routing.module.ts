import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// USER
import { UserComponent } from 'src/app/user/user/user.component';
import { IndexComponent as UserIndexComponent } from 'src/app/user/index/index.component';

// ADMIN 
import { IndexComponent as AdminIndexComponent } from 'src/app/admin/index/index.component';
// ADMIN ROOMS
import { AdminOverviewRoomsComponent } from 'src/app/admin/rooms/admin-overview-rooms/admin-overview-rooms.component';
import { AdminEditRoomComponent } from 'src/app/admin/rooms/admin-edit-room/admin-edit-room.component';
import { AdminAddRoomComponent } from 'src/app/admin/rooms/admin-add-room/admin-add-room.component';
// ADMIN PLANNINGS
import { AdminOverviewPlanningsComponent } from 'src/app/admin/plannings/admin-overview-plannings/admin-overview-plannings.component';
import { AdminOverviewPlanningComponent } from 'src/app/admin/plannings/admin-overview-planning/admin-overview-planning.component';
import { AdminAddPlanningComponent } from 'src/app/admin/plannings/admin-add-planning/admin-add-planning.component';
import { AdminEditPlanningComponent } from 'src/app/admin/plannings/admin-edit-planning/admin-edit-planning.component';
// ADMIN ACCOUNTS
import { AdminOverviewAccountsComponent } from 'src/app/admin/accounts/admin-overview-accounts/admin-overview-accounts.component';
import { AdminOverviewAccountComponent } from 'src/app/admin/accounts/admin-overview-account/admin-overview-account.component';
import { AdminAddAccountComponent } from 'src/app/admin/accounts/admin-add-account/admin-add-account.component';
import { AdminEditAccountComponent } from 'src/app/admin/accounts/admin-edit-account/admin-edit-account.component';
// ADMIN TALKS
import { AdminOverviewTalksComponent } from 'src/app/admin/talks/admin-overview-talks/admin-overview-talks.component';
import { AdminAddTalkComponent } from 'src/app/admin/talks/admin-add-talk/admin-add-talk.component';
import { AdminEditTalkComponent } from 'src/app/admin/talks/admin-edit-talk/admin-edit-talk.component';


// SPEAKER
import { IndexComponent as SpeakerIndexComponent } from 'src/app/speaker/index/index.component';
// SPEAKER CHOOSE TALK
import {SpeakerChooseTalkComponent } from 'src/app/speaker/speaker-choose-talk/speaker-choose-talk.component';
// SPEAKER ADD POLL
import {SpeakerAddPollComponent } from 'src/app/speaker/speaker-add-poll/speaker-add-poll.component';
// SPEAKER EDIT POLL
import {SpeakerEditPollComponent } from 'src/app/speaker/speaker-edit-poll/speaker-edit-poll.component';
// SPEAKER MANAGE POLLS
import {SpeakerManagePollsComponent } from 'src/app/speaker/speaker-manage-polls/speaker-manage-polls.component';


// MODERATOR
import { IndexComponent as ModeratorIndexComponent } from 'src/app/moderator/index/index.component';
// MODERATOR FEEDBACK
import { ModeratorConsultFeedbackComponent } from 'src/app/moderator/feedback/moderator-consult-feedback/moderator-consult-feedback.component';
import { ModeratorSetUpFeedbackLinkComponent } from 'src/app/moderator/feedback/moderator-set-up-feedback-link/moderator-set-up-feedback-link.component';
// MODERATOR MANAGE LISTENERS
import { ModeratorKickListenersComponent } from 'src/app/moderator/manage-listeners/moderator-kick-listeners/moderator-kick-listeners.component';
import { ModeratorManageListenersComponent } from 'src/app/moderator/manage-listeners//moderator-manage-listeners/moderator-manage-listeners.component';
// MODERATOR OPEN QUESTIONS
import { ModeratorApproveOpenQuestionsComponent } from 'src/app/moderator/open-questions/moderator-approve-open-questions/moderator-approve-open-questions.component';


//LISTENER
import { IndexComponent as ListenerIndexComponent } from 'src/app/listener/index/index.component';
// LISTENER CHAT
import { ListenerChatComponent } from 'src/app/listener/chat/listener-chat/listener-chat.component';
// LISTENER FEEDBACK
import { ListenerGiveFeedbackComponent } from 'src/app/listener/feedback/listener-give-feedback/listener-give-feedback.component';
// LISTENER OPEN QUESTIONS
import { ListenerOpenQuestionComponent } from 'src/app/listener/open-questions/listener-open-question/listener-open-question.component';
// LISTENER POLLS
import { ListenerAnswerPollsComponent } from 'src/app/listener/polls/listener-answer-polls/listener-answer-polls.component';
import { ListenerResultsPollsComponent } from 'src/app/listener/polls/listener-results-polls/listener-results-polls.component';
// LISTENER ROOMS
import { ListenerChooseRoomComponent } from 'src/app/listener/rooms/listener-choose-room/listener-choose-room.component';
import { ListenerJoinRoomComponent } from 'src/app/listener/rooms/listener-join-room/listener-join-room.component';


// SECURITY
import { SignInComponent } from 'src/app/security/sign-in/sign-in.component';
import { GuestSignInComponent } from 'src/app/security/guest-sign-in/guest-sign-in.component';
import { SignUpComponent } from 'src/app/security/sign-up/sign-up.component';

// ERRORS
import { PageNotFoundComponent } from 'src/app/errors/page-not-found/page-not-found.component';
import { ForbiddenComponent } from 'src/app/errors/forbidden/forbidden.component';

// GAURDS
import { AdminGuard } from 'src/app/security/guards/admin.guard';
import { UserGuard } from 'src/app/security/guards/user.guard';
import { TestChatComponent } from './test-chat/test-chat.component';
import { ListenerChatroomComponent } from './listener/rooms/listener-chatroom/listener-chatroom.component';

import {TestChartsComponent} from 'src/app/test-charts/test-charts.component';


const routes: Routes = [
  {
    path: '', component: ListenerIndexComponent, canActivate: [UserGuard],
    children: [
      // LISTENER
      { path: 'chatroom/:talkid', component: ListenerChatroomComponent },
      { path: 'listener-choose-room', component: ListenerChooseRoomComponent },
      { path: 'listener-give-feedback', component: ListenerGiveFeedbackComponent },
      { path: 'listener-join-room/:id', component: ListenerJoinRoomComponent },
      { path: 'listener-results-polls', component: ListenerResultsPollsComponent },
      // SPEAKER
      { path: 'speaker/polls/:talkid', component: SpeakerManagePollsComponent},
      { path: 'speaker/polls/:talkid/add', component: SpeakerAddPollComponent},
      { path: 'speaker/polls/:talkid/edit/:pollid', component: SpeakerEditPollComponent},
      // MODERATOR
      { path: 'moderator', component: ModeratorIndexComponent},
      { path: 'moderator-consult-feedback', component: ModeratorConsultFeedbackComponent},
      { path: 'moderator-set-up-feedback-link', component: ModeratorSetUpFeedbackLinkComponent},
      { path: 'moderator-kick-listeners/:id', component: ModeratorKickListenersComponent},
      { path: 'moderator-manage-listeners', component: ModeratorManageListenersComponent},
      { path: 'moderator-approve-open-questions', component: ModeratorApproveOpenQuestionsComponent},
      { path: 'test-charts', component: TestChartsComponent},
      // REDIRECT
      { path: '', redirectTo: "listener-choose-room", pathMatch:"full" },
    ]
  },
  // ADMIN
  { path: 'admin', component: AdminIndexComponent, canActivate: [AdminGuard],
    children: [
      { path: 'rooms', component: AdminOverviewRoomsComponent },
      { path: 'rooms/add', component: AdminAddRoomComponent },
      { path: 'rooms/edit/:id', component: AdminEditRoomComponent },
      { path: 'plannings', component: AdminOverviewPlanningsComponent },
      { path: 'planning/:id', component: AdminOverviewPlanningComponent },
      { path: 'planning/room/:roomid/talk/add', component: AdminAddTalkComponent },
      { path: 'planning/room/:roomid/talk/edit/:talkid', component: AdminEditTalkComponent },
      { path: 'accounts', component: AdminOverviewAccountsComponent },
      { path: 'account/:id', component: AdminOverviewAccountComponent},
      { path: 'accounts/add', component: AdminAddAccountComponent },
      { path: 'accounts/edit/:id', component: AdminEditAccountComponent },
      { path: '', redirectTo:"plannings", pathMatch:"full" }
    ]
  },
  // SECURITY
  { path: 'sign-up', component: SignUpComponent },
  { path: 'signup', redirectTo: 'sign-up' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'signin', redirectTo: 'sign-in' },
  { path: 'log-in', redirectTo: 'sign-in' },
  { path: 'login', redirectTo: 'sign-in' },
  //{ path: 'guest-sign-in', component: GuestSignInComponent },
  //{ path: 'guest-log-in', redirectTo: 'guest-sign-in' },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: '**', redirectTo: 'page-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
