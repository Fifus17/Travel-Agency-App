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

  cartData: any[] = []; // cart from db
  cartSubsciption: Subscription | undefined;
  tripData: Trip[] = [];
  tripSubscription: Subscription | undefined;
  cart: Trip[] = []; // local cart
  uid: string = "";


  constructor(public db: DatabaseConnectionService, private auth: AuthenticationService, afauth: AngularFireAuth) {
    afauth.authState.subscribe((data) => {
        if(data == null) return;
        this.db.getCart(data?.uid).subscribe(cart => {
          this.cartData = cart;
          this.uid = data?.uid;
          console.log(this.cartData);
      });
    //     const uid = data?.uid;
    //     this.tripSubscription = this.db.getTrips().subscribe((data) => {
    //         this.tripData = data;
    //         console.log(this.tripData);
    //         this.cartSubsciption = this.db.getCart(uid).subscribe((data) => {
    //             this.cartData = data;
    //             console.log(this.cartData);
    //             this.cart = [];
    //             for(let i in this.cartData) {
    //                 let tripToAdd = this.tripData.filter((trip) => trip.id == this.cartData[i].id)[0];
    //                 tripToAdd.places = this.cartData[i].places;
    //                 this.cart.push(tripToAdd);
    //             }
    //             console.log(this.cart);
    //         });
    //     });
    }); // nie wiem co tu sie dzieje ???
}


  setBasketData(data: Trip, idx: number) {
    this.cartData[idx] = data;
  }

  getBasketData() {
    return this.cartData;
  }

  // addTripToCart(trip: Trip) {
  //   for (let i = 0; i < this.cartData.length; i++) {
  //     if (this.cartData[i].id == trip.id) {
  //       this.cartData[i].places++;
  //       console.log(this.cartData[i].places);
  //       return i;
  //     }
  //   }
  //   trip.places = 1;
  //   this.cartData.push(trip);
  //   return this.cartData.length - 1;
  // }

  // removeTripFromCart(idx: number) {
  //   if(this.cartData.filter((trip) => trip.id == idx)) {
  //     this.cartData.filter((trip) => trip.id == idx)[0].places--;
  //     if(this.cartData.filter((trip) => trip.id == idx)[0].places == 0) {
  //       this.cartData = this.cartData.filter((trip) => trip.id != idx);
  //     }
  //   };
  // }

  addTripToCart(trip: Trip) : void{
    for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id == trip.id) {
            this.cart[i].places++;
            console.log(this.cart[i].places);
            this.db.updateCart(this.uid ,this.cart); // Update the cart in Firebase
            // return i;
        }
    }
    trip.places = 1;
    this.cart.push(trip);
    // this.db.updateCart(this.cartData); // Update the cart in Firebase
    // return this.cartData.length - 1;
}

removeTripFromCart(idx: number) {
    if(this.cart.filter((trip) => trip.id == idx)) {
        this.cart.filter((trip) => trip.id == idx)[0].places--;
        if(this.cart.filter((trip) => trip.id == idx)[0].places == 0) {
            this.cart = this.cart.filter((trip) => trip.id != idx);
        }
        // this.db.updateCart(this.cartData); // Update the cart in Firebase
    };
}

}
