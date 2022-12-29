import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { first, firstValueFrom, Observable } from 'rxjs';
import { Trip } from '../Interfaces/ITrip';
import { User } from '../Interfaces/IUser';

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

  removeTrip(idx: number): void {
    this.db.list('trips').snapshotChanges().pipe(first()).subscribe((trips: any) => {
      for (let trip of trips) {
        if (trip.payload.val().id === idx) {
          this.db.list('trips').remove(trip.payload.key);
          break;
        }
      }
    });
  }

  modifyTrip(trip: Trip): void {
    this.db.list('trips').snapshotChanges().pipe(first()).subscribe((trips: any) => {
      for (let t of trips) {
        if (t.payload.val().id === trip.id) {
          this.db.list('trips').update(t.payload.key, trip);
          break;
        }
      }
    });
  }

  getNextId(): number | undefined {
    return this.nextId;
  }

  getUsers(): Observable<any[]> {
    return this.db.list<User>('users').valueChanges();
  }

  async getRoles(uid: string) {
    return firstValueFrom(this.db.object('/users/' + uid + '/roles').valueChanges());
  }

  addUser(user: User): void {
    this.db.list('users/' + user.uid).push(user);
  }

  changeUserRoles(uid: string, roles: string[]): void {
    this.db.list('users/' + uid).update('roles', roles);
  }

  getOrderHistory(uid: string): Observable<any[]> {
    return this.db.list('users/' + uid + '/orders').valueChanges();
  }
}
