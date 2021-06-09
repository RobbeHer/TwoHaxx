import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Poll } from '../models/poll.model';
import { VoteUser } from '../models/vote-user.model';

@Injectable({
  providedIn: 'root'
})
export class PollService {
  
  domain: string = environment.domain;
  baseUrl: string = this.domain + "api/poll/";

  constructor(private http:HttpClient) { }

  getPolls(): Observable<Poll[]> {
    return this.http.get<Poll[]> (this.baseUrl);
  }

  getAvailablePollsOfRoom(roomID: number): Observable<Poll[]> {
    return this.http.get<Poll[]> (this.baseUrl + "available-of-room/" + roomID);
  }

  getPollsOfRoom(roomID: number): Observable<Poll[]> {
    return this.http.get<Poll[]> (this.baseUrl + "polls-of-room/" + roomID);
  }

  getPoll(pollID: number): Observable<Poll> {
    return this.http.get<Poll> (this.baseUrl + pollID);
  }

  addPoll(poll: Poll): Observable<Poll> {
    return this.http.post<Poll> (this.baseUrl, poll);
  }

  updatePoll(pollID: number, poll: Poll) {​​​​​
    return this.http.put<Poll>(this.baseUrl + pollID, poll);
  }​​​​​

  deletePoll(pollID: number) {​​​​​
    return this.http.delete<Poll>(this.baseUrl + pollID);
  }​​​​​

  sendVoteUser(voteUser: VoteUser): Observable<VoteUser> {
    return this.http.post<VoteUser> (this.baseUrl + "vote-user/", voteUser);
  }

  makePollAvailable(poll: Poll): Observable<Poll> {
    return this.http.post<Poll> (this.baseUrl + "make-available/", poll);
  }

  hidePoll(poll: Poll): Observable<Poll> {
    return this.http.post<Poll> (this.baseUrl + "hide/", poll);
  }
}
