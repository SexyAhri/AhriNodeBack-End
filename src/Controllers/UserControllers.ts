import { Request, Response } from "express";
import UserService from "../Services/UserService";
import User from "../Models/UserModel";

class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async createUser(req: Request, res: Response): Promise<void> {
    const { name, email, password } = req.body;
    try {
      const user: User = await this.userService.createUser(
        name,
        email,
        password
      );
      res.json(user);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async getUserById(req: Request, res: Response): Promise<void> {
    const userId: number = parseInt(req.params.id, 10);
    try {
      const user: User | null = await this.userService.getUserById(userId);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      const users: User[] = await this.userService.getAllUsers();
      res.json(users);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateUser(req: Request, res: Response): Promise<void> {
    const userId: number = parseInt(req.params.id, 10);
    const { name, email } = req.body;
    try {
      const user: User | null = await this.userService.updateUser(
        userId,
        name,
        email
      );
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteUser(req: Request, res: Response): Promise<void> {
    const userId: number = parseInt(req.params.id, 10);
    try {
      const result: boolean = await this.userService.deleteUser(userId);
      if (result) {
        res.json({ message: "User deleted successfully" });
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default UserController;
