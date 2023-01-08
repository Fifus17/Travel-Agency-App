import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { withDisabledInitialNavigation } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { Trip } from '../Interfaces/ITrip';
import { AuthenticationService } from './authentication.service';
import { DatabaseConnectionService } from './database-connection.service';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  cartData: any[] = [];
  cartSubsciption: Subscription | undefined;
  tripData: Trip[] = [];
  tripSubscription: Subscription | undefined;
  cart: Trip[] = [
    {
      id: 1,
      title: "Hawaii Paradise",
      country: "Hawaii",
      dayOut: "2021-08-01",
      dayIn: "2021-08-15",
      price: 2400,
      places: 5,
      maxPlaces: 10,
      description: "Hawaii is a state of the United States of America. It is the only state located in Oceania and the only one composed entirely of islands. It is the northernmost island group in Polynesia, occupying most of an archipelago in the central Pacific Ocean. Hawaii is the 8th-smallest, the 11th-least populous, and the 13th-least densely populated of the 50 United States. The state capital and largest city is Honolulu on the island of Oahu. The date of the state's admission to the Union is August 21, 1959.",
      image: ["https://content.api.news/v3/images/bin/ded3be00f6965dcfa60d91c42563592d?width=1044"],
      reviews: []
  }  ];


  constructor(public db: DatabaseConnectionService, private auth: AuthenticationService, afauth: AngularFireAuth) { 
    // afauth.authState.subscribe((data) => {
    //   if(data == null) return;
    //   const uid = data?.uid;
    //   this.tripSubscription = this.db.getTrips().subscribe((data) => {
    //     this.tripData = data;
    //     console.log(this.tripData);
    //     this.cartSubsciption = this.db.getCart(uid).subscribe((data) => {
    //       this.cartData = data;
    //       console.log(this.cartData);
    //       this.cart = [];
    //       for(let i in this.cartData)
    //       {
    //         let tripToAdd = this.tripData.filter((trip) => trip.id == this.cartData[i].id)[0];
    //         tripToAdd.places = this.cartData[i].places;
    //         this.cart.push(tripToAdd);
    //       }
    //       console.log(this.cart);
    //     });
    //   });
    // });
  }


  setBasketData(data: Trip, idx: number) {
    this.cartData[idx] = data;
  }

  // getBasketData(): Observable<Trip[]> {
  //   console.log(this.cart);
  //   return of(this.cart);
  // }
  getBasketData() {
    return this.cart;
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
