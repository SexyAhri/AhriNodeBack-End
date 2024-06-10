import express, { Request, Response } from "express";
import UserController from "../Controllers/UserControllers";

const router = express.Router();
const userController = new UserController();

// 创建用户
router.post("/users", async (req: Request, res: Response) => {
  await userController.createUser(req, res);
});

// 查询所有用户
router.get("/users", async (req: Request, res: Response) => {
  await userController.getAllUsers(req, res);
});

// 查询单个用户
router.get("/users/:id", async (req: Request, res: Response) => {
  await userController.getUserById(req, res);
});

// 更新用户
router.put("/users/:id", async (req: Request, res: Response) => {
  await userController.updateUser(req, res);
});

// 删除用户
router.delete("/users/:id", async (req: Request, res: Response) => {
  await userController.deleteUser(req, res);
});

export default router;
