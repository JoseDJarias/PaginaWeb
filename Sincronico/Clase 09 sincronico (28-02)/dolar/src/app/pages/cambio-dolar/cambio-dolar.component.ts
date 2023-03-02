import { Component } from '@angular/core';
import { CambioDolar } from 'src/app/shared/models/CambioDolar';
import { CambiodolarService } from 'src/app/shared/services/cambiodolar.service';

@Component({
  selector: 'app-cambio-dolar',
  templateUrl: './cambio-dolar.component.html',
  styleUrls: ['./cambio-dolar.component.css']
})
export class CambioDolarComponent  {

  dataCambio:CambioDolar;
  constructor( private cambioDolarSrv:CambiodolarService){
    this.cambioDolarSrv.getCambio().subscribe((data:CambioDolar)=>{
      this.dataCambio=data;
      console.log(this.dataCambio);
    });
  }

 

}
