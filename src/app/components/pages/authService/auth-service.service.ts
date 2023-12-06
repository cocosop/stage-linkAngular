import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {




  // login() {
  //   this.isAuthenticated = true;
  // }

  // logout() {
  //   this.isAuthenticated = false;
  // }
  Authenticated(){
    return localStorage.getItem('email')!=null;
  }

  // Authenticated(): boolean {
  //   return this.isAuthenticated;
  // }
}
