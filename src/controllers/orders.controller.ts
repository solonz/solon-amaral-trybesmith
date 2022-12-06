import { Response, Request } from 'express';
import IRequest from '../interfaces/modifiedRequest';
import OrdersService from '../services/orders.service';

export default class OrdersController {
  public ordersService = new OrdersService();

  public async getAll(_req: Request, res: Response): Promise<object> {
    const allOrders = await this.ordersService.getAll();

    return res.status(200).json(allOrders);
  }

  public async insertOrder(req: IRequest, res: Response) {
    // const userId = user?.id;
    const { status, result } = await this.ordersService
      .insertOrder(req.body.productsIds, req.user?.id as number);

    return res.status(status).json(result);
  }
}