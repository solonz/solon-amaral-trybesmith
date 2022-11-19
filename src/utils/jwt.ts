import jwt from 'jsonwebtoken';
import { ILogin, IUser } from '../interfaces';

export default function
generateToken(newUser: IUser | ILogin) {
  const data = { ...newUser };
  return jwt.sign(data, process.env.JWT_SECRET as string, { algorithm: 'HS256', expiresIn: '1d' });
}