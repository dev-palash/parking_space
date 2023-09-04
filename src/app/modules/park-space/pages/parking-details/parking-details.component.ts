import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StarRatingColor } from 'src/app/shared/components/star-rating/star-rating.component';

@Component({
  selector: 'app-parking-details',
  templateUrl: './parking-details.component.html',
  styleUrls: ['./parking-details.component.scss']
})
export class ParkingDetailsComponent {
  parking: any;
  constructor(private router: Router){
   this.parking = this.router.getCurrentNavigation()?.extras?.state?.['parking'];
  }
  rating:number = 3;
  starCount:number = 5;
  starColor:StarRatingColor = StarRatingColor.accent;
  starColorP:StarRatingColor = StarRatingColor.primary;
  starColorW:StarRatingColor = StarRatingColor.warn;
}
