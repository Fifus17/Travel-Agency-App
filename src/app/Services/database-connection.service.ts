import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { first, firstValueFrom, Observable } from 'rxjs';
import { Trip } from '../Interfaces/ITrip';
import { Roles, User } from '../Interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class DatabaseConnectionService {

  trips: Observable<Trip[]>;
  private nextId: number | undefined;

  constructor(private db: AngularFireDatabase, private auth: AngularFireAuth) {
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
    this.db.list('trips').set(trip.id.toString(), trip);
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

  getUsers() {
    return this.db.list<User>('users').snapshotChanges();
  }

  async getRoles(uid: string) {
    return firstValueFrom(this.db.object('/users/' + uid + '/roles').valueChanges());
  }

  addUser(user: User): void {
    this.db.list('users/').set(user.uid, user);
  }

  changeUserRoles(uid: string, roles: Roles): void {
    this.db.list('users/' + uid).update('roles', roles);
  }

  getOrderHistoryOf(uid: string): Observable<any[]> {
    return this.db.list('users/' + uid + '/orders').valueChanges();
  }

  async getOrderHistory() : Promise<any> {
    this.auth.currentUser.then((user) => {
      if (user) {
        return this.db.list('users/' + user.uid + '/orders').valueChanges();
      }
      else {
        return new Observable();
      }
    });
  }

  getCart(uid: string): Observable<any[]> {
    return this.db.list('users/' + uid + '/cart').valueChanges();
  }

  getLastTripId(): Observable<any> {
    return this.db.list('trips', (ref) => ref.orderByChild('id').limitToLast(1)).valueChanges();
  }
}
