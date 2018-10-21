import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
token: string;
  constructor(private router: Router) { }

   sinupuser(email: string, password: string) {
     console.log('service signup data is' , email, password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
     .catch(error => console.log(error));
    }

    signinuser(email: string, password: string) {
firebase.auth().signInWithEmailAndPassword(email, password)
.then((response) => {
this.router.navigate(['/items']);
  firebase.auth().currentUser.getIdToken().then((token: string) => {
this.token = token;
  });
  console.log(response);
} );
    }


    getToken() {
      firebase.auth().currentUser.getIdToken().then((token: string) => {
        this.token = token;
          });
          return this.token;
    }

isAuthenticated() {
  return this.token != null;
}

logOut() {
  firebase.auth().signOut();
  this.token = null;
  this.router.navigate(['/signin']);
}

}



