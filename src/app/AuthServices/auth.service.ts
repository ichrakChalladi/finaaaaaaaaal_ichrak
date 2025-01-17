import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService { httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json'
  })
  }

  constructor(private http: HttpClient) { }
  Login(credentials:any){
    return this.http.post(environment.baseURL+
      environment.AuthentificationBackendURL , credentials , this.httpOptions);
  }
  Register(credentials:any){
    return this.http.post(environment.baseURL+
      environment.RegistrationBackendURL , credentials , this.httpOptions);
  }
}
