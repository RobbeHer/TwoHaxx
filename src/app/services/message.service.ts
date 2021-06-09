import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Message } from '../models/message.model';
import { UserLikeMessage } from '../models/user-like-message.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  
  domain: string = environment.domain;
  baseUrl: string = this.domain + "api/message/";

  constructor(private http:HttpClient) { }

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]> (this.baseUrl);
  } 

  getMessagesOfRoom(roomID: number): Observable<Message[]> {
    return this.http.get<Message[]> (this.baseUrl + "room/" + roomID);
  }

  sendMessage(message: Message): Observable<Message> {
    return this.http.post<Message> (this.baseUrl, message);
  } 

  deleteMessage(messageID: number) {
    return this.http.delete<Message> (this.baseUrl + messageID);
  }

  likeMessage(userLikeMessage: UserLikeMessage): Observable<UserLikeMessage> {​​​​​
    return this.http.post<UserLikeMessage>(this.baseUrl + 'liked/', userLikeMessage);
  }​​​​​
}
