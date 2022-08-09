import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CarsComponent } from '../cars/cars.component';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {

  carName = '';
  carYear = 1999;
  @Output() onAddCar = new EventEmitter<{name:string, year:number}>();

  constructor() { }

  ngOnInit(): void {
  }

  addCar() {
    this.onAddCar.emit({
      name: this.carName,
      year: this.carYear
    })
   }

}
