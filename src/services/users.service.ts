import { IUser } from '../interfaces';
import UsersModel from '../models/users.model';
import generateToken from '../utils/jwt';

export default class UsersService {
  public UsersModel = new UsersModel();

  public async insertUser(newUser: IUser): Promise<object> {
    const user = await this.UsersModel.insertUser(newUser);
    const token = generateToken(user);
    return { token };
  }
}
