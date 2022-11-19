import { Response, Request } from 'express';
import OrdersService from '../services/orders.service';

export default class OrdersController {
  public ordersService = new OrdersService();

  async getAll(_req: Request, res: Response): Promise<object> {
    const allOrders = await this.ordersService.getAll();

    return res.status(200).json(allOrders);
  }
}