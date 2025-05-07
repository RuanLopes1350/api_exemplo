export interface User {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

export class UserModel implements User {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(user:User) {
        this.id = user.id;
        this.name = user.name;
        this.email = user.email;
        this.updatedAt = user.createdAt;
        this.createdAt = user.updatedAt;
    }
}