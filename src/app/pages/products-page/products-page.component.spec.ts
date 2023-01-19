import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ProductsPageComponent } from './products-page.component';
import { ProductsService } from '../products/services/products.service';
import { ProductsServiceMock } from 'src/app/mocks/products.service.mock';

fdescribe('ProductsPageComponent', () => {
  let component: ProductsPageComponent;
  let fixture: ComponentFixture<ProductsPageComponent>;
  let productsService: ProductsService;
  let spyLoadProducts: jasmine.Spy;
  let spyCreateProducts: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsPageComponent ],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: ProductsService,
          useClase: ProductsServiceMock,
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsPageComponent);
    component = fixture.componentInstance;
    productsService = TestBed.inject(ProductsService)
    spyLoadProducts = spyOn(productsService, 'loadProducts').and.callThrough();
    spyCreateProducts = spyOn(productsService, 'createProduct').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe cargar los productos al inicio', () => {
    component.ngOnInit();  
    expect(spyLoadProducts).toHaveBeenCalled()
  })

  it('Debe agregar un usuario', () => {
    component.form.patchValue({
      name: 'Nombre de prueba',
      descripcion: 'Prueba descripcion',
    });  
    component.createProduct(); 
    expect(spyCreateProducts).toHaveBeenCalledWith(component.form.value);
  })

  it('NO debe agregar un usuario si el formulario es invalido', () => {
    const alertSpy = spyOn(window, 'alert').and.callThrough()
    component.form.patchValue({
      name: '',
      descripcion: '',
    });
    expect(component.form.invalid).toBeTrue();
    component.createProduct();
    expect(spyCreateProducts).not.toHaveBeenCalledWith(component.form.value);       
    expect(alertSpy).toHaveBeenCalled();
  })
});
