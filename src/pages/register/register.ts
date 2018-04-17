import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
//import auth-authentication
import {AngularFireAuth} from 'angularfire2/auth'



/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {


  @ViewChild('username') user;
  @ViewChild('password') password;



  constructor(private alertCtrl:AlertController,private fire: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  alert(message:string){
    this.alertCtrl.create({
      title:'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }



  registerUser(){
     //regiser new user
    this.fire.auth.createUserWithEmailAndPassword(this.user.value,this.password.value)
    .then(data =>{

        console.log('got data',data);
        alert('Cadastro criado com sucesso!');
    })
    .catch(error =>{
      console.log('got an error',error)
      alert('Email ou senha inválido para cadastro!');
    });
  }

}
