import { Component, OnInit } from '@angular/core';
import {ConnectionService} from '../connection.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  public student={
    Class:""
  };
  public notify={
    show:false
  };
  public stdRepeat;
  constructor(private _con:ConnectionService) { }
  sendData(forms,type){
    //console.log(forms);
    forms.type = type;
    this._con.post('student-add',forms).subscribe(
      (data)=>{
        //console.log(data);
        this.notification(data);
      },
      (err)=>console.log(err),
      ()=>{
        this.student={
          Class:""
        };
        
        this.getData();
      }
      
    )
  }
  notification(data){
    this.notify = data;
    this.notify.show = true;
    setTimeout(()=>{
      this.notify.show = false;
    },3000)
  }
  getData(){
    this._con.get('student-select').subscribe(
      (data)=>{
        this.stdRepeat = data;
      }
    )
  }
  editData(ID){
    this._con.post('student-select-where',{ID:ID}).subscribe(
      (data)=>{
        this.student = data;
      }
    )
  }
  deleteData(ID){
    if(confirm("คุณต้องการลบ ใช่ หรือ ไม่")){
      this._con.post('student-delete',{ID}).subscribe(
        (data)=>{
          //console.log(data);
          this.notification(data);
        },
        (err)=>console.log(err),
        ()=>{
          this.getData();
        }
      )
    }
    else{
      return false;
    }
   
  }
  ngOnInit() {
    this.getData();
  }

}
