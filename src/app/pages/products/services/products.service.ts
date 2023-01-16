import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Product {
  createdAt: Date;
  name: string; 
  description: string;
  id: string;
}


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly baseUrl = 'https://63c54104e1292e5bea1eae2c.mockapi.io';
  private products =  new BehaviorSubject<Product[]>([])
  public products$: Observable<Product[]>;
  constructor(private httpClient: HttpClient) { 
    this.products$ = this.products.asObservable();
  }

  loadProducts(){
    this.httpClient.get<Product[]>(`${this.baseUrl}/products`).subscribe((apiProducts) => {
      this.products.next(apiProducts)
    })
  }

}
