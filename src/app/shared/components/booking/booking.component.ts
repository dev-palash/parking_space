import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  constructor(
    private router: Router,
    private dataService: DataService,
    @Inject(MAT_DIALOG_DATA) public data: any
    ){
   this.parking = this.router.getCurrentNavigation()?.extras?.state?.['parking'];
   this.parkingList = [...this.dataService.getParkingList()];
   console.log('dta', this.data);
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
    this.parkingTimeFilled = true;
    this.parkingTimeDescription = '';
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
}
