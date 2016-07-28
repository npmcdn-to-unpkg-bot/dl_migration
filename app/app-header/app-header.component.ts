import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'app-header.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class AppHeaderComponent implements OnInit{
  title = 'App Header';
  
  constructor( private router: Router ){}

  ngOnInit() {
  }

}
