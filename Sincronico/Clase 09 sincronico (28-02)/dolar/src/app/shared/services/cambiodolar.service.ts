import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CambioDolar } from '../models/CambioDolar';

@Injectable({
  providedIn: 'root'
})
export class CambiodolarService {

  constructor(private htpp: HttpClient) { }

  getCambio():Observable<CambioDolar> {
    return this.htpp.get<CambioDolar>("https://api.hacienda.go.cr/indicadores/tc/dolar")
  }
}
