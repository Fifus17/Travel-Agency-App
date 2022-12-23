import { Component } from '@angular/core';
import { CartDataService } from '../../Services/cart-data.service';
import * as tripsData from '../../Data/tripsData.json';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  
  itemsCounter: number = 0;
  currentPrice: number = 0;
  currentData: any;

  tripsData: any = [];
  dataKeys = Object.keys(tripsData).slice(0, -2);

  constructor(private data: CartDataService) { 
    this.tripsData = tripsData;
    this.data.cartData.subscribe(currentData => this.currentData = currentData) 
    console.log(this.currentData);
    for (let i = 0; i < this.currentData.length; i++) {
      this.itemsCounter += this.currentData[i].counter;
      this.currentPrice += this.currentData[i].counter * this.tripsData[this.currentData[i].id].price;
    }
    console.log(this.itemsCounter);
  }
  

}
