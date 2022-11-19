import { IOrder } from '../interfaces';
import OrdersModel from '../models/orders.model';

export default class OrdersService {
  public OrdersModel = new OrdersModel();

  public async getAll(): Promise<IOrder[]> {
    const allOrders = this.OrdersModel.getAll();

    return allOrders;
  }
}