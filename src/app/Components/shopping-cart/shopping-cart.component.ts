import { Component } from '@angular/core';

import { CartDataService } from '../../Services/cart-data.service';
import { Trip } from '../../Interfaces/ITrip';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  
  cart: Trip[] = [];
  itemsCounter: number = 0;

  constructor(private data: CartDataService) { }
  ngOnInit(): void {
    this.cart = this.data.getBasketData();
  }

  totalPrice(): number {
    let total = 0;
    for (let trip of this.cart) {
      total += trip.price * trip.places;
    }
    return total;
  }

  totalPlaces(): number {
    let total = 0;
    for (let trip of this.cart) {
      total += trip.places;
    }
    return total;
  }

}
