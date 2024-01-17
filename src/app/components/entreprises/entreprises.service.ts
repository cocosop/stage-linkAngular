import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Entreprises } from './entreprises';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntreprisesService {

  constructor(private http:HttpClient) { }

  BASE_URL = 'http://localhost:3000/entreprise'

  getAllEntreprises(): Observable<Entreprises[]> {
    return this.http.get<Entreprises[]>(this.BASE_URL);
  }

  getEntreprise(id: any): Observable<Entreprises> {
    return this.http.get<Entreprises>(`${this.BASE_URL}/${id}`)
  }
  getEntrepriseEmail(email: string): Observable<Entreprises> {
    return this.http.get<Entreprises>(`http://localhost:8089/stage-link/api/v1/entreprises/recuperer/${email}`)
  }
  deleteEntreprise(id: any): Observable<Entreprises> {
    return this.http.delete<Entreprises>(`${this.BASE_URL}/${id}`)
  }
  addEntreprise(entreprise: Entreprises): Observable<Entreprises> {
    return this.http.post<Entreprises>(`${"http://localhost:8089/stage-link/api/v1/entreprises/ajouter"}`, entreprise)
  }
  editEntreprise(entreprise: Entreprises): Observable<Entreprises> {
    return this.http.put<Entreprises>(`http://localhost:8089/stage-link/api/v1/entreprises/modifier`, entreprise)
  }
 
  editEntrepriseEmail(email: any, entreprise: Entreprises): Observable<Entreprises> {
    return this.http.put<Entreprises>(`${this.BASE_URL}/${email}`, entreprise)
  }
}
