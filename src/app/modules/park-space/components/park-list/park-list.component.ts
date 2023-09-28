import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Parking } from '../../models/parking.model';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { StarRatingColor } from 'src/app/shared/components/star-rating/star-rating.component';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
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
  minDate!: string | number | Date;
  minEndDate!: NgbDateStruct;
  bookForm!: FormGroup;
  airports: string[] = ['One', 'Two', 'Three'];
  options: string[] = ['One', 'Two', 'Three', 'five', 'six', 'seven'];
  filteredOptions: Observable<string[]> | undefined;
  myControl = new FormControl('');

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  ngOnInit() {
    this.initForm();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }
    onRatingChanged(rating: any){
    this.rating = rating;
  }
  initForm(){
    this.bookForm = new FormGroup({
      start_date: new FormControl("", [Validators.required]),
      end_date: new FormControl('', [Validators.required]),
      airport: new FormControl('', [Validators.required])
    })
  }
  goToDetails(details: any){
    this.router.navigate(['park-space/parking-details'], {state: {parking: details}});
  }
  validateDates() {
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
		return {
		  year: date.getFullYear(),
		  month: date.getMonth() + 1,
		  day: date.getDate()
		};
	  }
}
