import { NextFunction, Response, Request } from 'express';

export default function usersClasse(req: Request, res: Response, next: NextFunction) {
  const user = req.body;
  if (!user.classe) {
    return res.status(400).json({ message: '"classe" is required' });
  }
  if (user.classe.length < 3) {
    return res.status(422)
      .json({ message: '"classe" length must be at least 3 characters long' });
  }
  if (typeof user.classe !== 'string') {
    return res.status(422).json({ message: '"classe" must be a string' });
  }

  next();
}
