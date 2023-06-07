import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CartDataService } from '../../Services/cart-data.service';
import { Trip } from '../../Interfaces/ITrip';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { DatabaseConnectionService } from 'src/app/Services/database-connection.service';

@Component({
  selector: 'app-trip2',
  templateUrl: './trip2.component.html',
  styleUrls: ['./trip2.component.css']
})
export class Trip2Component {

  @Input('trip') trip: Trip | undefined;
  // toAddData: any;
  cart: Trip[] = [];
  counter: number = 0;
  // maxPlaces: number = 0;
  minusButton: any;
  plusButton: any;
  uid: string = "";
  // cartIndex: number = -1;
  // mean: number = 0;
  // points: number[] = [0, 0, 0, 0, 0];

  constructor(private serviceData: CartDataService, public auth: AuthenticationService, afauth: AngularFireAuth, public db: DatabaseConnectionService) {    
    this.minusButton = document.getElementById("minus-button");
    this.plusButton = document.getElementById("plus-button");
    afauth.authState.subscribe((data) => {
      if (data == null) return;
      this.db.getCart(data?.uid).subscribe((cart) => {
        this.cart = cart;
        this.uid = data?.uid;
        this.counter = this.cart.find((trip) => trip.id == this.trip!.id) ? this.cart.find((trip) => trip.id == this.trip!.id)!.places : 0;
      });
    });
  }

  ngOnInit(): void {
    
    // for(let comment of this.data.reviews) {
    //   this.points[comment.points - 1]++;
    //   this.mean = (this.points[0] + 2 * this.points[1] + 3 * this.points[2] + 4 * this.points[3] + 5 * this.points[4]) / this.data.reviews.length;
    // }
  }

  // addPlace(): void {
  //   // this.places--;
  //   console.log(this.data.id);
  //   console.log(this.idx);
  //   if(this.counter < this.maxPlaces) {
  //     this.counter++;
  //     // this.cartIndex = this.serviceData.addTripToCart(this.data);
  //   }
  //   else {
  //     this.minusButton.disabled = false;
  //   }
  // }

  // removePlace(): void {
  //   // this.places++;
  //   if(this.counter > 0) {
  //   this.counter--;
  //   this.serviceData.removeTripFromCart(this.data.id);
  //   }
  //   else {
  //     this.minusButton.disabled = true;
  //   }
  // }

  addPlace(id: number) {
    if(this.cart.find((trip) => trip.id == id)!.places < this.trip!.places) {
      this.cart.find((trip) => trip.id == id)!.places++;
      this.db.updateCart(this.uid, this.cart);
    }
  }

  removePlace(id: number) {
    if(this.cart.find((trip) => trip.id == id)!.places > 0) {
      this.cart.find((trip) => trip.id == id)!.places--;
      this.db.updateCart(this.uid, this.cart);
    }
    else this.db.updateCart(this.uid, this.cart.filter((trip) => trip.id != id));
  }

}
