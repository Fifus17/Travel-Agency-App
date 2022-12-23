import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  private cart = new BehaviorSubject([
    {
      id: 0,
      counter: 3
  },
  {
      id: 1,
      counter: 1
  },
  {
    id: 4,
    counter: 2
  },
  {
    id: 7,
    counter: 3
  },
  {
    id: 8,
    counter: 2
  }
  ]);
  cartData = this.cart.asObservable();
  cartDataTemp = [
    {
      id: 0,
      counter: 3
    },
    {
      id: 1,
      counter: 1
    }
  ];


  constructor() { }

  changeCartData(cartData: any) {
    this.cart.next(cartData)
  }
  
  addCartData(idx:number):any {
    for(let i=0; i<this.cartDataTemp.length; i++) {
      if(this.cartDataTemp[i].id == idx) {
        this.cartDataTemp[i].counter++;
        return this.cartDataTemp;
      }
    }
    this.cartDataTemp.push({id: idx, counter: 1});
  }
}
