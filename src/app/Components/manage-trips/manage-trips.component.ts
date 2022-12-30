import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DatabaseConnectionService } from 'src/app/Services/database-connection.service';

@Component({
  selector: 'app-manage-trips',
  templateUrl: './manage-trips.component.html',
  styleUrls: ['./manage-trips.component.css']
})
export class ManageTripsComponent implements OnInit {

  trips: any[] = [];
  tripsSubscription: Subscription | undefined;

  constructor(public db: DatabaseConnectionService) { }

  ngOnInit(): void {
    this.tripsSubscription = this.db.getTrips().subscribe((change) => {
      this.trips = [];
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
        });
      }
    });
  }

  remove(id: number) {
    this.db.removeTrip(id);
  }

}
