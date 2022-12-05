import { NextFunction, Response, Request } from 'express';

export default function usersLevel(req: Request, res: Response, next: NextFunction) {
  const user = req.body;
  if (!user.level && user.level !== 0) {
    return res.status(400).json({ message: '"level" is required' });
  }
  if (typeof user.level !== 'number') {
    return res.status(422).json({ message: '"level" must be a number' });
  }
  if (user.level <= 0) {
    return res.status(422).json(
      { message: '"level" must be greater than or equal to 1' },
    );
  }

  next();
}
