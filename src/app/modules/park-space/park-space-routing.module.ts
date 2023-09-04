import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ParkingDetailsComponent } from './pages/parking-details/parking-details.component';

const routes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path: 'parking-details', component: ParkingDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParkSpaceRoutingModule { }
