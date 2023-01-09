import { Component, Input } from '@angular/core';
import { CartDataService } from '../../Services/cart-data.service';
import { TemporaryDataService } from 'src/app/Services/temporary-data.service';
import { DatabaseConnectionService } from 'src/app/Services/database-connection.service';
import { Subscription } from 'rxjs';
import { Trip } from 'src/app/Interfaces/ITrip';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent {

  cartData:any;
  counter: number = 0;

  @Input('data') data: any = [];
  @Input('index') index :number = -1;
  bagno: string = "staticBackdrop";
  realIdx: number = -1;
  dataToPass: any = [];
  places: number = 0;
  minusButton: any;
  plusButton: any;

  constructor(public db: DatabaseConnectionService, public cart: CartDataService) {
    this.minusButton = document.getElementById("minus-button");
    this.plusButton = document.getElementById("plus-button");
  }

  ngOnInit() {
    this.dataToPass = this.data;
    console.log(this.data.maxPlaces);
    this.places = this.data.places;
  }

  addPlace() {
    if(this.counter < this.data.places) {
      this.places--;
      this.counter++;
    }
    else {
      this.minusButton.disabled = false;
    }
  }

  removePlace() {
    if(this.counter > 0) {
      this.places++;
      this.counter--;
    }
    else {
      this.minusButton.disabled = true;
    }
  }

}
