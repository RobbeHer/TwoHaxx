import { Message } from "./message.model";
import { User } from "./user.model";

export class UserLikeMessage {
    public userLikeMessageID: number;
    public userID: number;
    public user: User;
    public messageID: number;
    public message: Message;
}
