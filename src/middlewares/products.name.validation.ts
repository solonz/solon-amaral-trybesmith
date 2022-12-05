import { NextFunction, Response, Request } from 'express';

export default function nameValidation(req: Request, res: Response, next: NextFunction) {
  const product = req.body;
  if (!product.name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  if (product.name.length < 3) {
    return res.status(422).json({ message: '"name" length must be at least 3 characters long' });
  }
  if (typeof product.name !== 'string') {
    return res.status(422).json({ message: '"name" must be a string' });
  }

  next();
}
