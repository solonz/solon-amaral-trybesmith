import { NextFunction, Response, Request } from 'express';

export default function amountValidation(req: Request, res: Response, next: NextFunction) {
  const product = req.body;
  if (!product.amount) {
    return res.status(400).json({ message: '"amount" is required' });
  }
  if (typeof product.amount !== 'string') {
    return res.status(422).json({ message: '"amount" must be a string' });
  }
  if (product.amount.length < 3) {
    return res.status(422).json({ message: '"amount" length must be at least 3 characters long' });
  } 
  next();
}