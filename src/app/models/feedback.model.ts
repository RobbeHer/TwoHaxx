import { Talk } from "./talk.model";
import { User } from "./user.model";

export class Feedback {
    public feedbackID: number;
    public score: number;
    public content: string;
    public userID: number;
    public user: User;
    public talkID: number;
    public talk: Talk;
}
