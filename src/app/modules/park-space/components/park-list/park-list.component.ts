import { Component } from '@angular/core';
import { Parking } from '../../models/parking.model';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
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
  navigate(){
    this.router.navigate(['/auth/signin'])
  }
}
