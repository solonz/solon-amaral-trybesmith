import { RowDataPacket } from 'mysql2';
import { IInsertId, IProduct } from '../interfaces';
import connection from './connection';

async function getById(id: number) {
  const [[result]] = await connection.execute<IProduct & RowDataPacket[]>(
    'SELECT id, name, amount FROM Trybesmith.Products WHERE id = (?)',
    [id],
  );
  return result;
}

async function insert(product: IProduct) {
  const [{ insertId }] = await connection.execute<IInsertId & RowDataPacket[]>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUE (?, ?)',
    [product.name, product.amount],
  );
  
  return insertId;
}

export default {
  getById,
  insert,
};