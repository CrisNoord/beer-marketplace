import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, SkuData } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent {

  product: Product | undefined;
  selectedSku: string = '';
  expanded: boolean = false;

  skuData: SkuData | undefined;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
    this.getStockPrice();
    this.startInterval();
  }

  getHero(): void {
    const richId = this.route.snapshot.paramMap.get('id');
    const productId = richId?.split('-')[0] || '0';
    this.productsService.getSingleProduct(productId).subscribe((product: Product) => {
      this.product = product;
      this.selectedSku = this.product.skus[0].code;
    });
  }

  selectSku(code: string) {
    this.selectedSku = code;
    this.getStockPrice();
  }

  goBack() {
    this.location.back();
  }

  expandOrHideText() {
    this.expanded = !this.expanded;
  }

  getStockPrice() {
    this.productsService.getStockPriceByCode(this.selectedSku).subscribe((res: any) => {
      this.skuData = {
        ...res,
        price: (res.price / 100).toLocaleString("en-US", {style:"currency", currency:"USD"})
      };
    })
  }

  startInterval() {
    setInterval(() => {this.getStockPrice()}, 5000);
  }

}