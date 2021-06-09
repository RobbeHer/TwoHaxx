import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as Ably from 'ably';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-test-chat',
  templateUrl: './test-chat.component.html',
  styleUrls: ['./test-chat.component.scss']
})
export class TestChatComponent implements OnInit {

  ably;
  channel;
  id;
  berichten: string[] = [];
  room = 'testRoom1';
  channelOptions = {
    params: {
      rewind: '100'
    }
  }

  constructor(private http:HttpClient) { }

  send() {
    var result = this.http.get<string> ("https://localhost:44348/api/message/sendmsg").subscribe(result => {
      console.log(result);
    });

  }

  goroom(text) {
    this.room = text;
    this.subscribeOnChannel();
  }

  subscribeOnChannel() {
    if (this.channel) this.channel.unsubscribe();
    this.channel = this.ably.channels.get(this.room);
    // messages
    this.channel.subscribe(function(message) {
      this.msgchannel(message);
    }.bind(this));
    //presence
    this.channel.presence.subscribe('enter', function(member) {
      this.msgpresence(member, 'entered');
    }.bind(this));
    this.channel.presence.enter();
  }

  msgpresence(member, state) {
    console.log('Member ' + member.clientId + ' ' + state);
  }
  msgchannel(message) {
    var data = JSON.parse(message.data);
    console.log(data);
    console.log('Received: ' + data.type + ' says ' + data.data);
    this.berichten.push('Received: ' + data.type + ' says ' + data.data)
    //console.log('Received: ' + message.data);
  }

  ngOnInit(): void {
    this.id = "bob"
    
    this.ably = new Ably.Realtime({ 
      key: environment.ablyApiKeyR,
      clientId: this.id, 
      recover: function(_, cb) {cb(true);} 
    });
    this.ably.connection.on(function(stateChange) {
      console.log('New connection state is ' + stateChange.current);
    });
    this.subscribeOnChannel();
  }

}
