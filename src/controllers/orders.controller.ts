import { Response, Request } from 'express';
import IRequest from '../interfaces/modifiedRequest';
import OrdersService from '../services/orders.service';

export default class OrdersController {
  public ordersService = new OrdersService();

  public async getAll(_req: Request, res: Response): Promise<object> {
    const allOrders = await this.ordersService.getAll();

    return res.status(200).json(allOrders);
    // const userId = user?.id;
  }

  public async insertOrder(req: IRequest, res: Response) {
    const { status, result } = await this.ordersService
      .insertOrder(req.body.productsIds, req.user?.id as number);

    console.log(result);
      
    return res.status(status).json(result);
  }
}