import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Chambre } from '../model/Chambre';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ChambreService {
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }
  constructor(private http : HttpClient) { } 
  getChamberByReservationID(id:any):Observable<Chambre>{
   return this.http.get<Chambre>(environment.baseURL
      + environment.ChamberBackendAPIS + "/getChambersByReservation/" + id, this.httpOptions)
}
}