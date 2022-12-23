import { Injectable } from '@angular/core';
import { Trip } from '../Interfaces/ITrip';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  constructor() { }

  cartData: Trip[] = [
    {
      id: 1,
      title: "Hawaii Paradise",
      country: "Hawaii",
      outDate: "2021-08-01",
      inDate: "2021-08-15",
      price: 2400,
      places: 5,
      description: "Hawaii is a state of the United States of America. It is the only state located in Oceania and the only one composed entirely of islands. It is the northernmost island group in Polynesia, occupying most of an archipelago in the central Pacific Ocean. Hawaii is the 8th-smallest, the 11th-least populous, and the 13th-least densely populated of the 50 United States. The state capital and largest city is Honolulu on the island of Oahu. The date of the state's admission to the Union is August 21, 1959.",
      image: "https://content.api.news/v3/images/bin/ded3be00f6965dcfa60d91c42563592d?width=1044",
      reviews: []
    }
  ];

  setBasketData(data: Trip, idx: number) {
    this.cartData[idx] = data;
  }

  getBasketData(): Trip[] {
    return this.cartData;
  }

  addTripToCart(trip: Trip) {
    this.cartData.push(trip);
  }

}
