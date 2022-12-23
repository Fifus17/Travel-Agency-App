import { Component, Input } from '@angular/core';
import { CartDataService } from '../../Services/cart-data.service';
import { TemporaryDataService } from 'src/app/Services/temporary-data.service';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent {

  title:string;
  country:string;
  dayOut:string
  dayIn:string;
  places:number;
  maxPlaces:number = 0;
  price:number;
  currency:string;
  counter:number = 0;
  description:string;
  image:string;
  avgReview:number = 0;
  minusButton:any;
  plusButton:any;
  grad:number = 0;
  flag:boolean = true;

  cartData:any;

  @Input('id') data:any = {'title': "Bochnia", 'country': "Poland", 'dayOut': "09/17/2022", 'dayIn': "09/24/2022", 'places': 30, 'price': 200, 'currency': "$", 'description': "Bochnia is a town in southern Poland with a population of 33,000. It is the capital of Bochnia County, Subcarpathian Voivodeship, and is located in the historical region of Lesser Poland. The town is situated in the valley of the Vistula River, 40 km south of Kraków, and 20 km north of Tarnów. Bochnia is the seat of the Roman Catholic Diocese of Bochnia. The town is also the seat of the Bochnia County Museum, which is housed in the former palace of the Counts of Bochnia. The town is also the seat of the Bochnia County Museum, which is housed in the former palace of the Counts of Bochnia.", 'image': "https://upload.wikimedia.org/wikipedia/commons/f/fe/Widok_układu_urbanistycznego_Bochni_z_wieży_kościoła_farnego.jpg", 'avgReview': 3.7};

  constructor() {
    // this.serviceData.cartData.subscribe(cartData => this.cartData = cartData);
    
    this.minusButton = document.getElementById("minus-button");
    this.plusButton = document.getElementById("plus-button");
    this.title = this.data.title;
    this.country = this.data.country;
    this.dayOut = this.data.dayOut;
    this.dayIn = this.data.dayIn;
    this.places = this.data.places;
    this.price = this.data.price;
    this.currency = this.data.currency;
    this.description = this.data.description;
    this.image = this.data.image;
    this.avgReview = this.data.avgReview;
    this.maxPlaces = this.places;
  }

  addPlace() {
    this.places--;
    if(this.counter < this.maxPlaces) {
      this.counter++;
      // this.serviceData.changeCartData(this.serviceData.addCartData(this.data.id));
    }
    else {
      this.minusButton.disabled = false;
    }
  }

  removePlace() {
    this.places++;
    if(this.counter > 0) {
    this.counter--;
    }
    else {
      this.minusButton.disabled = true;
    }
  }

}
