import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Etudiant} from './etudiant'

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  BASE_URL = 'http://localhost:8089/stage-link/api/v1/etudiants/modifier'

  constructor(private http:HttpClient) { }
  private nextMatriculeId = 0;
  generateMatricule(): string {
    const matricule = 'MAT' + this.nextMatriculeId;
    this.nextMatriculeId= this.nextMatriculeId+1;
    return matricule;
  }
  getAllStudents(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>("http://localhost:8089/stage-link/api/v1/etudiants/recuperer-tous");
  }

  // getStudent(id: any): Observable<Etudiant> {
  //   return this.http.get<Etudiant>(`${this.BASE_URL}/${id}`)
  // }

  getStudentByEmail(email: string): Observable<Etudiant> {
    return this.http.get<Etudiant>(`http://localhost:8089/stage-link/api/v1/etudiants/recuperer/${email}`)
  }
 
  deleteStudent(id: any): Observable<Etudiant> {
    return this.http.delete<Etudiant>(`${this.BASE_URL}/${id}`)
  }
  addStudent(student: Etudiant): Observable<Etudiant> {
    // student.matricule = this.generateMatricule();
    return this.http.post<Etudiant>(`${"http://localhost:8089/stage-link/api/v1/etudiants/ajouter"}`, student)
  }
  
  editStudent( student: Etudiant): Observable<Etudiant> {
    return this.http.put<Etudiant>(`http://localhost:8089/stage-link/api/v1/etudiants/modifier`, student)
  }

 
}
