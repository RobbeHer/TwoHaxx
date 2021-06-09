import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  domain: string = environment.domain;
  baseUrl: string = this.domain + "api/user/";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]> (this.baseUrl);
  } 

  getUser(userID: number): Observable<User> {
    return this.http.get<User> (this.baseUrl + userID);
  } 

  addUser(user: User) {
    return this.http.post<User>(this.baseUrl, user); 
  }

  updateUser(userID: number, user: User) {​​​​​
    return this.http.put<User>(this.baseUrl + userID, user);
  }​​​​​

  deleteUser(userID: number) {​​​​​
    return this.http.delete<User>(this.baseUrl + userID);
  }​​​​​
}
