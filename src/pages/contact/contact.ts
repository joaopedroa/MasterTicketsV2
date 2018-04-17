import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage} from '../login/login';
import { LoadingController } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth'
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController,private fire: AngularFireAuth) {

  }

  items = [
    'Perfil',
    'Configuração',
    'Sair'
          ];

    presentLoading(message:string) {
      let loader = this.loadingCtrl.create({
        content: message,
        duration: 2000
      });
      loader.present();
    }


logOut(item:string){
  if(item == 'Sair'){
  this.presentLoading('Até Logo!');
  this.navCtrl.push(LoginPage);
  }else{
    console.log(item);
  }
}

}
