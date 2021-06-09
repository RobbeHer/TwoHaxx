import { from } from "rxjs";
import { User } from "./user.model";
import { Room } from "./room.model";

export class Talk {
    public talkID: number;
    public name: string;
    public description: string;
    public startdate: Date|string;
    public startDate: Date;
    public enddate: Date|string;
    public endDate: Date;
    public talkerID: number;
    public talker: User;
    public moderatorID: number;
    public moderator: User;
    public roomID: number;
    public room: Room;
    public code: number;
}
