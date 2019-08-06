
import { AppRoutingModule } from './app-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

// 2. Add your credentials from step 1
const config = {
  apiKey: 'AIzaSyBbNjfVB52crxizKVfyJpEXRBY8lCwVPp0',
  authDomain: 'fcc-book-trading-394e0.firebaseapp.com',
  databaseURL: 'https://fcc-book-trading-394e0.firebaseio.com',
  projectId: 'fcc-book-trading-394e0',
  storageBucket: '',
  messagingSenderId: '557225311113',
  appId: '1:557225311113:web:00d105329fa82fc2'
};

@NgModule({
  imports: [
    BrowserModule,
    // 3. Initialize
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}