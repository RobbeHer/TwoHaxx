import { Component, OnInit } from '@angular/core';
import { Talk } from 'src/app/models/talk.model';
import { TalkService } from 'src/app/services/talk.service';

@Component({
  selector: 'app-moderator-consult-feedback',
  templateUrl: './moderator-consult-feedback.component.html',
  styleUrls: ['./moderator-consult-feedback.component.scss']
})
export class ModeratorConsultFeedbackComponent implements OnInit {
  talks: Talk[];
  orderAlphabetically: number = 1;  // 0 => unordered, 1 => alphabetically, 2 => not alphabetically
  
  constructor(private _talkService: TalkService) {
    this.getTalks();
  }

  getTalks() {
    this._talkService.getTalks().subscribe(result => {
      this.talks = result;
      this.talks.sort((a, b) => {
        return (this.orderAlphabetically == 1) ? (a.name > b.name) ? 1 : -1 : (a.name > b.name) ? -1 : 1;
      });
    });
  }

  ngOnInit(): void {
  }

}
