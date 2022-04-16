import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  /*selectedfeature:string='recipe';
   
  OnNavigate(feature:string){
     this.selectedfeature=feature;
  }*/
  constructor(){
    firebase.initializeApp(
      {apiKey: "AIzaSyADbtAz5QMgfTGBkCcYgW286lBtA8zQ03k",
        authDomain: "recipe-book-7bebd.firebaseapp.com",}
    )
  }
}
