import { Component } from '@angular/core';

import { CartDataService } from '../../Services/cart-data.service';
import { Trip } from '../../Interfaces/ITrip';
import { Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators'
import { Data } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { DatabaseConnectionService } from 'src/app/Services/database-connection.service';


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

  constructor(private data: CartDataService, afauth: AngularFireAuth, public db: DatabaseConnectionService) { 
    afauth.authState.subscribe((data) => {
      if(data == null) return;
      this.db.getCart(data?.uid).subscribe(cart => {
        this.cart = cart;
        console.log(this.cart);
    });
  });
  }
  ngOnInit(): void {}


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
