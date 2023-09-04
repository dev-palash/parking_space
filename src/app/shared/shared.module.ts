import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringPipe } from './pipes/string.pipe';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { CoreModule } from '../core/core.module';
import { HighlighterDirective } from './directives/highlighter.directive';



@NgModule({
  declarations: [
    StringPipe,
    StarRatingComponent,
    HighlighterDirective
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports:[StringPipe, StarRatingComponent, HighlighterDirective]
})
export class SharedModule { }
