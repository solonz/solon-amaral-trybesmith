import { IProduct } from '../interfaces';
import productsModel from '../models/products.model';

async function insert(product: IProduct) {
  const insertId = await productsModel.insert(product);
  
  if (insertId) {
    return productsModel.getById(Number(insertId));
  }
}

export default {
  insert,
};
