import { Request, Response } from 'express';
import { IProduct } from '../interfaces';
import productsService from '../services/products.service';

async function insert(req: Request, res: Response) {
  const product: IProduct = req.body;
  
  const newProduct = await productsService.insert(product);
  
  if (newProduct) {
    return res.status(201).json(newProduct);
  }
}

export default {
  insert,
};