import { PollOption } from "./poll-option.model";
import { User } from "./user.model";

export class VoteUser {
    public voteUserID: number;
    public userID: number;
    public user: User;
    public pollOptionID: number;
    public pollOption: PollOption;
}
