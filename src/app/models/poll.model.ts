import { PollOption } from './poll-option.model';
import { Talk } from './talk.model';

export class Poll {
    public pollID: number;
    public name: string;
    public question: string;
    public isAvailable: boolean;
    public pollOptions: PollOption[];
    // public aliases: string[];
    public talkID: number;
    public talk: Talk;
}
