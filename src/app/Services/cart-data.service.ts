import { Injectable } from '@angular/core';
import { withDisabledInitialNavigation } from '@angular/router';
import { Trip } from '../Interfaces/ITrip';
import { AuthenticationService } from './authentication.service';
import { DatabaseConnectionService } from './database-connection.service';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  cartData: Trip[] = [];

  constructor(public db: DatabaseConnectionService, private auth: AuthenticationService) { 
    // if(this.auth.isLoggedIn()) {
    //   this.auth.getCurrentUserUID().subscribe((data) => {
    //     this.cartData = this.db.getCart(data);
    //   });
    // }
  }


  setBasketData(data: Trip, idx: number) {
    this.cartData[idx] = data;
  }

  getBasketData(): Trip[] {
    return this.cartData;
  }

  addTripToCart(trip: Trip) {
    for (let i = 0; i < this.cartData.length; i++) {
      if (this.cartData[i].id == trip.id) {
        this.cartData[i].places++;
        console.log(this.cartData[i].places);
        return i;
      }
    }
    trip.places = 1;
    this.cartData.push(trip);
    return this.cartData.length - 1;
  }

  removeTripFromCart(idx: number) {
    if(this.cartData.filter((trip) => trip.id == idx)) {
      this.cartData.filter((trip) => trip.id == idx)[0].places--;
      if(this.cartData.filter((trip) => trip.id == idx)[0].places == 0) {
        this.cartData = this.cartData.filter((trip) => trip.id != idx);
      }
    };
  }

}
