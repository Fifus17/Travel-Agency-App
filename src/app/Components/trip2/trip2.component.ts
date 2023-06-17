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
  styleUrls: ['./trip2.component.css'],
})
export class Trip2Component {
  @Input('trip') trip: Trip | undefined;
  cart: Trip[] = [];
  counter: number = 0;
  uid: string = '';
  mean: number = 0;

  constructor(
    private serviceData: CartDataService,
    public auth: AuthenticationService,
    afauth: AngularFireAuth,
    public db: DatabaseConnectionService
  ) {
    afauth.authState.subscribe((data) => {
      if (data == null) return;
      this.db.getCart(data?.uid).subscribe((cart) => {
        this.cart = cart;
        this.uid = data?.uid;
        this.counter = this.cart.find((trip) => trip.id == this.trip!.id)
          ? this.cart.find((trip) => trip.id == this.trip!.id)!.places
          : 0;
      });
    });
  }

  ngOnInit(): void {
    this.mean =
      this.trip!.reviews.reduce((acc, review) => acc + review.points, 0) /
      this.trip!.reviews.length;
  }

  addPlace(id: number) {
    if (this.cart.find((trip) => trip.id == id)!) {
      if (this.cart.find((trip) => trip.id == id)!.places < this.trip!.places) {
        this.cart.find((trip) => trip.id == id)!.places++;
        this.db.updateCart(this.uid, this.cart);
      }
    } else {
      this.cart.push({ ...this.trip!, places: 1 });
      this.db.updateCart(this.uid, this.cart);
    }
  }

  removePlace(id: number) {
    if (this.cart.find((trip) => trip.id == id)!.places > 0) {
      this.cart.find((trip) => trip.id == id)!.places--;
      this.db.updateCart(this.uid, this.cart);
    } else
      this.db.updateCart(
        this.uid,
        this.cart.filter((trip) => trip.id != id)
      );
  }
}
