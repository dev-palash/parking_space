import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringPipe } from './pipes/string.pipe';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    StringPipe,
    StarRatingComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports:[StringPipe, StarRatingComponent]
})
export class SharedModule { }
