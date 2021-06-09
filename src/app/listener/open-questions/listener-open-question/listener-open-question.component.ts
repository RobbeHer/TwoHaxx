import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listener-open-question',
  templateUrl: './listener-open-question.component.html',
  styleUrls: ['./listener-open-question.component.scss']
})
export class ListenerOpenQuestionComponent implements OnInit {

  @Input() talkID: number;

  constructor() { }

  ngOnInit(): void {
  }

}
