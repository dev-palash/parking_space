import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WindowRefService } from '../../services/window-ref.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  orderData:any;
  hotel: string = '';
  constructor(
    private router: Router,
    private winRef: WindowRefService
  ){
    this.orderData = this.router.getCurrentNavigation()?.extras?.state?.['bookingData'];
    this.hotel = this.router.getCurrentNavigation()?.extras?.state?.['hotel'];
    console.log('orderData', this.orderData);
  }
  payWithRazor() {
    const options: any = {
      key: 'rzp_test_HOigY9IpczM7D5',
      amount: 12000, // amount should be in paise format to display Rs 1255 without decimal point
      currency: 'INR',
      name: '', // company name or product name
      description: '',  // product description
      image: '../../../../../assets/images/razor.jpeg', // company logo or product image
      modal: {
        // We should prevent closing of the form when esc key is pressed.
        escape: false,
      },
      notes: {
        // include notes if any
      },
      theme: {
        color: '#0c238a'
      }
    };
    options.handler = ((response: any, error: any) => {
      options.response = response;
      console.log(response);
      console.log(options);
      // call your backend api to verify payment signature & capture transaction
    });
    options.modal.ondismiss = (() => {
      // handle the case when user closes the form while transaction is in progress
      console.log('Transaction cancelled.');
    });
    const rzp = new this.winRef.nativeWindow.Razorpay(options);
    rzp.open();
  }
}
