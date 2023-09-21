import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

import { ParkSpaceRoutingModule } from './park-space-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ParkListComponent } from './components/park-list/park-list.component';
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { LeafletComponent } from './components/leaflet/leaflet.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ParkingDetailsComponent } from './pages/parking-details/parking-details.component';
import { NgbModalWindow } from '@ng-bootstrap/ng-bootstrap/modal/modal-window';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import localeFr from '@angular/common/locales/fr';
import { StarRatingModule } from 'angular-star-rating';
import { PaymentComponent } from './pages/payment/payment.component';
registerLocaleData(localeFr, 'fr');
@NgModule({
  declarations: [
    HomeComponent,
    ParkListComponent,
    LeafletComponent,
    ParkingDetailsComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    ParkSpaceRoutingModule,
    CoreModule,
    FormsModule,
    SharedModule,
    LeafletModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    StarRatingModule.forRoot()

  ],
  providers:[
    {
      provide: LOCALE_ID, useValue: 'fr-FR'
    }
  ]
})
export class ParkSpaceModule { }
