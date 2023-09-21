import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ParkingDetailsComponent } from './pages/parking-details/parking-details.component';
import { PaymentComponent } from './pages/payment/payment.component';

const routes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path: 'parking-details', component: ParkingDetailsComponent
  },
  {
    path: 'payment', component: PaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParkSpaceRoutingModule { }
