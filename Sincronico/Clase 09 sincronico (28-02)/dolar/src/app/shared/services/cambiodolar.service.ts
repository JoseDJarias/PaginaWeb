import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CambiodolarService {

  constructor(private htpp: HttpClient) { }

  getCambio():Observable<any> {
    return this.htpp.get("https://api.hacienda.go.cr/indicadores/tc/dolar")
  }
}
