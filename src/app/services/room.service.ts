import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../models/room.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  
  domain: string = environment.domain;
  baseUrl: string = this.domain + "api/room/";

  constructor(private http:HttpClient) { }

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]> (this.baseUrl);
  } 

  getRoom(roomID: number): Observable<Room> {
    return this.http.get<Room> (this.baseUrl + roomID);
  } 

  addRoom(room: Room): Observable<Room> {
    return this.http.post<Room> (this.baseUrl, room);
  } 

  updateRoom(roomID: number, room: Room) {​​​​​
    return this.http.put<Room>(this.baseUrl + roomID, room);
  }​​​​​

  deleteRoom(roomID: number) {​​​​​
    return this.http.delete<Room>(this.baseUrl + roomID);
  }​​​​​

  // Planning
  getPlannings(): Observable<Room[]> {
    return this.http.get<Room[]> (this.baseUrl + 'plannings');
  } 

  getPlanning(roomID: number): Observable<Room> {
    return this.http.get<Room> (this.baseUrl + 'planning/' + roomID);
  } 

}