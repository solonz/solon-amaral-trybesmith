import { RowDataPacket, ResultSetHeader } from 'mysql2';
import { IProduct } from '../interfaces';
import mysql from './connection';

export default class ProductsModel {
  private connection = mysql;
  
  public async insert(product: IProduct): Promise<IProduct> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUE (?, ?)',
      [product.name, product.amount],
    );
    
    return { id: insertId, ...product };
  }
  
  public async getAll(): Promise<IProduct[]> {
    const [allProducts] = await this.connection.execute<IProduct[] & RowDataPacket[]>(
      'SELECT id, name, amount FROM Trybesmith.Products',
    );
    return allProducts;
  }
}
// async getById(id: number) {
//   const [[result]] = await this.connection.execute<IProduct & RowDataPacket[]>(
//     'SELECT id, name, amount FROM Trybesmith.Products WHERE id = (?)',
//     [id],
//   );
//   return result;
// }