import { Router } from 'express';
import OrdersController from '../controllers/orders.controller';
// import productsValidation from '../middlewares/orders.products.validation';
import validateToken from '../middlewares/token.validation';

const ordersRouter = Router();

const ordersController = new OrdersController();

ordersRouter.get('/orders', ordersController.getAll.bind(ordersController));
ordersRouter.post(
  '/orders', 
  validateToken,
  //   productsValidation, 
  ordersController.insertOrder.bind(ordersController),
);

export default ordersRouter;