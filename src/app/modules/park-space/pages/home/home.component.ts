import { Component, OnInit } from '@angular/core';
import { Parking } from '../../models/parking.model';
import { DataService } from '../../services/data.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  parkingList: Parking[] = [];
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
  constructor(private dataService: DataService) {
    this.parkingList = [...this.dataService.getParkingList()];
  }
  ngOnInit() {
    this.initForm();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }
  initForm(){
    this.bookForm = new FormGroup({
      start_date: new FormControl("", [Validators.required]),
      end_date: new FormControl('', [Validators.required]),
      airport: new FormControl('', [Validators.required])
    })
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
