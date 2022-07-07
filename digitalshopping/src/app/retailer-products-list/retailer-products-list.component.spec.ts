import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerProductsListComponent } from './retailer-products-list.component';

describe('RetailerProductsListComponent', () => {
  let component: RetailerProductsListComponent;
  let fixture: ComponentFixture<RetailerProductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailerProductsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetailerProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
