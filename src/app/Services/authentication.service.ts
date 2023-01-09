import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Roles, User } from '../Interfaces/IUser';
import { DatabaseConnectionService } from './database-connection.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userData: Observable<any> | undefined;
  userRoles: Roles = {
    guest: true,
    client: false,
    admin: false,
    manager: false,
    banned: false
  }
  persistence: string = 'local';

  constructor(private auth: AngularFireAuth, private db: DatabaseConnectionService, private router: Router) {
    auth.authState.subscribe(async (ev: any) => {
      if (ev) {
        this.userData = ev;
        const roles = await this.db.getRoles(ev?.uid);
        this.userRoles = roles as Roles;
      } else {
        this.userRoles = {
          guest: true,
          admin: false,
          manager: false,
          client: false,
          banned: false,
        };
      }
    });
   }

  async signIn(email: string, password: string) {
    await this.auth.setPersistence(this.persistence);
    return await this.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {this.router.navigate(['home'])
      .catch((error) => {window.alert(error.message)});})
  }

  async signUp(email: string, password: string, firstName: string, lastName: string) {
    return await this.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        if(result.user != null) {
        let userData = {
          uid: result.user.uid,
          email: email,
          firstName: firstName,
          lastName: lastName,
          roles: {
            guest: true,
            client: true,
            admin: false,
            manager: false,
            banned: false
          },
          history: [""],
          cart: [""],
          photoURL: ""
        }
        this.db.addUser(userData);
        this.router.navigate(['home']);
      }
      })
  }

  async signOut() {
    await this.auth.signOut();
    window.location.reload();
    this.router.navigate(['home']);
  }

  getCurrentUserUID(): Observable<User> | undefined {
    // return this.auth.currentUser;
    // return this.userData;
    let currentUserData: User;
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        // User logged in already or has just logged in.
        let data = this.db.getUsers().subscribe((users) => {
            for (let data of users) {
              if(data.payload.key == user.uid) {
              let userToAdd = new User(data.payload.val());
              userToAdd.uid = data.payload.key || 'undefined';
              currentUserData = userToAdd;
              }
            }
            // console.log(currentUserData);
          });
        return(currentUserData);
      } else {
        // User not logged in or has just logged out.
        return(null);
      }
    });
    return this.userData;
  }

  getAuthenticated(): Observable<any> {
    return this.auth.authState;
  }

  isLoggedIn() {
    return this.userData != null;
  }

  isLoggednInWithRedirect() {
    if (this.userData != null) return true;
    else {
      this.router.navigate(['home']);
      return false;
    }
  }

  getUID(): Observable<any> | undefined {
    // await new Promise(r => setTimeout(r, 500));
    return this.userData;
  }

  async isAdmin() {
    await new Promise(r => setTimeout(r, 1500));
    if (this.userRoles.admin) return true;
    else {
      this.router.navigate(['home']);
      return false;
    }
  }

  async isManager() {
    await new Promise(r => setTimeout(r, 1500));
    if (this.userRoles.manager) return true;
    else {
      this.router.navigate(['home']);
      return false;
    }
  }

  async isMaster() {
    await new Promise(r => setTimeout(r, 1500));
    if (this.userRoles.manager || this.userRoles.admin) return true;
    else {
      this.router.navigate(['home']);
      return false;
    }
  }

  async isClient() {
    await new Promise(r => setTimeout(r, 1000));
    if (this.userRoles.client) return true;
    else {
      this.router.navigate(['home']);
      return false;
    }
  }

  async isBanned() {
    await new Promise(r => setTimeout(r, 1000));
    return this.userRoles.banned;
  }

  async changePersistence(newSetting: string) {
    this.persistence = newSetting;
    this.auth.setPersistence(this.persistence);
  }
}
