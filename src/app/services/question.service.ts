import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  
  domain: string = environment.domain;
  baseUrl: string = this.domain + "api/question/";

  constructor(private http:HttpClient) { }

  getQuestions(): Observable<Message[]> {
    return this.http.get<Message[]> (this.baseUrl);
  } 

  sendQuestion(question: Message): Observable<Message> {
    return this.http.post<Message> (this.baseUrl, question);
  } 

  deleteQuestion(questionID: number) {
    return this.http.delete<Message> (this.baseUrl + questionID);
  }
}
