import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../authentication/login/loginModel';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
 
  Authenticated(){
    return localStorage.getItem('email')!=null;
  }

  constructor(private http:HttpClient){


  }
  // BASE_URL = 'http://localhost:8089/stage-link/api/v1/auth/connect'  
  // login(login: LoginModel): Observable<HttpResponse<LoginModel>> {
  //   // Utiliser la variable BASE_URL au lieu de répéter l'URL complète
  //   return this.http.post<LoginModel>(`${this.BASE_URL}`, login, {observe: 'response'});
  // }

  BASE_URL = 'http://localhost:8089/stage-link/api/v1/auth/connect'  
  login(login: LoginModel): Observable <HttpResponse<LoginModel>> {
    // Utiliser la variable BASE_URL au lieu de répéter l'URL complète
    return this.http.post<LoginModel>(`${this.BASE_URL}`, login, {observe: 'response'});
  }

  // addStudent(student: Etudiant): Observable<Etudiant> {
  //   // student.matricule = this.generateMatricule();
  //   return this.http.post<Etudiant>(`${"http://localhost:8089/stage-link/api/v1/etudiants/ajouter"}`, student)
  // }

}
