import { Component } from '@angular/core';

import { AppHeaderComponent } from './app-header/app-header.component'
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
    <nav>
      <a routerLink="/tasks" routerLinkActive="active">Tasks</a>
      <a routerLink="/cars" routerLinkActive="active">Cars</a>
    </nav>
    <app-header></app-header>
    <router-outlet></router-outlet>
  `,
  directives: [ AppHeaderComponent, ROUTER_DIRECTIVES]
})

export class AppComponent {

}
