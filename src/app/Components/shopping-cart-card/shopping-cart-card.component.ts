import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Trip } from 'src/app/Interfaces/ITrip';
import { CartDataService } from 'src/app/Services/cart-data.service';
import { DatabaseConnectionService } from 'src/app/Services/database-connection.service';

@Component({
  selector: 'app-shopping-cart-card',
  templateUrl: './shopping-cart-card.component.html',
  styleUrls: ['./shopping-cart-card.component.css']
})
export class ShoppingCartCardComponent implements OnInit {

  @Input('trip') trip: Trip | undefined;
  @Input('places') places: number = 0;
  counter: number = 0;
  minusButton: any;
  plusButton: any;
  cart: Trip[] = [];
  uid: string = "";

  constructor(
    private data: CartDataService,
    afauth: AngularFireAuth,
    public db: DatabaseConnectionService
  ) {
    this.minusButton = document.getElementById("minus-button");
    this.plusButton = document.getElementById("plus-button");
    afauth.authState.subscribe((data) => {
      if (data == null) return;
      this.db.getCart(data?.uid).subscribe((cart) => {
        this.cart = cart;
        this.uid = data?.uid;
      });
    });
  }
  ngOnInit(): void {}

  getAvgReview() : number {
    let sum = 0;
    for(let review of this.trip!.reviews) {
      sum += review.points;
    }
    return sum / this.trip!.reviews.length;
  }

  addPlace(id: number) {
    if(this.cart.find((trip) => trip.id == id)!.places < this.trip!.places) {
      this.cart.find((trip) => trip.id == id)!.places++;
      this.db.updateCart(this.uid, this.cart);
    }
  }

  removePlace(id: number) {
    if(this.cart.find((trip) => trip.id == id)!.places > 1) {
      this.cart.find((trip) => trip.id == id)!.places--;
      this.db.updateCart(this.uid, this.cart);
    }
    else {
      this.db.updateCart(this.uid, this.cart.filter((trip) => trip.id !== id));
    }
  }
}
