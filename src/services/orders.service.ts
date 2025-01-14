import { IOrder } from '../interfaces';
// import productsValidation from '../middlewares/orders.products.validation';
import response from '../middlewares/response';
import validateProducts from '../middlewares/zod.validation';
import OrdersModel from '../models/orders.model';
import ProductsModel from '../models/products.model';

export default class OrdersService {
  public OrdersModel = new OrdersModel();

  public ProductsModel = new ProductsModel();

  public async getAll(): Promise<IOrder[]> {
    const allOrders = this.OrdersModel.getAll();

    return allOrders;
  }

  public async insertOrder(productsIds: number[], userId: number) {
    const { error } = validateProducts(productsIds);

    if (error) {
      return response(error.status, { message: error.message });
    }
    
    const allProducts = await this.ProductsModel.getAll();
    console.log({ allProducts, productsIds });

    if (!productsIds.every((id) => (allProducts
      .map(({ id: productsId }) => (productsId)).includes(id)))) {
      return response(400, { message: '' });
    }

    await this.OrdersModel.insertOrder(productsIds, userId);

    return response(201, { userId, productsIds });
  }
}