import { Component } from '@angular/core';
import * as tripsData from '../../Data/tripsData.json';
import { Trip } from '../../Interfaces/ITrip';
import { DatabaseConnectionService } from '../../Services/database-connection.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent {

  tripsData: any = [];
  dataKeys = Object.keys(tripsData).slice(0, -2);

  constructor(public db: DatabaseConnectionService)  { 
    this.tripsData = tripsData;
    console.log(this.tripsData[0]);
  }

}
