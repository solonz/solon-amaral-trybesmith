import { RowDataPacket } from 'mysql2';
import { IOrder } from '../interfaces';
import mysql from './connection';

export default class OrdersModel {
  private connection = mysql;

  public async getAll(): Promise<IOrder[]> {
    const [allOrders] = await this.connection.execute<IOrder[] & RowDataPacket[]>(
      `SELECT Orders.id, userId, JSON_ARRAYAGG(Products.Id) AS productsIds
        FROM Trybesmith.Orders AS Orders
        INNER JOIN Trybesmith.Products AS Products
        ON Products.orderId = Orders.Id
        GROUP BY Orders.id`,
    );
    return allOrders;
  }
}