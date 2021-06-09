import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as Ably from 'ably';
import { environment } from 'src/environments/environment';
import { Talk } from 'src/app/models/talk.model';
import { User } from 'src/app/models/user.model';
import { Message } from 'src/app/models/message.model';
import { UserLikeMessage } from 'src/app/models/user-like-message.model';
import { TalkService } from 'src/app/services/talk.service';
import { MessageService } from 'src/app/services/message.service';
import { AuthenticationService } from 'src/app/security/services/authentication.service';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listener-chat',
  templateUrl: './listener-chat.component.html',
  styleUrls: ['./listener-chat.component.scss']
})
export class ListenerChatComponent implements OnInit {

  @Input() talkID: number;

  talk: Talk;
  user: User;
  ably;
  ablyChannel;
  chatMessages = [];
  submitted = false;
  newChatMessage: Message = new Message();
  chatMessageForm = this.fb.group({
    content: ['', Validators.required]
  });

  constructor(
    private http: HttpClient,
    private _Activatedroute: ActivatedRoute, 
    private _talkService: TalkService,
    private _messageService: MessageService,
    private _authenticationService: AuthenticationService, 
    private fb: FormBuilder) { }

  prepareNewChatMessage() {
    this.newChatMessage.isQuestion = false;
    this.newChatMessage.isAnswered = false;
    this.newChatMessage.userID = this.user.userID;
    this.newChatMessage.likes = 0;
    this.newChatMessage.talkID = this.talkID;
    this.newChatMessage.likedBy = [];
    //console.log(this.newChatMessage)
  }

  onFormValueChanges() {
    this.chatMessageForm.get('content').valueChanges.subscribe(val => {
      this.newChatMessage.content = val;
    });
  }

  patchchatMessageForm() {
    this.chatMessageForm.patchValue({
      content: ''
    });
  }

  onSubmit() {
    this.submitted = true;
    this._messageService.sendMessage(this.newChatMessage).subscribe(result => {
      console.log(result);
      this.patchchatMessageForm();
      this.submitted = false;
    });
  }

  likeMessage(messageID: number) {
    var userLikeMessage: UserLikeMessage = new UserLikeMessage();

    var index = this.chatMessages.findIndex(function(message) {
      return message.MessageID === messageID;  // keep capital letter(s) => not a Message object
    });

    console.log("index: i " + index)

    if (index !== -1) {
      userLikeMessage.messageID = messageID;
      userLikeMessage.userID = this.user.userID;
      userLikeMessage.user = this.user;
      userLikeMessage.message = this.chatMessages[index];


      console.log("message send: " + userLikeMessage);
      this._messageService.likeMessage(userLikeMessage).subscribe(result => {
        console.log(result);
      });
    }
  }

  deleteMessage(messageID: number) {
    this._messageService.deleteMessage(messageID).subscribe(result => {
      console.log(result);
    });
  }

  getTalk() {
    this._talkService.getTalk(this.talkID).subscribe(talk => {
      this.talk = talk;
    });
  }

  getOlderMesssages() {
    this._messageService.getMessagesOfRoom(this.talkID).subscribe((messages) => {
      var oldMessages = messages.map((message) => {
        return {
          MessageID: message.messageID,
          Content: message.content,
          IsQuestion: message.isQuestion,
          IsAnswered: message.isAnswered,
          Likes: message.likes,
          LikedBy: (message.likedBy == null) ? [] : message.likedBy.map((likedBy) => {
            return {
              UserID: likedBy.userID,
              FirstName: likedBy.firstName,
              LastName: likedBy.lastName,
              Email: likedBy.email,
              Password: "",
              IsAdmin: likedBy.isAdmin,
              IsGuest: likedBy.isGuest,
              TalksAsModerator: [null],                    
              TalksAsTalker: [null],
              Token: ""
            }
          }),
          TimeStamp: message.timeStamp,
          UserID: message.userID,
          User: {
            UserID: message.user.userID,
            FirstName: message.user.firstName,
            LastName: message.user.lastName,
            Email: message.user.email,
            Password: "",
            IsAdmin: message.user.isAdmin,
            IsGuest: message.user.isGuest,
            TalksAsModerator: [null],                    
            TalksAsTalker: [null],
            Token: ""
          },
          TalkID: message.talkID,
          Talk: null
        }
      });
      this.chatMessages = oldMessages;
    });
  }

  userFoundInLikedBy(chatMessage) {
    var userID = this.user.userID;
    var index = (chatMessage.LikedBy == null) ? -1 : chatMessage.LikedBy.findIndex(function(user) {    // keep capital letter(s) => not a Message object
      return user.UserID === userID;                              // keep capital letter(s) => not a Message object
    });
    // if user is found in likedBy, then disable like button
    return index > -1 ? true : false;
  }

  subscribeOnAblyChannel() {
    // unsubscribe ablyChannel if exist
    if (this.ablyChannel) this.ablyChannel.unsubscribe();
    // get new channel
    this.ablyChannel = this.ably.channels.get('talkChannel' + this.talkID);
    // handler for incomming messages
    this.IncommingMessagesHandler();
    // handler for incomming presences
    this.IncommingPresencesHandler();
    // make user's prensence public
    this.ablyChannel.presence.enter();
  }

  IncommingMessagesHandler() {
    this.ablyChannel.subscribe(function(message) {
      //console.log(message);
      let mData = JSON.parse(message.data);
      //console.log(mData);

      switch (message.name) {
        case "newChatMessage":
          console.log(`Received: ${mData.User.FirstName}  ${mData.User.LastName} says ${mData.Content}`);  // keep capital letter(s) => not a Message object
          this.chatMessages.push(mData)
          break;

        case "deleteChatMessage":
          console.log(`Delete msg: ${mData.MessageID}`);                // keep capital letter(s) => not a Message object
          var index = this.chatMessages.findIndex(function(message) {
            return message.MessageID === mData.MessageID;               // keep capital letter(s) => not a Message object
          });
          if (index !== -1) this.chatMessages.splice(index, 1);
          break;

        case "likeOnChatMessage":
          console.log(`User ${mData.User.UserID} liked msg: ${mData.Message.MessageID}`);   // keep capital letter(s) => not a Message object
          var index = this.chatMessages.findIndex(function(message) {
            return message.MessageID === mData.Message.MessageID;                           // keep capital letter(s) => not a Message object
          });
          if (index !== -1) {
            var message = this.chatMessages[index]
            message.Likes += 1;                                 // keep capital letter(s) => not a Message object
            message.LikedBy.push(mData.User);                   // keep capital letter(s) => not a Message object
            this.chatMessages[index] = message;
            this.chatMessages = this.chatMessages;
          }
          break;

        default:
          console.log("Ably: Invalid response");
      }

    }.bind(this));
  }

  IncommingPresencesHandler() {
    this.ablyChannel.presence.subscribe('enter', function(member) {
      console.log('Member ' + member.clientId + ' entered the chat');
    }.bind(this));
  }

  ngOnInit(): void {
    this.onFormValueChanges();
    // get user
    this.user = this._authenticationService.getUser();
    // make ably connection with user email as clientid
    this.ably = new Ably.Realtime({ 
      key: environment.ablyApiKeyR,
      clientId: this.user.email, 
      recover: function(_, cb) {cb(true);} 
    });
    this.ably.connection.on(function(stateChange) {
      console.log('New connection state is ' + stateChange.current);
    });
    // get talk, prepare your chatmessage and subscribe on ablyChannel
    this.getTalk();
    this.getOlderMesssages();
    this.prepareNewChatMessage();
    this.subscribeOnAblyChannel();
  }

}
