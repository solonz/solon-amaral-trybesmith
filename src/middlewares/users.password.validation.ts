import { NextFunction, Response, Request } from 'express';

export default function usersPassword(req: Request, res: Response, next: NextFunction) {
  const user = req.body;
  if (!user.password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  if (typeof user.password !== 'string') {
    return res.status(422).json({ message: '"password" must be a string' });
  }
  if (user.password.length < 8) {
    return res.status(422)
      .json({ message: '"password" length must be at least 8 characters long' });
  }

  next();
}
