import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import products from 'src/assets/products.js';
import stockPrice from 'src/assets/stock-price.js'
import { Product } from '../models/product.model';


@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return of(products);
  }

  getStockPrice(): Observable<any> {
    return of(stockPrice);
  }

  getSingleProduct(id: string): Observable<any> {
    const prod = products.find(x => x.id + '' === id);
    const fullProd = {
      ...prod,
      image:`/assets/icons${prod?.image}`,

    }
    return of(fullProd);
  }

  getStockPriceByCode(code:string) {
    return this.http.get(`http://localhost:3000/api/stockprice/${code}`).pipe(map((res: any) => res));
  }
}