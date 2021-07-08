import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import AngularFireModule (install and config ) install angularfire2 --> npm install firebase angularfire2 --save
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';

//import AngularFireDatabaseModule
import {AngularFireDatabaseModule} from 'angularfire2/database'

//import class register,loginPage
import{RegisterPage} from '../pages/register/register';
import{LoginPage} from '../pages/login/login'
import { CrudProvider } from '../providers/crud/crud';

const firebaseAuth = {
  apiKey: "AIzaSyA3okSt79NEJ6bjA9_8K958u1I90rXaJmE",
  authDomain: "mastertickets-4df61.firebaseapp.com",
  databaseURL: "https://mastertickets-4df61.firebaseio.com",
  projectId: "mastertickets-4df61",
  storageBucket: "mastertickets-4df61.appspot.com",
  messagingSenderId: "613727395354"
};



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    RegisterPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //import firebase (install and config )
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    AngularFireDatabaseModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    RegisterPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CrudProvider
  ]
})
export class AppModule {}
