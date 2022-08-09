import { Component, ContentChild, ElementRef, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {
  

  @Input() carItem!: { name: string; year: number; };

  @ContentChild('carHeading') carHeading: ElementRef | undefined ;

  ngAfterViewInit() {
    console.log(this.carHeading);
  }

}


