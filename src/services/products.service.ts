import { IProduct } from '../interfaces';
import ProductsModel from '../models/products.model';

export default class ProductsService {
  public productsModel = new ProductsModel();
   
  public insert(product: IProduct): Promise<IProduct> {
    return this.productsModel.insert(product);
  }

  public async getAll(): Promise<IProduct[]> {
    const allProducts = await this.productsModel.getAll();
    return allProducts;
  }
}