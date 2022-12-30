import { Component } from '@angular/core';

import { CartDataService } from '../../Services/cart-data.service';
import { Trip } from '../../Interfaces/ITrip';
import { Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators'
import { Data } from '@angular/router';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  
  cartSubscription: Subscription | undefined;
  itemsCounter: number = 0;
  cart: Trip[] = [];
  cart$: any;

  constructor(private data: CartDataService) { }
  ngOnInit(): void {
    // this.cartSubscription = this.data.getBasketData().pipe(take(1)).subscribe((data) => {
    //   console.log("data");
    //   console.log(data);
    //   this.cart = data;
    //   console.log(" ");
    //   console.log(this.cart);
    // });
    // this.check();
    this.cart$ = this.data.cart;
    console.log(this.cart$);
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

  async check() {
    await new Promise(r => setTimeout(r, 1000));
    console.log("promise");
    console.log(this.cart$);
  }

}
