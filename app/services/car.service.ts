import { Injectable } from '@angular/core';
import { Car } from '../car';
import { CARS } from './mock-cars';
@Injectable()
export class CarService {
  getCars() {
    return Promise.resolve(CARS);
  }
}
