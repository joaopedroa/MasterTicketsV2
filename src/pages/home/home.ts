import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import {AngularFireDatabase} from 'angularfire2/database'
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 // Declaração de Variáveis
 //=================================
    items : Observable<any[]>;
    itemsTotal:Observable<any[]>;
    count:any = [];
    countProcuracao:any = [];
    countRegistroCivil:any = [];
    countEscritura:any = [];
    validationProcuracao:any;
    validation:any;
    validationRegistroCivil:any;
    validationEscritura:any;
    today = new Date();
    ticketReconhecimentoFirma:string;
    ticketProcuracao:string;
    ticketRegistroCivil:string;
    ticketEscritura:string;
    public ticketAtualRecochecimentoFirma:Observable<any[]>;
    public ticketAtualProcuracao:Observable<any[]>;
    public ticketAtualRegistroCivil:Observable<any[]>;
    public ticketAtualEscritura:Observable<any[]>;
    ticketEspecifico:Observable<any[]>;
    itemsTotalProcuracao:Observable<any[]>;
    itemsTotalRegistroCivil:Observable<any[]>;
    itemsTotalEscritura:Observable<any[]>;
    validaStatusReconhecimentoFirma:string = 'Concluído';
    validaStatusRegistroCivil:string = 'Concluído';
    validaStatusProcuracao:string = 'Concluído';
    validaStatusEscritura:string = 'Concluído';
 //=================================

  constructor(public navCtrl: NavController, public database:AngularFireDatabase, private modal:ModalController) {    
    // Lista Reconhecimento de Firma
    this.itemsTotal = this.database.list('reconhececimentoFirma/').snapshotChanges().map(arr => {
      return arr.map(snap => Object.assign(snap.payload.val(), { $key: snap.key }) )
});
  // Lista Procuração
this.itemsTotalProcuracao = this.database.list('procuracao/').snapshotChanges().map(arr => {
  return arr.map(snap => Object.assign(snap.payload.val(), { $key: snap.key }) )
});
  // Lista Registro Civil
  this.itemsTotalRegistroCivil = this.database.list('registroCivil/').snapshotChanges().map(arr => {
    return arr.map(snap => Object.assign(snap.payload.val(), { $key: snap.key }) )
  });
  // Lista Escritura
  this.itemsTotalEscritura = this.database.list('escritura/').snapshotChanges().map(arr => {
    return arr.map(snap => Object.assign(snap.payload.val(), { $key: snap.key }) )
  });
//Captura dados do firebase 
//RECONHECIMENTO FIRMA
    this.itemsTotal.forEach(item => {
      this.count.push(item);
      this.validation = item.length;
      console.log(this.count);
  });
//PROCURAÇÃO
this.itemsTotalProcuracao.forEach(item => {
  this.countProcuracao.push(item);
  this.validationProcuracao = item.length;
  console.log(this.countProcuracao);
});
//REGISTRO CIVIL
this.itemsTotalRegistroCivil.forEach(item => {
  this.countRegistroCivil.push(item);
  this.validationRegistroCivil = item.length;
  console.log(this.countRegistroCivil);
});
// ESCRITURA
this.itemsTotalEscritura.forEach(item => {
  this.countEscritura.push(item);
  this.validationEscritura = item.length;
  console.log(this.countEscritura);
});
//==================================

  }

 
  reconhecimentoFirmaAutenticacao(){
    let tamanho1 = this.count.length - 1
    let tamanho2 = this.count[tamanho1].length -1;
    if(this.validation === 0){
      this.ticketReconhecimentoFirma= this.database.list('reconhececimentoFirma').push({ticket: 'B1',status:'Aberto',number:1,date: this.today }).key;
    }else{      
   
      this.ticketReconhecimentoFirma = this.database.list('reconhececimentoFirma').push(
                              {
                                
                                ticket: 'B' +  (this.count[tamanho1][tamanho2].number  + 1),
                                status:'Aberto'  ,
                                number:   this.count[tamanho1][tamanho2].number  + 1,
                                date: this.today
                            
                              }).key;
      
    }
  
    this.ticketAtualRecochecimentoFirma = this.database.list('reconhececimentoFirma/', ref => ref.orderByKey().equalTo(this.ticketReconhecimentoFirma)).snapshotChanges().map(arr => {
      return arr.map(snap => Object.assign(snap.payload.val(), { $key: snap.key }) )
});

this.ticketAtualRecochecimentoFirma.forEach(item => {  
  this.validaStatusReconhecimentoFirma = item[0].status;
  console.log(this.validaStatusReconhecimentoFirma);
});
   
    console.log( this.ticketReconhecimentoFirma);
    console.log( this.ticketAtualRecochecimentoFirma);
  }

  procuracao(){
    let tamanho1 = this.countProcuracao.length - 1
    let tamanho2 = this.countProcuracao[tamanho1].length -1;
    if(this.validationProcuracao === 0){
      this.ticketProcuracao= this.database.list('procuracao').push({ticket: 'P1',status:'Aberto',number:1,date: this.today }).key;
    }else{      
   
      this.ticketProcuracao = this.database.list('procuracao').push(
                              {
                                
                                ticket: 'P' +  (this.countProcuracao[tamanho1][tamanho2].number  + 1),
                                status:'Aberto'  ,
                                number:   this.countProcuracao[tamanho1][tamanho2].number  + 1,
                                date: this.today
                            
                              }).key;
      
    }
  
    this.ticketAtualProcuracao = this.database.list('procuracao/', ref => ref.orderByKey().equalTo(this.ticketProcuracao)).snapshotChanges().map(arr => {
      return arr.map(snap => Object.assign(snap.payload.val(), { $key: snap.key }) )
});
this.ticketAtualProcuracao.forEach(item => {  
  this.validaStatusProcuracao = item[0].status;
  console.log(this.validaStatusProcuracao);
});
   
    console.log( this.ticketProcuracao);
    console.log( this.ticketAtualProcuracao);
  }


 
  registroCivil(){
    let tamanho1 = this.countRegistroCivil.length - 1
    let tamanho2 = this.countRegistroCivil[tamanho1].length -1;
    if(this.validationRegistroCivil === 0){
      this.ticketRegistroCivil= this.database.list('registroCivil').push({ticket: 'C1',status:'Aberto',number:1,date: this.today }).key;
    }else{      
   
      this.ticketRegistroCivil = this.database.list('registroCivil').push(
                              {
                                
                                ticket: 'C' +  (this.countRegistroCivil[tamanho1][tamanho2].number  + 1),
                                status:'Aberto'  ,
                                number:   this.countRegistroCivil[tamanho1][tamanho2].number  + 1,
                                date: this.today
                            
                              }).key;
      
    }
  
    this.ticketAtualRegistroCivil = this.database.list('registroCivil/', ref => ref.orderByKey().equalTo(this.ticketRegistroCivil)).snapshotChanges().map(arr => {
      return arr.map(snap => Object.assign(snap.payload.val(), { $key: snap.key }) )
});
this.ticketAtualRegistroCivil.forEach(item => {  
  this.validaStatusRegistroCivil = item[0].status;
  console.log(this.validaStatusRegistroCivil);
});
   
    console.log( this.ticketRegistroCivil);
    console.log( this.ticketAtualRegistroCivil);
  }

  escritura(){
    let tamanho1 = this.countEscritura.length - 1;
    let tamanho2 = this.countEscritura[tamanho1].length -1;
    if(this.validationEscritura === 0){
      this.ticketEscritura= this.database.list('escritura').push({ticket: 'E1',status:'Aberto',number:1,date: this.today }).key;
    }else{      
   
      this.ticketEscritura = this.database.list('escritura').push(
                              {
                                
                                ticket: 'E' +  (this.countEscritura[tamanho1][tamanho2].number  + 1),
                                status:'Aberto'  ,
                                number:   this.countEscritura[tamanho1][tamanho2].number  + 1,
                                date: this.today
                            
                              }).key;
      
    }
  
    this.ticketAtualEscritura = this.database.list('escritura/', ref => ref.orderByKey().equalTo(this.ticketEscritura)).snapshotChanges().map(arr => {
      return arr.map(snap => Object.assign(snap.payload.val(), { $key: snap.key }) )
});
this.ticketAtualEscritura.forEach(item => {  
  this.validaStatusEscritura = item[0].status;
  console.log(this.validaStatusEscritura);
});
   
    console.log( this.ticketEscritura);
    console.log( this.ticketAtualEscritura);
  }

  }


    

