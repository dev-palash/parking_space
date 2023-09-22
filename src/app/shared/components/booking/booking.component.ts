import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Parking } from 'src/app/modules/park-space/models/parking.model';
import { DataService } from 'src/app/modules/park-space/services/data.service';
import { StarRatingColor } from 'src/app/shared/components/star-rating/star-rating.component';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit, AfterViewInit {
  parking: any;
  minDate!: string | number | Date;
  minEndDate!: NgbDateStruct;
  parkingList: Parking[] = [];
  picker: any;
  checkInTime: any;
  checkoutTime: any;
  monthNames: string[] = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
  checkInMonth: string = '';
  checkOutMonth: string = '';
  dayNames: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  checkInDay: string = '';
  checkOutday: string = '';
  hotel: string = '';
  constructor(
    private router: Router,
    private dataService: DataService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<BookingComponent>
    ){
   this.parking = this.router.getCurrentNavigation()?.extras?.state?.['parking'];
   this.parkingList = [...this.dataService.getParkingList()];
   console.log('dta', this.data);
   this.checkInMonth = this.monthNames[Number(this.data.checkIn.month) - 1];
   this.checkOutMonth = this.monthNames[Number(this.data.checkOut.month) - 1];
   this.checkInDay = this.getDayNameFromDate(Object.values(this.data.checkIn).join('-'));
   this.checkOutday = this.getDayNameFromDate(Object.values(this.data.checkOut).join('-'));
  }
  srcArr=['assets/images/hotelImg1.jpg', 'assets/images/hotelImg2.jpg', 'assets/images/hotelImg3.jpg']
  rating:number = 3;
  starCount:number = 5;
  starColor:StarRatingColor = StarRatingColor.accent;
  starColorP:StarRatingColor = StarRatingColor.primary;
  starColorW:StarRatingColor = StarRatingColor.warn;
  selectedValue: string = '';
  parkingTimeFilled: boolean = false;
  parkingTimeDescription: string = 'Select your parking check-in and check-out times';
  foods: any = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  form!: FormGroup;
  ngOnInit(): void {
      // alert(this.checkInTime);
  }
  ngAfterViewInit(): void {
    // alert(this.checkInTime);
  }
  initForm(){
    this.form = new FormGroup({
      start_date: new FormControl("", [Validators.required])
    })
  }
  onContinue(){
    this.parkingTimeFilled = !this.parkingTimeFilled;
    this.parkingTimeDescription = !this.parkingTimeFilled ? 'Select your parking check-in and check-out times' : `Check-in: ${this.checkInDay}, ${this.checkInMonth} ${this.data.checkIn.day}  @ ${this.checkInTime} Check-out: ${this.checkOutday}, ${this.checkOutMonth} ${this.data.checkOut.day}  @ ${this.checkoutTime}`;
  }
  checkTime(){
    // alert(this.checkInTime);
  }
  validateDates() {
		const startDate = this.form.get('start_date')?.value;
		if (startDate) {
          const endDateObj = new Date(startDate);
		  const startDateObj = new Date(this.minDate);
		  if(startDateObj < endDateObj){
			 this.minEndDate=this.convertDateToNgbDate(endDateObj);
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
    gotoPayment() {
      this.dialogRef.close();
      const obj = {
        checkinDay: this.checkInDay,
        checkinDateDay: this.data.checkIn.day,
        checkinMonth: this.checkInMonth,
        checkinTime: this.checkInTime,
        checkoutDay: this.checkOutday,
        checkoutDateDay: this.data.checkOut.day,
        checkoutMonth: this.checkOutMonth,
        checkoutTime: this.checkoutTime,

      }
      this.router.navigate(['park-space/payment'], {state: {bookingData: obj, hotel: this.data.hotel}});
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
}
