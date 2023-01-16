import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ProductsPageComponent } from './products-page.component';
import { ProductsService } from '../products/services/products.service';

fdescribe('ProductsPageComponent', () => {
  let component: ProductsPageComponent;
  let fixture: ComponentFixture<ProductsPageComponent>;
  let productsService: ProductsService;
  let spyLoadProducts: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsPageComponent ],
      imports: [HttpClientTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsPageComponent);
    component = fixture.componentInstance;
    productsService = TestBed.inject(ProductsService)
    spyLoadProducts = spyOn(productsService, 'loadProducts').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe cargar los productos al inicio', () => {
    component.ngOnInit();
     
    expect(spyLoadProducts).toHaveBeenCalled()
  })
});
