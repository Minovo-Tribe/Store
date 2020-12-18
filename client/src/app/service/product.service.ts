import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductQuery } from '../model/shop.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  async getProducts(query?: ProductQuery): Promise<any> {
    return await this.http
      .get<Array<any>>('api/shop/products', {
        params: { ...query },
      })
      .toPromise();
  }

  async getProduct(id: string): Promise<any> {
    return await this.http.get('api/shop/products/' + id).toPromise();
  }

  async addProduct(products: Array<any>) {
    return await this.http.post('api/shop/products', { products }).toPromise();
  }
}
