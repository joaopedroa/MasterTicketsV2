import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFireDatabase} from 'angularfire2/database'
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 
  items : Observable<any[]>;
  itemsTotal:Observable<any[]>;
  count:any = [];

  constructor(public navCtrl: NavController, public database:AngularFireDatabase) {
    this.items = this.database.list('aberto', ref => ref.limitToFirst(3)).valueChanges();
    this.itemsTotal = this.database.list('aberto').valueChanges();
    this.itemsTotal.forEach(item => {
      this.count.push(item);
      console.log(this.count);
  });
  }

 
 
 
  reconhecimentoFirmaAutenticacao(){
    let tamanho1 = this.count.length - 1
    let tamanho2 = this.count[tamanho1].length -1;
    if(this.count.length === 1){
      this.database.list('aberto').push({ticket: 'B1',status:'aberto',number:1})
    }else{      
      
      this.database.list('aberto').push(
        {
          
          ticket: 'B' +  (this.count[tamanho1][tamanho2].number  + 1),
          status:'aberto'  ,
          number:   this.count[tamanho1][tamanho2].number  + 1
      
        })
        
    }
   
  }


    }
    

