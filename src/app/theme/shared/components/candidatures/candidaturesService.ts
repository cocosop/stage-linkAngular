import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidature } from './candidaturesModele';
import { CandidaturesDto } from './candidaturesDto';


@Injectable({
  providedIn: 'root'
})
export class CandidatureService {
 

  constructor(private http:HttpClient) { }
 
  getAllPostulation(): Observable<Candidature[]> {
    return this.http.get<Candidature[]>("http://localhost:8089/stage-link/api/v1/postulations/recuperer-tous");
  }

//   getPostulationByEmail(email: string): Observable<Postulation[]> {
//     return this.http.get<Postulation[]>(`http://localhost:8089/stage-link/api/v1/postulations/recuperer/${email}`)
//   }
  getPostulationByEmail(email: string): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(`http://localhost:8089/stage-link/api/v1/postulations/recuperer/${email}`)
  }
 
  addPostulation(candidature: CandidaturesDto): Observable<Candidature> {
    return this.http.post<Candidature>(`${"http://localhost:8089/stage-link/api/v1/postulations/ajouter"}`, candidature)
  }
  
  editPostulation( candidature: Candidature): Observable<Candidature> {
    return this.http.put<Candidature>(`http://localhost:8089/stage-link/api/v1/postulations/modifier`, candidature)
  }

 
}
