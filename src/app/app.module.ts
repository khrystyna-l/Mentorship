
import { AppRoutingModule } from './app-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Test1Component } from './test1/test1.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StatisticPageComponent } from './statistic-page/statistic-page.component';

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

const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'statistic-page', component: StatisticPageComponent},
]

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    // 3. Initialize
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    AppRoutingModule
  ],
  declarations: [ AppComponent, Test1Component, HomePageComponent, StatisticPageComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}