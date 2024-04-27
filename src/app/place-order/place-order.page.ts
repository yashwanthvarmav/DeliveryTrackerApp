import { Component } from '@angular/core';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.page.html',
  styleUrls: ['./place-order.page.scss'],
})
export class PlaceOrderPage {
  origin: string = '';
  destination: string = '';

  constructor() { }

  viewEstimatedPrice() {
    const estimatedPrice = 50;
    alert('Estimated Price: $' + estimatedPrice); // Display estimated price in an alert
  }
}
