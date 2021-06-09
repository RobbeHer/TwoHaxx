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
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  Content
} from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-speaker-add-poll',
  templateUrl: './speaker-add-poll.component.html',
  styleUrls: ['./speaker-add-poll.component.scss']
})
export class SpeakerAddPollComponent implements OnInit {

  talkID: number;
  newPoll: Poll = new Poll();
  submitted = false;
  pollForm = this.fb.group({
    name: ['', Validators.required],
    question: [''],
    pollOptions: this.fb.array([
      this.fb.control('')
    ])
  });

  get pollOptions() {
    return this.pollForm.get('pollOptions') as FormArray;
  }

  constructor(
    private _Activatedroute: ActivatedRoute,
    private _pollService: PollService,
    private fb: FormBuilder) {}


  addPollOptions() {
    this.pollOptions.push(this.fb.control(''));
  }


  onFormValueChanges() {
    this.pollForm.get('name').valueChanges.subscribe(val => {
      this.newPoll.name = val;
    });
    this.pollForm.get('question').valueChanges.subscribe(val => {
      this.newPoll.question = val;
    })
    this.pollForm.get('pollOptions').valueChanges.subscribe(val => {
      this.newPoll.pollOptions = val.map(option => {
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
    this._pollService.addPoll(this.newPoll).subscribe(() => {
      location.assign("/speaker/polls/" + this.talkID);
    });
  }

  ngOnInit(): void {
    this.onFormValueChanges();
    this._Activatedroute.params.subscribe(params => {
      this.talkID = Number(params['talkid']);
      this.newPoll.talkID = this.talkID;
    });
  }

}
