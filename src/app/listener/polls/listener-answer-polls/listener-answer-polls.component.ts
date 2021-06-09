import { Component, Input, OnInit } from '@angular/core';
import * as Ably from 'ably';
import { environment } from 'src/environments/environment';
import { Talk } from 'src/app/models/talk.model';
import { User } from 'src/app/models/user.model';
import { VoteUser } from 'src/app/models/vote-user.model';
import { PollService } from 'src/app/services/poll.service';
import { AuthenticationService } from 'src/app/security/services/authentication.service';
import { TalkService } from 'src/app/services/talk.service';
import { Poll } from 'src/app/models/poll.model';
import { PollOption } from 'src/app/models/poll-option.model';


@Component({
  selector: 'app-listener-answer-polls',
  templateUrl: './listener-answer-polls.component.html',
  styleUrls: ['./listener-answer-polls.component.scss']
})
export class ListenerAnswerPollsComponent implements OnInit {

  @Input() talkID: number;

  talk: Talk;
  user: User;
  ably;
  ablyPollChannel;
  pollChannel: string = "pollChannel";
  polls = [];
  submitted = false;

  constructor(
    private _talkService: TalkService,
    private _pollService: PollService,
    private _authenticationService: AuthenticationService) { }

  getTalk() {
    this._talkService.getTalk(this.talkID).subscribe(talk => {
      this.talk = talk;
    });
  }

  getAvailablePolls() {
    this._pollService.getAvailablePollsOfRoom(this.talkID).subscribe(polls => {
      var oldPolls = polls.map((poll) => {
        return {
          PollID: poll.pollID,
          Name: poll.name,
          Question: poll.question,
          IsAvailable: poll.isAvailable,
          PollOptions: poll.pollOptions.map((pollOption) => {
            return {
              PollOptionID: pollOption.pollOptionID,
              Content: pollOption.content,
              Votes: pollOption.votes,
              VotedBy: (pollOption.votedBy == null) ? [] : pollOption.votedBy.map((votedBy) => {
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
    });
  }

  voteOnPollOption(pollID: number, pollOptionID: number) {
    var voteUser: VoteUser = new VoteUser();

    var pollIndex = this.polls.findIndex(function (poll) {
      return poll.PollID === pollID;  // keep capital letter(s) => not a Message object
    });

    var pollOptionIndex = this.polls[pollIndex].PollOptions.findIndex(function (pollOption) {
      return pollOption.PollOptionID === pollOptionID;  // keep capital letter(s) => not a Message object
    });

    //console.log("poll option index: i " + pollOptionIndex)

    if (pollOptionIndex !== -1) {
      voteUser.voteUserID = 0;
      voteUser.userID = this.user.userID;
      voteUser.user = this.user;
      voteUser.pollOptionID = this.polls[pollIndex].PollOptions[pollOptionIndex].PollOptionID;
      voteUser.pollOption = this.polls[pollIndex].PollOptions[pollOptionIndex];

      //console.log("vote send: " + JSON.stringify(voteUser));
      this._pollService.sendVoteUser(voteUser).subscribe(result => {
        //console.log("vote sended");
      });
    }
  }

  progressBarCalculateVotesOfPollOption(pollID: number, pollOptionID: number) {
    var pollIndex = this.polls.findIndex(function (poll) {
      return poll.PollID === pollID;  // keep capital letter(s) => not a Message object
    });
    var poll = this.polls[pollIndex];
    var pollOptions = poll.PollOptions;
    var pollOptionIndex = pollOptions.findIndex(function (pollOption) {
      return pollOption.PollOptionID === pollOptionID;  // keep capital letter(s) => not a Message object
    });
    var pollOption = pollOptions[pollOptionIndex];

    var totalVotes = 0;
    pollOptions.forEach(pollOption => {
      totalVotes += pollOption.Votes;
    });

    return {'background-color': '#007BFF', 'width': (pollOption.Votes / totalVotes) * 100 + '%', 'height': '100%'};
  }

  userFoundInVotedBy(poll) {
    var userID = this.user.userID;
    var found = false;
    poll.PollOptions.forEach(pollOption => {
      var index = (pollOption.VotedBy == null) ? -1 : pollOption.VotedBy.findIndex(function (user) {    // keep capital letter(s) => not a Message object
        return user.UserID === userID;                              // keep capital letter(s) => not a Message object
      });
      // if user is found in likedBy, then disable all vote buttons
      if (index > -1) {
        found = true;
      }
    });
    return found;
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
    this.ablyPollChannel.subscribe(function (result) {
      //console.log(result.name);
      let pData = JSON.parse(result.data);
      //console.log(pData);

      switch (result.name) {
        case "newAvailablePoll":
          //console.log(`Received poll: ${pData}`);       // keep capital letter(s) => not a Message object
          this.polls.push(pData)
          break;

        case "hidePoll":
          //console.log(`Hide poll: ${pData.PollID}`);                // keep capital letter(s) => not a Message object
          var index = this.polls.findIndex(function (poll) {
            return poll.PollID === pData.PollID;               // keep capital letter(s) => not a Message object
          });
          if (index !== -1) this.polls.splice(index, 1);
          break;

        case "voteUser":
          //console.log(`User ${pData.User.UserID} voted poll:: ${pData.PollOption.PollOptionID}`);   // keep capital letter(s) => not a Message object

          var pollIndex = this.polls.findIndex(function (poll) {
            return poll.PollID === pData.PollOption.Poll.PollID;  // keep capital letter(s) => not a Message object
          });
          var pollOptionIndex = this.polls[pollIndex].PollOptions.findIndex(function (pollOption) {
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
    // make ably connection with user email as clientid
    this.ably = new Ably.Realtime({
      key: environment.ablyApiKeyR,
      clientId: this.user.email,
      recover: function (_, cb) { cb(true); }
    });
    this.ably.connection.on(function (stateChange) {
      console.log('New connection state is ' + stateChange.current);
    });
    // get talk and if success, get available polls and subscribe on ablyChannel
    this.getTalk();
    this.getAvailablePolls();
    this.subscribeOnAblyChannel();

  }
}
