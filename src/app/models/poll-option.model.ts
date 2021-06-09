import { Poll } from "./poll.model";
import { User } from "./user.model";

export class PollOption {
    public pollOptionID: number;
    public content: string;
    public votes: number;
    public votedBy: User[];
    public pollID: number;
    public poll: Poll;
}
