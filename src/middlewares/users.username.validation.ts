import { NextFunction, Response, Request } from 'express';

export default function usersUsername(req: Request, res: Response, next: NextFunction) {
  const user = req.body;
  if (!user.username) {
    return res.status(400).json({ message: '"username" is required' });
  }
  if (user.username.length < 3) {
    return res.status(422)
      .json({ message: '"username" length must be at least 3 characters long' });
  }
  if (typeof user.username !== 'string') {
    return res.status(422).json({ message: '"username" must be a string' });
  }

  next();
}
