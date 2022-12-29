export interface Roles {
    guest: boolean;
    client: boolean;
    admin: boolean;
    manager: boolean;
    banned: boolean;
}

export class User {
    uid: string;
    email: string;
    firstName: string;
    lastName: string;
    photoURL: string;
    roles: Roles;
    history: any[];
    cart: any[];

    constructor(userData: any) {
        this.uid = userData.uid;
        this.email = userData.email;
        this.firstName = userData.firstName;
        this.lastName = userData.lastName;
        this.photoURL = userData.photoURL;
        this.history = [];
        this.cart = [];
        if(userData.roles != null) {
            this.roles = userData.roles;
        }
        else {
            this.roles = {
                guest: true,
                client: true,
                admin: false,
                manager: false,
                banned: false
            };
        }
    }
}