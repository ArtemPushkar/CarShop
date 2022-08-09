import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})



export class CarsComponent {

  
  cars = [{
    name: 'ford',
    year: 1999
  } , {
    name: 'zilok',
    year: 1945
  } , {
    name: 'bmw',
    year: 2023
  }];

  updateCarList(car: {name:string, year:number}) {
    this.cars.push(car);
  }

  constructor() {
   }




}
