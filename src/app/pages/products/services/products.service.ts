import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mergeMap, take, tap } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

export interface Product {
  createdAt:   Date;
  name:        string;
  description: string;
  id:          string;
}

export interface IProductsService {
  products$: Observable<Product[]>;
  loadProducts(): void;
  createProduct(data: Pick<Product, 'description' | 'name'>): void;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService implements IProductsService {
  private readonly baseUrl = 'https://63b738094d97e82aa3b78a1a.mockapi.io';
  private products = new BehaviorSubject<Product[]>([])
  public products$: Observable<Product[]>;
  constructor(private httpClient: HttpClient) {
    this.products$ = this.products.asObservable();
  }

  loadProducts() {
    this.httpClient.get<Product[]>(`${this.baseUrl}/products`)
      .subscribe((apiProducts) => {
        this.products.next(apiProducts)
      })
  }

  createProduct(data: Pick<Product, 'description' | 'name'>) {
    this.products$
      .pipe(
        take(1),
        mergeMap(
          (currentProducts) =>
            this.httpClient.post<Product>(`${this.baseUrl}/products`, data)
              .pipe(
                tap(
                  (createdProduct => this.products.next([...currentProducts, createdProduct]))
                )
              )
        ),
      ).subscribe()
  }
}

