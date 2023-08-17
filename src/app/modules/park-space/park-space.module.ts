import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParkSpaceRoutingModule } from './park-space-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ParkListComponent } from './components/park-list/park-list.component';
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    ParkListComponent
  ],
  imports: [
    CommonModule,
    ParkSpaceRoutingModule,
    CoreModule,
    FormsModule,
    SharedModule
  ]
})
export class ParkSpaceModule { }
