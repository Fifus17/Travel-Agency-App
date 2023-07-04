import { Component, Input } from '@angular/core';
import { CartDataService } from '../../Services/cart-data.service';
import { TemporaryDataService } from 'src/app/Services/temporary-data.service';
import { DatabaseConnectionService } from 'src/app/Services/database-connection.service';
import { Subscription } from 'rxjs';
import { Trip } from 'src/app/Interfaces/ITrip';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css'],
})
export class TripDetailsComponent {
  cartData: any;
  counter: number = 0;

  @Input('data') trip: Trip | undefined;
  @Input('index') index: number = -1;
  bagno: string = 'staticBackdrop';
  realIdx: number = -1;
  dataToPass: any = [];
  places: number = 0;
  minusButton: any;
  plusButton: any;
  cart: Trip[] = [];
  uid: string = '';

  constructor(
    private data: CartDataService,
    afauth: AngularFireAuth,
    public db: DatabaseConnectionService
  ) {
    this.minusButton = document.getElementById('minus-button');
    this.plusButton = document.getElementById('plus-button');
    afauth.authState.subscribe((data) => {
      if (data == null) return;
      this.db.getCart(data?.uid).subscribe((cart) => {
        this.cart = cart;
        this.uid = data?.uid;
      });
    });
  }

  ngOnInit() {}

  addPlace() {
    if (this.counter < this.trip!.places) {
      this.places--;
      this.counter++;
    } else {
      this.minusButton.disabled = false;
    }
  }

  removePlace() {
    if (this.counter > 0) {
      this.places++;
      this.counter--;
    } else {
      this.minusButton.disabled = true;
    }
  }

  addToCart(id: number) {
    if (this.cart.find((trip) => trip.id == id)!.places < this.trip!.places) {
      this.cart.find((trip) => trip.id == id)!.places += this.counter;
      this.db.updateCart(this.uid, this.cart);
    }
  }
}
