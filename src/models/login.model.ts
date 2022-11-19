import { RowDataPacket } from 'mysql2';
import { ILogin } from '../interfaces';
import mysql from './connection';

export default class LoginModel {
  private connection = mysql;

  public async login(userData: ILogin): Promise<ILogin[]> {
    const { username, password } = userData;
    const [result] = await this.connection.execute<ILogin[] & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Users WHERE username=? AND password=?',
      [username, password],
    );
    return result;
  }
}