import { Request, Response } from 'express';
// import { IProduct } from '../interfaces';
import ProductsService from '../services/products.service';

export default class ProductsController {
  public productsService = new ProductsService();
  
  async insert(req: Request, res: Response) {
    const product = req.body;
      
    const insertProduct = await this.productsService.insert(product);
  
    return res.status(201).json(insertProduct);
  }

  async getAll(_req: Request, res: Response) {
    const allProducts = await this.productsService.getAll();

    return res.status(200).json(allProducts);
  }
}