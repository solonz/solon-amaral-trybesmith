import { Router } from 'express';
import ProductsController from '../controllers/products.controller';
import amountValidation from '../middlewares/products.amount.validation';
import nameValidation from '../middlewares/products.name.validation';

const productsRouter = Router();

const productsController = new ProductsController();

productsRouter.post(
  '/products', 
  nameValidation, 
  amountValidation,
  productsController.insert.bind(productsController),
);
productsRouter.get('/products', productsController.getAll.bind(productsController));

export default productsRouter;