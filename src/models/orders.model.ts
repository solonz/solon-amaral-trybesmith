import { ResultSetHeader, RowDataPacket } from 'mysql2';
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

  public async insertOrder(productsIds: number[], userId: number) {
    console.log(userId);
    
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.Orders (userId) VALUE (?)`, [userId]);
    console.log('insert');

    const [{ affectedRows }] = await this.connection.execute<ResultSetHeader>(
      `
      UPDATE Trybesmith.Products
      SET orderId = ?
      WHERE id IN (${productsIds.map(() => ('?')).join(', ')})
      `,
      [insertId, ...productsIds],
    );
    console.log('update');

    return !!affectedRows;
  }

  // productsIds.forEach(async (ids) => {
  //   await this.connection.execute<ResultSetHeader>(
  //     'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?',
  //     [insertId, ids],
  //   );
  // });
}
