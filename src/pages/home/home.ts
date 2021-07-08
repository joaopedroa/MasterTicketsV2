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
    itemsTotalPreferencial:Observable<any[]>;
    itemsTotalProcuracaoPreferencial:Observable<any[]>;
    itemsTotalRegistroCivilPreferencial:Observable<any[]>;
    ItemsTotalEscrituraPreferencial:Observable<any[]>;
    count:any = [];
    countPreferencial:any = [];
    countProcuracao:any = [];
    countProcuracaoPreferencial:any = [];
    countRegistroCivil:any = [];
    countRegistroCivilPreferencial:any = [];
    countEscritura:any = [];
    countEscrituraPreferencial:any = [];
    validationProcuracao:any;
    validationProcuracaoPreferencial:any;
    validation:any;
    validationPreferencial:any;
    validationRegistroCivil:any;
    validationRegistroCivilPreferencial:any;
    validationEscritura:any;
    validationEscrituraPreferencial:any;
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
    validaPreferencial:boolean = false;
 //=================================

  constructor(public navCtrl: NavController, public database:AngularFireDatabase, private modal:ModalController) {    
    
    // Lista Reconhecimento de Firma Normal
    this.itemsTotal = this.database.list('reconhecimentoFirma/', ref => ref.orderByChild('typeTicket').equalTo('Normal')).snapshotChanges().map(arr => {
      return arr.map(snap => Object.assign(snap.payload.val(), { $key: snap.key }) )
});
    // Lista Reconhecimento de Firma Preferencial
    this.itemsTotalPreferencial = this.database.list('reconhecimentoFirma/', ref => ref.orderByChild('typeTicket').equalTo('Preferencial')).snapshotChanges().map(arr => {
      return arr.map(snap => Object.assign(snap.payload.val(), { $key: snap.key }) )
});
  // Lista Procuração Normal
this.itemsTotalProcuracao = this.database.list('procuracao/', ref => ref.orderByChild('typeTicket').equalTo('Normal')).snapshotChanges().map(arr => {
  return arr.map(snap => Object.assign(snap.payload.val(), { $key: snap.key }) )
});
  // Lista Procuração Preferencial
  this.itemsTotalProcuracaoPreferencial = this.database.list('procuracao/', ref => ref.orderByChild('typeTicket').equalTo('Preferencial')).snapshotChanges().map(arr => {
    return arr.map(snap => Object.assign(snap.payload.val(), { $key: snap.key }) )
  });
  // Lista Registro Civil Normal
  this.itemsTotalRegistroCivil = this.database.list('registroCivil/', ref => ref.orderByChild('typeTicket').equalTo('Normal')).snapshotChanges().map(arr => {
    return arr.map(snap => Object.assign(snap.payload.val(), { $key: snap.key }) )
  });
    // Lista Registro Civil Preferencial
    this.itemsTotalRegistroCivilPreferencial = this.database.list('registroCivil/', ref => ref.orderByChild('typeTicket').equalTo('Preferencial')).snapshotChanges().map(arr => {
      return arr.map(snap => Object.assign(snap.payload.val(), { $key: snap.key }) )
    });
  // Lista Escritura Normal
  this.itemsTotalEscritura = this.database.list('escritura/', ref => ref.orderByChild('typeTicket').equalTo('Normal')).snapshotChanges().map(arr => {
    return arr.map(snap => Object.assign(snap.payload.val(), { $key: snap.key }) )
  });
  // Lista Escritura Preferencial
  this.ItemsTotalEscrituraPreferencial = this.database.list('escritura/', ref => ref.orderByChild('typeTicket').equalTo('Preferencial')).snapshotChanges().map(arr => {
    return arr.map(snap => Object.assign(snap.payload.val(), { $key: snap.key }) )
  });

//Captura dados do firebase 

//RECONHECIMENTO FIRMA NORMAL
    this.itemsTotal.forEach(item => {
      this.count.push(item);
      this.validation = item.length;
      console.log(this.count);
  });
  //RECONHECIMENTO FIRMA PREFERENCIAL
  this.itemsTotalPreferencial.forEach(item => {
    this.countPreferencial.push(item);
    this.validationPreferencial = item.length;
    console.log(this.countPreferencial);
});
//PROCURAÇÃO NORMAL
this.itemsTotalProcuracao.forEach(item => {
  this.countProcuracao.push(item);
  this.validationProcuracao = item.length;
  console.log(this.countProcuracao);
});
//PROCURAÇÃO PREFERENCIAL
this.itemsTotalProcuracaoPreferencial.forEach(item => {
  this.countProcuracaoPreferencial.push(item);
  this.validationProcuracaoPreferencial = item.length;
  console.log(this.countProcuracaoPreferencial);
});
//REGISTRO CIVIL NORMAL
this.itemsTotalRegistroCivil.forEach(item => {
  this.countRegistroCivil.push(item);
  this.validationRegistroCivil = item.length;
  console.log(this.countRegistroCivil);
});
//REGISTRO CIVIL PREFERENCIAL
this.itemsTotalRegistroCivilPreferencial.forEach(item => {
  this.countRegistroCivilPreferencial.push(item);
  this.validationRegistroCivilPreferencial = item.length;
  console.log(this.countRegistroCivilPreferencial);
});
// ESCRITURA NORMAL
this.itemsTotalEscritura.forEach(item => {
  this.countEscritura.push(item);
  this.validationEscritura = item.length;
  console.log(this.countEscritura);
});
// ESCRITURA PREFERENCIAL
this.ItemsTotalEscrituraPreferencial.forEach(item => {
  this.countEscrituraPreferencial.push(item);
  this.validationEscrituraPreferencial = item.length;
  console.log(this.countEscritura);
});
//==================================

  }

  
  reconhecimentoFirmaAutenticacao(){
    //Normal
    let tamanho1 = this.count.length - 1
    let tamanho2 = this.count[tamanho1].length -1;
    //Preferencial
    let tamanho1Preferencial = this.countPreferencial.length - 1
    let tamanho2Preferencial = this.countPreferencial[tamanho1Preferencial].length -1;

    let gerarID:any = this.gerarID();

      let novoID: string = gerarID.novoID;
      let dataAtual = gerarID.dataAtual;
      let caminhoInsert = "reconhecimentoFirma/" + novoID;

    if(this.validaPreferencial === false)
    {
      if(this.validation === 0){
        let senhaInicial: any = [];
        senhaInicial = {id: novoID, ticket: 'B1', status:'Aberto',number:1 , date: dataAtual, typeTicket: 'Normal'};

        this.database.object(caminhoInsert).set(senhaInicial);

        this.ticketReconhecimentoFirma= novoID
      }else{

        let novoTicketBase = {
          id: novoID,          
          ticket: 'B' +  (this.count[tamanho1][tamanho2].number  + 1),
          status:'Aberto'  ,
          number:   this.count[tamanho1][tamanho2].number  + 1,
          date: dataAtual,
          typeTicket: 'Normal'
        };

        this.database.object(caminhoInsert).set(novoTicketBase);
    
        this.ticketReconhecimentoFirma = novoID;
        console.log(this.ticketReconhecimentoFirma);
      }
  }else if(this.validaPreferencial === true)
  {
      if(this.validationPreferencial === 0){
        let senhaInicial: any = [];
        senhaInicial = {id: novoID, ticket: 'BP1', status:'Aberto',number:1 , date: dataAtual, typeTicket: 'Preferencial'};

        this.database.object(caminhoInsert).set(senhaInicial);

        this.ticketReconhecimentoFirma = novoID

      }else{      

        let novoTicketBase = {
          id: novoID,          
          ticket: 'BP' +  (this.countPreferencial[tamanho1Preferencial][tamanho2Preferencial].number  + 1),
          status:'Aberto'  ,
          number:   this.countPreferencial[tamanho1Preferencial][tamanho2Preferencial].number  + 1,
          date: dataAtual,
          typeTicket: 'Preferencial'
        };

        this.database.object(caminhoInsert).set(novoTicketBase);
    
        this.ticketReconhecimentoFirma = novoID;
        
      }
}
    this.ticketAtualRecochecimentoFirma = this.database.list('reconhecimentoFirma/', ref => ref.orderByKey().equalTo(this.ticketReconhecimentoFirma)).snapshotChanges().map(arr => {
      return arr.map(snap => Object.assign(snap.payload.val(), { $key: snap.key }) )
});

this.ticketAtualRecochecimentoFirma.forEach(item => {  
  this.validaStatusReconhecimentoFirma = item[0].status;
  console.log(item[0]);
  console.log(this.validaStatusReconhecimentoFirma);
});
   
    console.log( this.ticketReconhecimentoFirma);
    console.log( this.ticketAtualRecochecimentoFirma);
  }

  procuracao(){
    let tamanho1 = this.countProcuracao.length - 1
    let tamanho2 = this.countProcuracao[tamanho1].length -1;
    //Preferencial
    let tamanho1Preferencial = this.countProcuracaoPreferencial.length - 1
    let tamanho2Preferencial = this.countProcuracaoPreferencial[tamanho1Preferencial].length -1;

    let gerarID:any = this.gerarID();

      let novoID: string = gerarID.novoID;
      let dataAtual = gerarID.dataAtual;
      let caminhoInsert = "procuracao/" + novoID;

    if(this.validaPreferencial === false)
    {

      if(this.validationProcuracao === 0){
        let senhaInicial: any = [];
        senhaInicial = {id: novoID, ticket: 'P1', status:'Aberto',number:1 , date: dataAtual, typeTicket: 'Normal' };

        this.database.object(caminhoInsert).set(senhaInicial);

        this.ticketProcuracao= novoID

      }else{      

        let novoTicketBase = {
          id: novoID,          
          ticket: 'P' +  (this.count[tamanho1][tamanho2].number  + 1),
          status:'Aberto'  ,
          number:   this.count[tamanho1][tamanho2].number  + 1,
          date: dataAtual,
          typeTicket: 'Normal'
        };

        this.database.object(caminhoInsert).set(novoTicketBase);
    
        this.ticketProcuracao = novoID;
        
      }
  }else if(this.validaPreferencial === true){
    if(this.validationProcuracaoPreferencial === 0){
      let senhaInicial: any = [];
      senhaInicial = {id: novoID, ticket: 'PP1', status:'Aberto',number:1 , date: dataAtual, typeTicket: 'Preferencial'};

      this.database.object(caminhoInsert).set(senhaInicial);

      this.ticketProcuracao = novoID

    }else{      

      let novoTicketBase = {
        id: novoID,          
        ticket: 'PP' +  (this.countProcuracaoPreferencial[tamanho1Preferencial][tamanho2Preferencial].number  + 1),
        status:'Aberto'  ,
        number:   this.countProcuracaoPreferencial[tamanho1Preferencial][tamanho2Preferencial].number  + 1,
        date: dataAtual,
        typeTicket: 'Preferencial'
      };

      this.database.object(caminhoInsert).set(novoTicketBase);
  
      this.ticketProcuracao = novoID;
      
    }
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
    //preferencial
    let tamanho1Preferencial = this.countRegistroCivilPreferencial.length - 1
    let tamanho2Preferencial = this.countRegistroCivilPreferencial[tamanho1Preferencial].length -1;

    let gerarID:any = this.gerarID();

      let novoID: string = gerarID.novoID;
      let dataAtual = gerarID.dataAtual;
      let caminhoInsert = "registroCivil/" + novoID;

    if(this.validaPreferencial === false)
    {
      if(this.validationRegistroCivil === 0){
        let senhaInicial: any = [];
        senhaInicial = {id: novoID, ticket: 'C1', status:'Aberto',number:1 , date: dataAtual, typeTicket: 'Normal'};
  
        this.database.object(caminhoInsert).set(senhaInicial);
  
        this.ticketRegistroCivil = novoID

      }else{      
    
        let novoTicketBase = {
          id: novoID,          
          ticket: 'C' +  (this.count[tamanho1][tamanho2].number  + 1),
          status:'Aberto'  ,
          number:   this.count[tamanho1][tamanho2].number  + 1,
          date: dataAtual,
          typeTicket: 'Normal'
        };

        this.database.object(caminhoInsert).set(novoTicketBase);
    
        this.ticketRegistroCivil = novoID;
        
      }
  }else if(this.validaPreferencial === true){
    if(this.validationRegistroCivilPreferencial === 0){
      let senhaInicial: any = [];
      senhaInicial = {id: novoID, ticket: 'CP1', status:'Aberto',number:1 , date: dataAtual, typeTicket: 'Preferencial'};

      this.database.object(caminhoInsert).set(senhaInicial);

      this.ticketRegistroCivil = novoID

    }else{      
      
        let novoTicketBase = {
          id: novoID,          
          ticket: 'CP' +  (this.countRegistroCivilPreferencial[tamanho1Preferencial][tamanho2Preferencial].number  + 1),
          status:'Aberto'  ,
          number:   this.countRegistroCivilPreferencial[tamanho1Preferencial][tamanho2Preferencial].number  + 1,
          date: dataAtual,
          typeTicket: 'Preferencial'
        };
  
        this.database.object(caminhoInsert).set(novoTicketBase);
    
        this.ticketRegistroCivil = novoID;
        
      
    }
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
    //preferencial
    let tamanho1Preferencial = this.countEscrituraPreferencial.length - 1
    let tamanho2Preferencial = this.countEscrituraPreferencial[tamanho1Preferencial].length -1;

    let gerarID:any = this.gerarID();
    
    let novoID: string = gerarID.novoID;
    let dataAtual = gerarID.dataAtual;
    let caminhoInsert = "escritura/" + novoID;

    if(this.validaPreferencial === false)
    {
          if(this.validationEscritura === 0){
            let senhaInicial: any = [];
            senhaInicial = {id: novoID, ticket: 'E1', status:'Aberto',number:1 , date: dataAtual, typeTicket: 'Normal' };
    
            this.database.object(caminhoInsert).set(senhaInicial);
    
            this.ticketEscritura = novoID

          }else{      

            let novoTicketBase = {
              id: novoID,          
              ticket: 'E' +  (this.count[tamanho1][tamanho2].number  + 1),
              status:'Aberto'  ,
              number:   this.count[tamanho1][tamanho2].number  + 1,
              date: dataAtual,
              typeTicket: 'Normal'
            };
    
            this.database.object(caminhoInsert).set(novoTicketBase);
        
            this.ticketEscritura = novoID;

          }
  }else if(this.validaPreferencial === true){

    if(this.validationEscrituraPreferencial === 0){
      let senhaInicial: any = [];
      senhaInicial = {id: novoID, ticket: 'EP1', status:'Aberto',number:1 , date: dataAtual, typeTicket: 'Preferencial'};

      this.database.object(caminhoInsert).set(senhaInicial);

      this.ticketEscritura = novoID

    }else{      
  
      let novoTicketBase = {
        id: novoID,          
        ticket: 'EP' +  (this.countEscrituraPreferencial[tamanho1Preferencial][tamanho2Preferencial].number  + 1),
        status:'Aberto',
        number:   this.countEscrituraPreferencial[tamanho1Preferencial][tamanho2Preferencial].number  + 1,
        date: dataAtual,
        typeTicket: 'Preferencial'
      };

      this.database.object(caminhoInsert).set(novoTicketBase);
  
      this.ticketEscritura = novoID;
      
    }

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

  gerarID(): any{
    let data = new Date();
    let ano = data.getFullYear().toString();
    let mes = data.getMonth().toString();

    if(mes.length == 1){
        mes = "0" + mes;
    }
    var dia = data.getDate().toString();
    if(dia.length == 1){
        dia = "0" + dia;
    }
    var horas = data.getHours().toString();
    if(horas.length == 1){
        horas = "0" + horas;
    }
    var minutos = data.getMinutes().toString();
    if(minutos.length == 1){
        minutos = "0" + minutos;
    }
    var segundos = data.getSeconds().toString();
    if(segundos.length == 1){
        segundos = "0" + segundos;
    }

    var novoId = data.getFullYear().toString() + mes + dia + horas + minutos + segundos;
    return {
      novoID: novoId,
      dataAtual: dia + '/' + mes + '/' + ano
    };
  }

}


    

