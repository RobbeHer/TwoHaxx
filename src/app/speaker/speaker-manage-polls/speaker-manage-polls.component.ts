import { Component, OnInit } from '@angular/core';

import * as Ably from 'ably';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { Poll } from 'src/app/models/poll.model';
import { PollService } from 'src/app/services/poll.service';
import { User } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/security/services/authentication.service';

@Component({
  selector: 'app-speaker-manage-polls',
  templateUrl: './speaker-manage-polls.component.html',
  styleUrls: ['./speaker-manage-polls.component.scss']
})
export class SpeakerManagePollsComponent implements OnInit {

  ably;
  ablyPollChannel;
  pollChannel: string = "pollChannel";
  talkID: number;
  user: User;
  polls = [];
  orderAlphabetically: number = 1; // 0 => unordered, 1 => alphabetically, 2 => not alphabetically

  constructor(
    private _Activatedroute: ActivatedRoute,
    private _pollService: PollService,
    private _authenticationService: AuthenticationService) { 
  }

  getPolls() {
    this._pollService.getPollsOfRoom(this.talkID).subscribe(polls => {
      var oldPolls = polls.map((poll) => {
        return {
          PollID: poll.pollID,
          Name: poll.name,
          Question: poll.question,
          IsAvailable:poll.isAvailable,
          PollOptions: poll.pollOptions.map((pollOption) => {
            return {
              PollOptionID: pollOption.pollOptionID,
              Content: pollOption.content,
              Votes: pollOption.votes,
              VotedBy:  (pollOption.votedBy == null) ? [] : pollOption.votedBy.map((votedBy) => {
                return {
                  UserID: votedBy.userID,
                  FirstName: votedBy.firstName,
                  LastName: votedBy.lastName,
                  Email: votedBy.email,
                  Password: "",
                  IsAdmin: votedBy.isAdmin,
                  IsGuest: votedBy.isGuest,
                  TalksAsModerator: [null],                    
                  TalksAsTalker: [null],
                  Token: ""
                }
              }),
              PollID: pollOption.pollID
            }
          }),
          TalkID: poll.talkID,
          Talk: null/*{
            TalkID: poll.talk.talkID,
            Name: poll.talk.name,
            Description: poll.talk.description,
            Code: poll.talk.code,
            StartDate: poll.talk.startDate,
            EndDate: poll.talk.endDate,
            TalkerID: poll.talk.talkID,
            Talker: {
              UserID: poll.talk.talker.userID,
              FirstName: poll.talk.talker.firstName,
              LastName: poll.talk.talker.lastName,
              Email: poll.talk.talker.email,
              Password: "",
              IsAdmin: poll.talk.talker.isAdmin,
              IsGuest: poll.talk.talker.isGuest,
              TalksAsModerator: [null],
              TalksAsTalker: [null],
              Token: ""
            },
            ModeratorID: poll.talk.moderatorID,
            Moderator: {
              UserID: poll.talk.moderator.userID,
              FirstName: poll.talk.moderator.firstName,
              LastName: poll.talk.moderator.lastName,
              Email: poll.talk.moderator.email,
              Password: "",
              IsAdmin: poll.talk.moderator.isAdmin,
              IsGuest: poll.talk.moderator.isGuest,
              TalksAsModerator: [null],
              TalksAsTalker: [null],
              Token: ""
            },
            RoomID: poll.talk.roomID,
            Room: {
              RoomID: poll.talk.room.roomID,
              Name: poll.talk.room.name,
              Description: poll.talk.room.description,
              StartDate: poll.talk.room.startdate,
              EndDate: poll.talk.room.enddate,
              Talks: [null]
            }
          }*/
        }
      });
      this.polls = oldPolls;
      this.polls.sort((a, b) => {
        return (this.orderAlphabetically == 1) ? (a.name > b.name) ? 1 : -1 : (a.name > b.name) ? -1 : 1;
      });
    })
  }

  toggleVisabilityPoll(pollID: number) {
    var pollIndex = this.polls.findIndex(function(poll) {
      return poll.PollID === pollID;  // keep capital letter(s) => not a Message object
    });
    var poll = this.polls[pollIndex];

    if (poll.IsAvailable) {
      this._pollService.hidePoll(poll).subscribe((result) => {
        console.log(result);
      });
    } else {
      this._pollService.makePollAvailable(poll).subscribe((result) => {
        console.log(result);
      });
    }
  }

  deletePoll(pollID: number) {
    this._pollService.deletePoll(pollID).subscribe(() => {
      this.getPolls();
    })
  }

  subscribeOnAblyChannel() {
    // unsubscribe ablyChannel if exist
    if (this.ablyPollChannel) this.ablyPollChannel.unsubscribe();
    // get new channel
    this.ablyPollChannel = this.ably.channels.get(this.pollChannel + this.talkID);
    // handler for incomming messages
    this.IncommingPollsHandler();
  }

  IncommingPollsHandler() {
    this.ablyPollChannel.subscribe(function(result) {
      //console.log(result.name);
      let pData = JSON.parse(result.data);
      //console.log(pData);

      switch (result.name) {
        case "newAvailablePoll":
          //console.log(`Received poll: ${pData}`);       // keep capital letter(s) => not a Message object
          var index = this.polls.findIndex(function(poll) {
            return poll.PollID === pData.PollID;               // keep capital letter(s) => not a Message object
          });
          if (index !== -1) this.polls[index] = pData;
          break;

        case "hidePoll":
          //console.log(`Hide poll: ${pData.PollID}`);                // keep capital letter(s) => not a Message object
          var index = this.polls.findIndex(function(poll) {
            return poll.PollID === pData.PollID;               // keep capital letter(s) => not a Message object
          });
          if (index !== -1) this.polls[index] = pData;
          break;

        case "voteUser":
          //console.log(`User ${pData.User.UserID} voted poll:: ${pData.PollOption.PollOptionID}`);   // keep capital letter(s) => not a Message object

          var pollIndex = this.polls.findIndex(function(poll) {
            return poll.PollID === pData.PollOption.Poll.PollID;  // keep capital letter(s) => not a Message object
          });
          var pollOptionIndex = this.polls[pollIndex].PollOptions.findIndex(function(pollOption) {
            return pollOption.PollOptionID === pData.PollOption.PollOptionID;  // keep capital letter(s) => not a Message object
          });

          if (index !== -1) {
            var pollOption = this.polls[pollIndex].PollOptions[pollOptionIndex];
            pollOption.Votes += 1;                                 // keep capital letter(s) => not a Message object
            pollOption.VotedBy.push(pData.User);                   // keep capital letter(s) => not a Message object
            this.polls[pollIndex].PollOptions[pollOptionIndex] = pollOption;
            this.polls = this.polls;
          }           
          break;

        default:
          //console.log(result.name);
          console.log("Ably: Invalid poll response");
      }
    }.bind(this));
  }

  ngOnInit(): void {
    // get user
    this.user = this._authenticationService.getUser();
    this._Activatedroute.params.subscribe(params => { 
      this.talkID = Number(params['talkid']);
      this.getPolls();
    });
    // make ably connection with user email as clientid
    this.ably = new Ably.Realtime({ 
      key: environment.ablyApiKeyR,
      clientId: this.user.email, 
      recover: function(_, cb) {cb(true);} 
    });
    this.ably.connection.on(function(stateChange) {
      console.log('New connection state is ' + stateChange.current);
    });
    this.subscribeOnAblyChannel();
  }

}
