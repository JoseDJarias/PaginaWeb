import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CambioDolarRoutingModule } from './cambio-dolar-routing.module';
import { CambioDolarComponent } from './cambio-dolar.component';


@NgModule({
  declarations: [
    CambioDolarComponent
  ],
  imports: [
    CommonModule,
    CambioDolarRoutingModule
  ]
})
export class CambioDolarModule { }
