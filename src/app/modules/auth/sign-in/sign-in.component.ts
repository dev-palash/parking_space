import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  timeOut: any;
  constructor(private router: Router){

  }
  ngOnInit(): void {
      this.timeOut = setTimeout(()=>{
        this.router.navigate(['/park-space']);
      }, 2000)
  }

  ngOnDestroy(){
    clearTimeout(this.timeOut);
  }
}
