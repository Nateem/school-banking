
import {HomeComponent} from './home/home.component';
import {StudentComponent} from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { DepositAccountComponent } from './deposit-account/deposit-account.component';

export const router_forRoot = [{
    path: '',
    data:{
        title:"Home",
        hide:false
    },
    component: HomeComponent,
    
},{
    path: 'student',
    data:{
        title:"ข้อมูลนักเรียน",
        hide:false
    },
    component: StudentComponent,

},{
    path: 'list',
    data:{
        title:"ฝาก-ถอน",
        hide:false
    },
    component:StudentListComponent,
},{
    path: 'list/:IDcode',
    data:{
        hide:true
    },
    component: DepositAccountComponent
  }]