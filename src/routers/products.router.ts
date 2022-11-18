import { Router } from 'express';
import ProductsController from '../controllers/products.controller';

const productsRouter = Router();

const productsController = new ProductsController();

productsRouter.post('/products', productsController.insert.bind(productsController));
productsRouter.get('/products', productsController.getAll.bind(productsController));

export default productsRouter;