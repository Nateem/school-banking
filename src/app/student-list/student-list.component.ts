import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  public dataRepeat =[{}];
  constructor(private _con:ConnectionService) { }

  getDataList(){
    this._con.get("student-select").subscribe(
      (data)=>{
        this.dataRepeat = data
      }
    )
  }
  ngOnInit() {
    this.getDataList();
  }

}
