import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import AngularFireDataBase CreateCrud
import {AngularFireDatabase} from 'angularfire2/database'
/*
  Generated class for the CrudProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CrudProvider {

  constructor(public http: HttpClient, private db : AngularFireDatabase) {
    console.log('Hello CrudProvider Provider');
  }

}
