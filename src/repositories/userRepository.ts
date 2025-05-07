import {User, UserModel} from '../models/user';
import { CreateUserDTO, UpdateUserDTO } from '../dtos/userDTO';

export class UserRepository {
    private users: User[] = [];
    private nextId: number = 1;

    async findAll(): Promise<User[]> {
        return this.users;
    }

    async findById(id:number): Promise<User | null> {
        const user = this.users.find(user => user.id === id);
        return user || null;
    }

    async create(createUserDto: CreateUserDTO): Promise<User> {
        const now = new Date();
        const newUser: User = {
            id: this.nextId++,
            name: createUserDto.name,
            email: createUserDto.email,
            createdAt: now,
            updatedAt: now,
        };
        this.users.push(newUser);
        return newUser;
    }

    async update(id:number, updateUserDto: UpdateUserDTO): Promise<User | null> {
        const userIndex = this.users.findIndex(user => user.id === id);

        if(userIndex === -1) {
            return null;
        }

        const updateUser = {
            ...this.users[userIndex],
            ...updateUserDto,
            updatedAt: new Date()
        };

        this.users[userIndex] = updateUser;
        return updateUser;
    }

    async delete(id:number): Promise<boolean> {
        const userIndex = this.users.findIndex(user => user.id === id);

        if(userIndex === -1) {
            return false;
        }

        this.users.splice(userIndex, 1);
        return true;
    }
}