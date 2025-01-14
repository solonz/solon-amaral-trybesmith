import { ILogin } from '../interfaces';
import LoginModel from '../models/login.model';
import generateToken from '../utils/jwt';

export default class LoginService {
  public loginModel = new LoginModel();

  public async login(userData: ILogin) {
    const result = await this.loginModel.login(userData);
    console.log(result);

    if (!result.length) { 
      return { 
        status: 401, 
        response: { 
          message: 'Username or password invalid', 
        }, 
      }; 
    } 
    const token = generateToken(result[0]);
    return {
      status: 200,
      response: { token },
    };
  }
}