export class User {
    public userID: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    public password: string;
    public activeDirectoryGUID: string;
    public isAdmin: boolean;
    public isGuest: boolean;
    public token: string;
    public talksAsTalker: any;
    public talksAsModerator: any;
    
    constructor(){}
}