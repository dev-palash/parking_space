import { Injectable } from '@angular/core';
import { parkingData } from '../data-store/parking-data';
import { Parking } from '../models/parking.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private parkings: Parking[] = parkingData;
  constructor() { }
  getParkingList(){
    return this.parkings;
  }
}
