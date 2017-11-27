import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { ConnectionService } from '../connection.service';
@Component({
  selector: 'app-deposit-account',
  templateUrl: './deposit-account.component.html',
  styleUrls: ['./deposit-account.component.css']
})
export class DepositAccountComponent implements OnInit {
  dataSelf = {};
  dataRepeat = [{}];
  list = {
    IDcode:"",
    TYPES:"",
    deposit:0,
    withDrawn:0
  };
  constructor(private activateRoute:ActivatedRoute,private _conn:ConnectionService) { 

  }
  getDataWhere(Code){
    this._conn.post('student-select-where',{IDcode:Code}).subscribe(
      (data)=>{
        this.dataSelf = data;
        //console.log(data);
        
      }
    )
  }
  sentData(list){
    list.TYPES="ADD";
    this._conn.post('deposit-account',{list:list}).subscribe(
      (data)=>{
        console.log(data);
        
      },
      (err)=>console.log(err)
      ,()=>{
        this.selectData(this.list,"SELECT");
      }
      
    )
  }
  selectData(list,TYPES){
    list.TYPES=TYPES;
    this._conn.post('deposit-account',{list:list}).subscribe(
      (data)=>{
        this.dataRepeat = data.DATA;
        console.log(data);
        
      }
    )
  }
  ngOnInit() {
    this.activateRoute.params.subscribe(
      (data)=>{
       this.list.IDcode = data["IDcode"];
       this.selectData(this.list,'SELECT');
       this.getDataWhere(this.list.IDcode);
      })    
    
  }

}
