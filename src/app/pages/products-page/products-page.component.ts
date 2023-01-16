import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products/services/products.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit{
constructor(public productsService: ProductsService){}
  ngOnInit(): void {
    this.productsService.loadProducts();
  }
}
