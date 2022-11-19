import { Response, Request } from 'express';
import { ILogin } from '../interfaces';
import LoginService from '../services/login.service';

export default class LoginController {
  public loginService = new LoginService();

  async login(req: Request, res: Response) {
    const userData: ILogin = req.body;
    const result = await this.loginService.login(userData);
    return res.status(result.status).json(result.response);
  }
}