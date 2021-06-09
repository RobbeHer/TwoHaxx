import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  Poll
} from 'src/app/models/poll.model';
import {
  PollService
} from 'src/app/services/poll.service';
import {
  FormArray,
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-speaker-edit-poll',
  templateUrl: './speaker-edit-poll.component.html',
  styleUrls: ['./speaker-edit-poll.component.scss']
})
export class SpeakerEditPollComponent implements OnInit {

  talkID: number;
  pollID: number;
  poll: Poll;
  submitted = false;
  pollForm = this.fb.group({
    name: ['', Validators.required],
    question: [''],
    pollOptions: this.fb.array([
      this.fb.control('')
    ])
  });

  constructor(
    private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private _pollService: PollService,
    private fb: FormBuilder) {}

  get pollOptions() {
    return this.pollForm.get('pollOptions') as FormArray;
  }


  addPollOptions() {
    this.pollOptions.push(this.fb.control(''));
  }

  getPoll(id: number) {
    this._pollService.getPoll(id).subscribe(poll => {
      console.log(poll);
      this.poll = poll;
      this.poll.talkID = this.talkID;
      this.patchForm();
    });
  }

  patchForm() {
    this.pollForm.patchValue({
      name: this.poll.name,
      question: this.poll.question
    });
  }

  onFormValueChanges() {
    this.pollForm.get('name').valueChanges.subscribe(val => {
      this.poll.name = val;
    });
    this.pollForm.get('question').valueChanges.subscribe(val => {
      this.poll.question = val;
    });
    this.pollForm.get('pollOptions').valueChanges.subscribe(val => {
      this.poll.pollOptions = val.map(option => {
        return {
          pollID: 0,
          pollOptionID: 0,
          content: option,
          votes: 0
        }
      });
    })
  }

  onSubmit() {
    this.submitted = true;
    this._pollService.updatePoll(this.poll.pollID, this.poll).subscribe(() => {
      location.assign("/speaker/polls/" + this.talkID);
    });;
  }

  ngOnInit(): void {
    this.onFormValueChanges();
    this._Activatedroute.params.subscribe(params => {
      this.talkID = Number(params['talkid']);
      this.pollID = Number(params['pollid']);
      this.getPoll(this.pollID);
    });
  }

}
