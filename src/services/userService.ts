import { UserRepository } from '../repositories/userRepository';
import { CreateUserDTO, UpdateUserDTO, UserResponseDto } from '../dtos/userDTO';
import { User } from '../models/user';

export class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async getAllUsers(): Promise<UserResponseDto[]> {
        const users = await this.userRepository.findAll();
        return users.map(user => this.mapToResponseDto(user));
    }

    async getUserById(id: number): Promise<UserResponseDto | null> {
        const user = await this.userRepository.findById(id);
        if (!user) {
            return null;
        }
        return this.mapToResponseDto(user);
    }

    async createUser(createUserDto: CreateUserDTO): Promise<UserResponseDto> {
        // Aqui você pode adicionar validações
        if (!createUserDto.name || !createUserDto.email) {
            throw new Error('Nome e email são obrigatórios');
        }

        // Verificar se o email já existe
        const users = await this.userRepository.findAll();
        const emailExists = users.some(user => user.email === createUserDto.email);
        if (emailExists) {
            throw new Error('Email já cadastrado');
        }

        const user = await this.userRepository.create(createUserDto);
        return this.mapToResponseDto(user);
    }

    async updateUser(id: number, updateUserDto: UpdateUserDTO): Promise<UserResponseDto | null> {
        const updatedUser = await this.userRepository.update(id, updateUserDto);
        if (!updatedUser) {
            return null;
        }
        return this.mapToResponseDto(updatedUser);
    }

    async deleteUser(id: number): Promise<boolean> {
        return await this.userRepository.delete(id);
    }

    private mapToResponseDto(user: User): UserResponseDto {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        };
    }
}