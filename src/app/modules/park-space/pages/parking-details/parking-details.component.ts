import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { StarRatingColor } from 'src/app/shared/components/star-rating/star-rating.component';
import { DataService } from '../../services/data.service';
import { Parking } from '../../models/parking.model';
import { MatDialog } from '@angular/material/dialog';
import { BookingComponent } from 'src/app/shared/components/booking/booking.component';

@Component({
  selector: 'app-parking-details',
  templateUrl: './parking-details.component.html',
  styleUrls: ['./parking-details.component.scss']
})
export class ParkingDetailsComponent implements OnInit {
  parking: any;
  minDate!: string | number | Date;
  minEndDate!: NgbDateStruct;
  parkingList: Parking[] = [];
  constructor(
    private router: Router,
    private dataService: DataService,
    private dialogRef: MatDialog
    ){
   this.parking = this.router.getCurrentNavigation()?.extras?.state?.['parking'];
   this.parkingList = [...this.dataService.getParkingList()];
  }
  srcArr=['assets/images/hotelImg1.jpg', 'assets/images/hotelImg2.jpg', 'assets/images/hotelImg3.jpg']
  rating:number = 3;
  starCount:number = 5;
  starColor:StarRatingColor = StarRatingColor.accent;
  starColorP:StarRatingColor = StarRatingColor.primary;
  starColorW:StarRatingColor = StarRatingColor.warn;
  bookForm!: FormGroup;
  ngOnInit(): void {
      this.initForm();
  }
   getDayNameFromDate(dateString: string) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      return 'Invalid Date';
    }

    const dayNumber = date.getDay();
    return daysOfWeek[dayNumber];
  }


  initForm(){
    this.bookForm = new FormGroup({
      start_date: new FormControl("", [Validators.required]),
      end_date: new FormControl('', [Validators.required])
    })
  }
  validateDates() {
    debugger;
		const startDate = this.bookForm.get('start_date')?.value;
    alert(startDate);
		if (startDate) {
      const endDateObj = new Date(startDate);
		  const startDateObj = new Date(this.minDate);
		  if(startDateObj < endDateObj){
			 this.minEndDate=this.convertDateToNgbDate(endDateObj);
		  }
	  }
	}
  private convertDateToNgbDate(date: Date): NgbDateStruct {
    debugger;
		return {
		  year: date.getFullYear(),
		  month: date.getMonth() + 1,
		  day: date.getDate()
		};
	  }
    onRatingChanged(rating: any){
      this.rating = rating;
    }
    openBookingModal(){
      this.dialogRef.open(BookingComponent,{
        // width: '480px'
        data:{
          checkIn: this.bookForm.get('start_date')?.value,
          checkOut: this.bookForm.get('end_date')?.value
        }
      })
    }
}
