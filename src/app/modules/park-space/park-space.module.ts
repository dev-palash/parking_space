import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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


@NgModule({
  declarations: [
    HomeComponent,
    ParkListComponent,
    LeafletComponent,
    ParkingDetailsComponent
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
    ReactiveFormsModule
  ]
})
export class ParkSpaceModule { }
