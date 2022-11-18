// import { RowDataPacket, ResultSetHeader } from 'mysql2';
import { ResultSetHeader } from 'mysql2';
import { IUser } from '../interfaces';
import mysql from './connection';

export default class UsersModel {
  private connection = mysql;

  public async insertUser(newUser: IUser): Promise<IUser> {
    const { username, classe, level, password } = newUser;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    return { ...newUser, id: insertId };
  }
}