import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  Authenticated(){
    return localStorage.getItem('email')!=null;
  }

}
