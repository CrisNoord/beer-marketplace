import { Component, OnInit } from '@angular/core';
import { Product, Sku } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { forkJoin } from 'rxjs';

import products from 'src/assets/products.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) { }

  
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    const products = this.productService.getProducts();
    const stockPrice = this.productService.getStockPrice();

    forkJoin(products, stockPrice).subscribe((res: any) => {
      this.products = res[0].map((element: Product) => {
        return {
          ...element,
          image: `/assets/icons${element.image}`,
          price: this.getProductPrice(res[1], element.skus[0])
        }
      });
    })
  }

  selectProduct(product: Product) {
    const id = `${product.id}-${product.brand.toLowerCase().replace(' ', '-')}`;
    this.router.navigate(['/', id]);
  }

  getProductPrice(stockPrice: any, sku: Sku): string {
    const cents = stockPrice[sku.code].price;
    const dollars = (cents / 100).toLocaleString("en-US", {style:"currency", currency:"USD"});

    return dollars;
  }
}