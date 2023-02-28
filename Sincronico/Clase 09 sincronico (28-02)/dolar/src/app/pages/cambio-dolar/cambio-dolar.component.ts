import { Component } from '@angular/core';
import { CambiodolarService } from 'src/app/shared/services/cambiodolar.service';

@Component({
  selector: 'app-cambio-dolar',
  templateUrl: './cambio-dolar.component.html',
  styleUrls: ['./cambio-dolar.component.css']
})
export class CambioDolarComponent  {

  dataCambio:String;
  constructor( private cambioDolarSrv:CambiodolarService){
    this.cambioDolarSrv.getCambio().subscribe((data:any)=>{
      this.dataCambio=data;
      console.log(this.dataCambio);
    });
  }

 

}
