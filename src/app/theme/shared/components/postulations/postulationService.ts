import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Postulation } from './postulationModele';
import { postulationDto } from './postulationDto';

@Injectable({
  providedIn: 'root'
})
export class PostulationService {
 

  constructor(private http:HttpClient) { }
 
  getAllPostulation(): Observable<Postulation[]> {
    return this.http.get<Postulation[]>("http://localhost:8089/stage-link/api/v1/postulations/recuperer-tous");
  }

//   getPostulationByEmail(email: string): Observable<Postulation[]> {
//     return this.http.get<Postulation[]>(`http://localhost:8089/stage-link/api/v1/postulations/recuperer/${email}`)
//   }
  getPostulationByEmail(email: string): Observable<Postulation[]> {
    return this.http.get<Postulation[]>(`http://localhost:8089/stage-link/api/v1/postulations/recuperer/${email}`)
  }
 
  addPostulation(candidature: postulationDto): Observable<Postulation> {
    return this.http.post<Postulation>(`${"http://localhost:8089/stage-link/api/v1/postulations/ajouter"}`, candidature)
  }
  
  editPostulation( postulation: Postulation): Observable<Postulation> {
    return this.http.put<Postulation>(`http://localhost:8089/stage-link/api/v1/postulations/modifier`, postulation)
  }

 
}
