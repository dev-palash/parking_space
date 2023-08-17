import { Component, OnInit } from '@angular/core';
import { Parking } from '../../models/parking.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  parkingList: Parking[] = [];
  constructor(private dataService: DataService) {
    this.parkingList = [...this.dataService.getParkingList()];
  }
  ngOnInit(): void {

  }

}
