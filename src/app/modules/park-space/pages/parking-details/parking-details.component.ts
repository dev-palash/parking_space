import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbDateStruct, NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { StarRatingColor } from 'src/app/shared/components/star-rating/star-rating.component';
import { DataService } from '../../services/data.service';
import { Parking } from '../../models/parking.model';
import { MatDialog } from '@angular/material/dialog';
import { BookingComponent } from 'src/app/shared/components/booking/booking.component';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private dialogRef: MatDialog,
    private config: NgbDatepickerConfig,
    private snackBar: MatSnackBar
    ){
   this.parking = this.router.getCurrentNavigation()?.extras?.state?.['parking'];
   this.parkingList = [...this.dataService.getParkingList()];
   const current = new Date();
   config.minDate = { year: current.getFullYear(), month:
   current.getMonth() + 1, day: current.getDate() };
     //config.maxDate = { year: 2099, month: 12, day: 31 };
   config.outsideDays = 'hidden';
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
    const endDate = this.bookForm.get('end_date')?.value;
		if (startDate) {
      const endDateObj = new Date(Object.values(endDate).join('-'));
		  const startDateObj = new Date(Object.values(startDate).join('-'));
		  if(startDateObj > endDateObj){
       const message = 'checkin date should be older than the checkout date'
       this.snackBar.open(message,'Close',{
        panelClass: ['green-snackbar', 'login-snackbar']
       })
       this.bookForm.get('end_date')?.setValue('');
       return;
		  }
	  }
	}
  private convertDateToNgbDate(date: Date): NgbDateStruct {
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
          checkOut: this.bookForm.get('end_date')?.value,
          hotel: this.parking.name
        }
      })
    }
}
