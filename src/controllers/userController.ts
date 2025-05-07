import { Request, Response } from "express";
import { UserService } from "../services/userService";
import { CreateUserDTO, UpdateUserDTO } from "../dtos/userDTO";

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    getAllUsers = async (req: Request, res: Response): Promise<void> => {
        try {
            const users = await this.userService.getAllUsers();
            res.status(200).json(users);
        } catch (error: any) {
            res.status(500).json({ message: error.message || 'Erro ao buscar usuários' });
        }
    }

    getUserById = async (req: Request, res: Response): Promise<void> => {
        try {
            const id = parseInt(req.params.id);
            const user = await this.userService.getUserById(id);

            if(!user) {
                res.status(404).json({message: 'Usuário não encontrado'});
                return;
            }

            res.status(200).json(user);
        } catch (error: any) {
            res.status(500).json({message: error.message || 'Erro ao buscar usuário'});
        }
    }

    createUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const createUserDto: CreateUserDTO = req.body;
            const user = await this.userService.createUser(createUserDto)
            res.status(201).json(user);
        } catch (error: any) {
            res.status(400).json({message: error.message || 'Erro ao criar usuário'});
        }
    }

    updateUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const id = parseInt(req.params.id);
            const updateUserDto: UpdateUserDTO = req.body;
            const user = await this.userService.updateUser(id, updateUserDto);
            
            if (!user) {
                res.status(404).json({ message: 'Usuário não encontrado' });
                return;
            }
            
            res.status(200).json(user);
        } catch (error: any) {
            res.status(500).json({ message: error.message || 'Erro ao atualizar usuário' });
        }
    }

    deleteUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const id = parseInt(req.params.id);
            const deleted = await this.userService.deleteUser(id);
            
            if (!deleted) {
                res.status(404).json({ message: 'Usuário não encontrado' });
                return;
            }
            
            res.status(204).end();
        } catch (error: any) {
            res.status(500).json({ message: error.message || 'Erro ao excluir usuário' });
        }
    }
}
