import { Talk } from "./talk.model";
import { User } from "./user.model";

export class Message {
    public messageID: number;
    public content: string;
    public isQuestion: boolean;
    public isAnswered: boolean;
    public likes: number;
    public likedBy: User[]
    public timeStamp: Date;
    public userID: number;
    public user: User;
    public talkID: number;
    public talk: Talk;
}
