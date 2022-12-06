import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import IRequest from '../interfaces/modifiedRequest';

export default function validateToken(req: IRequest, res: Response, next: NextFunction) {
  const secret = process.env.JWT_SECRET;
  const { authorization: authHeader } = req.headers;
  if (!authHeader) {
    return res.status(401).json({ message: 'Token not found' });
  }
  
  const [, token] = authHeader.split(' ');
  
  try {
    const user = jwt.verify(
      token, 
      secret as string,
    );
  
    req.body.user = user as IRequest['user'];
  
    return next();
  } catch (_err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}