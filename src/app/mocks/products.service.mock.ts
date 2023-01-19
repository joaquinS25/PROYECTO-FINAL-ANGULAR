import { BehaviorSubject, Observable, take } from "rxjs";
import { IProductsService, Product } from '../pages/products/services/products.service';

const FAKE_PRODUCTS: Product[] = [
  {
    id: "1",
    createdAt: new Date(),
    description: 'Lorem ipsum',
    name: 'Lorem'
  },
  {
    id: "2",
    createdAt: new Date(),
    description: 'Lorem ipsum',
    name: 'Lorem'
  }
]

export class ProductsServiceMock implements IProductsService{
  private products = new BehaviorSubject<Product[]>([])
  public products$: Observable<Product[]>;
  constructor() {
    this.products$ = this.products.asObservable();
  }

  createProduct(data: Pick<Product, 'name' | 'description'>): void {
    this.products$
      .pipe(
        take(1)
      ).subscribe((currentProducts) => {
        const lastId = parseInt(currentProducts[currentProducts.length - 1]?.id) || 0;
        this.products.next([
          ...currentProducts,
          {
            id: String(lastId + 1),
            name: data.name,
            description: data.description,
            createdAt: new Date(),
          }
        ])
      })
  }

  loadProducts() {
    this.products.next(FAKE_PRODUCTS)
  }
}