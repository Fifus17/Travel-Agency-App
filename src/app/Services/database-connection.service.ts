import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { Trip } from '../Interfaces/ITrip';

@Injectable({
  providedIn: 'root'
})
export class DatabaseConnectionService {

  trips: Observable<Trip[]>;
  private nextId: number | undefined;

  constructor(private db: AngularFireDatabase) {
    this.trips = db.list<Trip>('trips').valueChanges();
    this.db
      .list('trips', (ref) => ref.orderByChild('id').limitToLast(1))
      .valueChanges()
      .subscribe((res: any[]) => {
        this.nextId = res[0]?.id + 1;
      });
  }

  getTrips(): Observable<any[]> {
    return this.trips;
  }

  addTrip(trip: Trip): void {
    this.db.list('trips').push(trip);
  }
}
