import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces';

export default function
generateToken(newUser: IUser) {
  const data = { ...newUser };
  return jwt.sign(data, process.env.JWT_SECRET as string, { algorithm: 'HS256', expiresIn: '1d' });
}