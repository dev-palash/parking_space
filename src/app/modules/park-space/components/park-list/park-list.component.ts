import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Parking } from '../../models/parking.model';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { StarRatingColor } from 'src/app/shared/components/star-rating/star-rating.component';
interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-park-list',
  templateUrl: './park-list.component.html',
  styleUrls: ['./park-list.component.scss']
})
export class ParkListComponent {
  parkingList: Parking[] = [];
  selectedValue: string = '';
  selectedCar: string = '';

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  cars: Car[] = [
    {value: 'volvo', viewValue: 'Volvo'},
    {value: 'saab', viewValue: 'Saab'},
    {value: 'mercedes', viewValue: 'Mercedes'},
  ];
  constructor(
    private dataService: DataService,
    private router: Router
    ) {
    this.parkingList = [...this.dataService.getParkingList()];
  }
  rating:number = 3;
  starCount:number = 5;
  starColor:StarRatingColor = StarRatingColor.accent;
  starColorP:StarRatingColor = StarRatingColor.primary;
  starColorW:StarRatingColor = StarRatingColor.warn;

  ngOnInit() {
  }
    onRatingChanged(rating: any){
    this.rating = rating;
  }

  navigate(){
    this.router.navigate(['/auth/signin'])
  }
}
