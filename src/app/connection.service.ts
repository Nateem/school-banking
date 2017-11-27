import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ConnectionService {
  backend_host:string = 'http://localhost/school-banking/';
  constructor(private http:Http) { }
  get(pathName:string){
    return this.http.get(this.backend_host + pathName + '.php').map(res=>res.json());
  }
  post(pathName:string,param:Object){
    return this.http.post(this.backend_host+pathName + '.php',JSON.stringify(param)).map(res=>res.json());
  }
}
