import { Component, OnInit } from '@angular/core';
import {router_forRoot} from '../../router-menu';
import {RouterLinkActive} from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  router_menu = router_forRoot;
  constructor() { }

  ngOnInit() {
  }

}
