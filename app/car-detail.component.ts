import { Component, Input } from '@angular/core';

import { Car } from './car';

@Component({
  selector: 'my-car-detail',
  template: `
    <div *ngIf="car">
      <h2>{{car.asm}} details!</h2>
      <div><label>id: </label>{{car.id}}</div>
      <div>
        <label>asm: </label>
        <input [(ngModel)]="car.asm" placeholder="asm"/>
      </div>
    </div>
  `
})
export class CarDetailComponent {
  @Input()
  car: Car;
}