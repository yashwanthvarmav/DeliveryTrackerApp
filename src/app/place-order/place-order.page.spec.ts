import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaceOrderPage } from './place-order.page';

describe('PlaceOrderPage', () => {
  let component: PlaceOrderPage;
  let fixture: ComponentFixture<PlaceOrderPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
