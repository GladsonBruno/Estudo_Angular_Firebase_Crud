import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

export const firebaseconfig = {
    apiKey: "AIzaSyDgb8OmZXnGuNLvYgAILt_zzP2mkNRQhFk",
    authDomain: "estudoangularfirebase.firebaseapp.com",
    databaseURL: "https://estudoangularfirebase.firebaseio.com",
    projectId: "estudoangularfirebase",
    storageBucket: "estudoangularfirebase.appspot.com",
    messagingSenderId: "508065140556"
};

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseconfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
