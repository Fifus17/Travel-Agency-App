import { Component } from '@angular/core';
import { Trip } from '../../Interfaces/ITrip';
import { DatabaseConnectionService } from '../../Services/database-connection.service';
import { CartDataService } from '../../Services/cart-data.service';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent {

  trips: any[] = [];

  constructor(
    public db: DatabaseConnectionService,
    public cart: CartDataService,
    public auth: AuthenticationService
    ) { }

  tripsSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.tripsSubscription = this.db.getTrips().subscribe((change) => {
      this.trips = [];
      // change.forEach((trip) => {
      //   this.bagno.push(trip);
      // });
      for (let trip of change) {
        this.trips.push({
          id: trip.id,
          title: trip.title,
          country: trip.country,
          dayOut: trip.dayOut,
          dayIn: trip.dayIn,
          price: trip.price,
          places: trip.places,
          image: trip.image,
          description: trip.description,
          reviews: trip.reviews,
        } as Trip);
      }
    });
  }

}
