import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-caroucel',
  templateUrl: './caroucel.component.html',
  styleUrls: ['./caroucel.component.scss']
})
export class CaroucelComponent {
  @Input()
  srcArr!: string[];
}
