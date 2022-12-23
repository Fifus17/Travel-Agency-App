import { Component } from '@angular/core';
import * as tripsData from '../../Data/tripsData.json';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent {

  tripsData: any = [];
  dataKeys = Object.keys(tripsData).slice(0, -2);

  constructor() { 
    this.tripsData = tripsData;
    // console.log(this.tripsData["0"]);
  }

}
