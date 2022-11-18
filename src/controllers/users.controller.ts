import { Request, Response } from 'express';
import UsersService from '../services/users.service';

export default class UsersController {
  public UsersService = new UsersService();

  public async insertUser(req: Request, res: Response) {
    const newUser = req.body;
    const token = await this.UsersService.insertUser(newUser);
    return res.status(201).json(token);
  }
}