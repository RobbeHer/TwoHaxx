import { Component, OnInit } from '@angular/core';
import { Observable }​​​​​​​ from 'rxjs';
import { Room }​​​​​​​ from 'src/app/models/room.model';
import { RoomService }​​​​​​​ from 'src/app/services/room.service';

@Component({
  selector: 'app-admin-overview-plannings',
  templateUrl: './admin-overview-plannings.component.html',
  styleUrls: ['./admin-overview-plannings.component.scss']
})
export class AdminOverviewPlanningsComponent implements OnInit {
  plannings: Room[];
  orderAlphabetically: number = 1;  // 0 => unordered, 1 => alphabetically, 2 => not alphabetically

  constructor(private _roomService: RoomService) {
    this.getPlannings();
  }

  getPlannings() { 
    this._roomService.getPlannings().subscribe(result => {
      this.plannings = result;
      this.plannings.sort((a, b) => {
        return (this.orderAlphabetically == 1) ? (a.name > b.name) ? 1 : -1 : (a.name > b.name) ? -1 : 1;
      }); 
      this.plannings.forEach(planning => {
        planning.talks.sort((a, b) => {
          return (this.orderAlphabetically == 1) ? (a.name > b.name) ? 1 : -1 : (a.name > b.name) ? -1 : 1;
        }); 
      });
    });
  }

  ngOnInit(): void {}

}
