import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Etudiant} from './etudiant'

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private http:HttpClient) { }

  getAllStudents(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>('http://localhost:3000/etudiants');
  }
}
