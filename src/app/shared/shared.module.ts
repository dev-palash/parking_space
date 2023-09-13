import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringPipe } from './pipes/string.pipe';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { CoreModule } from '../core/core.module';
import { HighlighterDirective } from './directives/highlighter.directive';
import { CaroucelComponent } from './components/caroucel/caroucel.component';
import { BookingComponent } from './components/booking/booking.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StringPipe,
    StarRatingComponent,
    HighlighterDirective,
    CaroucelComponent,
    BookingComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    NgbModule,
    NgxMaterialTimepickerModule,
    FormsModule
  ],
  exports:[StringPipe, StarRatingComponent, HighlighterDirective, CaroucelComponent]
})
export class SharedModule { }
