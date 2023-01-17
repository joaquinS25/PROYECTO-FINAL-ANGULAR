import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { Observable } from "rxjs/internal/Observable";
import { Product } from "../pages/products/services/products.service";

export class ProductsServiceMock {
    private products = new BehaviorSubject<Product[]>([])
    public products$: Observable<Product[]>;
    constructor(){
        this.products$ = this.products.asObservable();
    }
    loadProducts() {
        this.products.next([ 
               
        ])
    }
} 