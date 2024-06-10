import User from "../Models/UserModel";

class UserService {
  // 创建用户
  public async createUser(
    name: string,
    email: string,
    password: string
  ): Promise<User> {
    try {
      console.log(User);
      const user = await User.create({ name, email, password });
      return user;
    } catch (error) {
      throw new Error("Failed to create user");
    }
  }

  // 根据ID查询用户
  public async getUserById(id: number): Promise<User | null> {
    try {
      const user = await User.findByPk(id);
      return user;
    } catch (error) {
      throw new Error("Failed to get user");
    }
  }

  // 根据ID编辑用户
  public async updateUser(
    id: number,
    name: string,
    email: string
  ): Promise<User | null> {
    try {
      const user = await User.findByPk(id);
      if (user) {
        user.name = name;
        user.email = email;
        await user.save();
        return user;
      }
      return null;
    } catch (error) {
      throw new Error("Failed to update user");
    }
  }

  // 根据ID删除用户
  public async deleteUser(id: number): Promise<boolean> {
    try {
      const result = await User.destroyById(id);
      return result > 0;
    } catch (error) {
      throw new Error("Failed to delete user");
    }
  }

  // 获取所有用户
  public async getAllUsers(): Promise<User[]> {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      throw new Error("Failed to get all users");
    }
  }

  // 其他用户操作方法...
}

export default UserService;
