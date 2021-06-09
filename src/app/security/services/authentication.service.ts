import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  domain: string = environment.domain;
  baseUrl: string = this.domain + "api/user/authenticate";

  constructor(private _httpClient: HttpClient) { }

  authenticate(user: User): Observable<User> {
    return this._httpClient.post<User>(this.baseUrl, user);
  }

  getUserFromLocalStorage(): User {
    return JSON.parse(localStorage.getItem("user"));
  }

  getUser(): User {
    return this.getUserFromLocalStorage();
  }

  getUserId(): number {
    let user: User = this.getUserFromLocalStorage();
    return (user !== null) ? user.userID :  0;
  }

  isLoggedIn() {
    return (localStorage.getItem("token") !== null) ? true : false;
  }

  isAdmin() {
    return this.getUserFromLocalStorage().isAdmin;
  }

  isGuest() {
    return this.getUserFromLocalStorage().isGuest;
  }

  signOut() {
    localStorage.clear();
  }
}
