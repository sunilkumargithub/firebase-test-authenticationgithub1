import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';


  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAuM-q-wSHuNO2Y3jVSe0l5d73Np88GMjE',
      authDomain: 'fir-test-authentication.firebaseapp.com'
    });
  }
}
