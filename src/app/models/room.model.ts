import { Talk } from './talk.model';

export class Room {
    public roomID: number;
    public name: string;
    public description: string;
    public startdate: Date;
    public enddate: Date;
    public talks: Talk[];
}
