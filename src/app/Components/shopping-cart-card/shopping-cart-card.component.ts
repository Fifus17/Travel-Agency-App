import { Component, Input, OnInit } from '@angular/core';
import { Trip } from 'src/app/Interfaces/ITrip';
import { CartDataService } from 'src/app/Services/cart-data.service';

@Component({
  selector: 'app-shopping-cart-card',
  templateUrl: './shopping-cart-card.component.html',
  styleUrls: ['./shopping-cart-card.component.css']
})
export class ShoppingCartCardComponent implements OnInit {

  data: any;
  @Input('index') index: number = 0;
  passingData: any;
  changedData: any;
  counter: number = 0;
  currentPrice: number = 0;
  maxPlaces: number = 0;
  minusButton: any;
  plusButton: any;

  constructor(private dataService: CartDataService) {
    this.minusButton = document.getElementById("minus-button");
    this.plusButton = document.getElementById("plus-button");
  }

  ngOnInit() {
    this.data = this.dataService.getBasketData()[this.index];
    this.passingData = this.data;
    this.counter = this.data.places;
    this.maxPlaces = this.data.places;
    this.currentPrice = this.data.price * this.counter;
  }

   addPlace() {
    if(this.counter < this.maxPlaces) {
      this.counter++;
      this.changedData = this.data;
      this.changedData.places = this.counter;
      this.dataService.setBasketData(this.changedData, this.index);
    }
    else {
      this.minusButton.disabled = false;
    }
    this.currentPrice = this.counter * this.data.price;
  }

  removePlace() {
    if(this.counter > 0) {
      this.counter--;
      this.changedData = this.data;
      this.changedData.places = this.counter;
      this.dataService.setBasketData(this.changedData, this.index);
    }
    else {
      this.minusButton.disabled = true;
    }
    this.currentPrice = this.counter * this.data.price;
  }
}
