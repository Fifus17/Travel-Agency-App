import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { Trip } from '../Interfaces/ITrip';

@Injectable({
  providedIn: 'root'
})
export class DatabaseConnectionService {

  trips: Observable<Trip[]>;

  constructor(private db: AngularFireDatabase) {
    this.trips = db.list<Trip>('trips').valueChanges();
  }

  getTrips(): Observable<any[]> {
    return this.trips;
  }
}
