import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room }​​​​​​​ from 'src/app/models/room.model';
import { RoomService }​​​​​​​ from 'src/app/services/room.service';
import { Talk }​​​​​​​ from 'src/app/models/talk.model';
import { TalkService }​​​​​​​ from 'src/app/services/talk.service';

@Component({
  selector: 'app-admin-overview-planning',
  templateUrl: './admin-overview-planning.component.html',
  styleUrls: ['./admin-overview-planning.component.scss']
})
export class AdminOverviewPlanningComponent implements OnInit {
  planning: Room;
  orderAlphabetically: number = 1;  // 0 => unordered, 1 => alphabetically, 2 => not alphabetically
  
  constructor(
    private _router: Router, 
    private _Activatedroute: ActivatedRoute,
    private _roomService: RoomService,
    private _talkService: TalkService) { }

  getPlanning(id: number) {
    this._roomService.getPlanning(id).subscribe(planning => {
      this.planning = planning;
      planning.talks.sort((a, b) => {
        return (this.orderAlphabetically == 1) ? (a.name > b.name) ? 1 : -1 : (a.name > b.name) ? -1 : 1;
      });
    });
  }

  deleteTalk(talkID: number) {​​​​​
    this._talkService.deleteTalk(talkID).subscribe(() => {​​​​​
      this._router.navigateByUrl('/admin/plannings');
    }​​​​​);
  }

  ngOnInit(): void {
    this._Activatedroute.params.subscribe(params => {
      let id = Number(params['id']);
      this.getPlanning(id);
    })
  }

}
