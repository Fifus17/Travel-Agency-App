import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CartDataService } from '../../Services/cart-data.service';
import { Trip } from '../../Interfaces/ITrip';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-trip2',
  templateUrl: './trip2.component.html',
  styleUrls: ['./trip2.component.css']
})
export class Trip2Component {

  @Input('data') data: any = [];
  @Input('index') idx :number = -1;
  toAddData: any;
  cartData:any;
  counter: number = 0;
  maxPlaces: number = 0;
  minusButton: any;
  plusButton: any;
  cartIndex: number = -1;

  constructor(private serviceData: CartDataService, public auth: AuthenticationService) {    
    this.minusButton = document.getElementById("minus-button");
    this.plusButton = document.getElementById("plus-button");
  }

  ngOnInit(): void {
    this.cartData = this.serviceData.getBasketData();
    this.maxPlaces = this.data.places;
    if(this.cartData.filter((trip: Trip) => trip.id = this.idx).length > 0) {
      this.counter = this.cartData.filter((trip: Trip) => trip.id = this.idx)[0].places;
    }
  }

  addPlace(): void {
    // this.places--;
    console.log(this.data.id);
    console.log(this.idx);
    if(this.counter < this.maxPlaces) {
      this.counter++;
      this.cartIndex = this.serviceData.addTripToCart(this.data);
    }
    else {
      this.minusButton.disabled = false;
    }
  }

  removePlace(): void {
    // this.places++;
    if(this.counter > 0) {
    this.counter--;
    this.serviceData.removeTripFromCart(this.data.id);
    }
    else {
      this.minusButton.disabled = true;
    }
  }

}
