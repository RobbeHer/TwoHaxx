import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Talk } from '../models/talk.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TalkService {

  domain: string = environment.domain;
  baseUrl: string = this.domain + "api/talk/";

  constructor(private http:HttpClient) { }

  getTalks(): Observable<Talk[]> {
    return this.http.get<Talk[]> (this.baseUrl);
  }

  getTalk(talkID: number): Observable<Talk> {
    return this.http.get<Talk> (this.baseUrl + talkID);
  }

  addTalk(talk: Talk): Observable<Talk> {
    return this.http.post<Talk> (this.baseUrl, talk);
  }

  updateTalk(talkID: number, talk: Talk) {​​​​​
    return this.http.put<Talk>(this.baseUrl + talkID, talk);
  }​​​​​

  deleteTalk(talkID: number) {​​​​​
    return this.http.delete<Talk>(this.baseUrl + talkID);
  }​​​​​

  canJoinTalk(talkID: number, code: string): Observable<Boolean> {
    return this.http.get<Boolean> (this.baseUrl + "join/" + talkID + "?code=" + code);
  }

  // Talks of room
  getTalksOfRoom(roomID: number): Observable<Talk[]> {
    return this.http.get<Talk[]> (this.baseUrl + 'talks-of-room/' + roomID);
  } 
}