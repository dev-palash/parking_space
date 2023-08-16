import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderModule } from './components/header/header.module';
import { FooterModule } from './components/footer/footer.module';
import { MaterialStoreModule } from './material-store/material-store.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    MaterialStoreModule
  ],
  exports: [
    HeaderModule,
    FooterModule,
    MaterialStoreModule
  ]
})
export class CoreModule { }
