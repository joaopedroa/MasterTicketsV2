import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
//import auth-authentication
import {AngularFireAuth} from 'angularfire2/auth'
import {RegisterPage} from '../../pages/register/register';
import {TabsPage} from '../../pages/tabs/tabs';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(public loadingCtrl: LoadingController,public toastCtrl: ToastController,private alertCtrl: AlertController,private fire: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goRegister(){
    this.navCtrl.push(RegisterPage);
  }

  alert(message:string){
    this.alertCtrl.create({
      title:'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Login efetuado com sucesso',
      duration: 2000
    });
    toast.present();
  }
  presentLoading(message:string) {
    let loader = this.loadingCtrl.create({
      content: message,
      duration: 3000
    });
    loader.present();
  }



  signInUser(){
    this.fire.auth.signInWithEmailAndPassword(this.user.value,this.password.value)
  .then(data =>{
      console.log('got some data', this.fire.auth.currentUser);
      // logged success
      this. presentLoading('Carregando...');
      this.presentToast();
      this.navCtrl.push(TabsPage)
  })
  .catch(error => {
    console.log('got an error',error)
    alert('Email ou Senha incorreto!');
  });
  }

}
