import { StagesModel } from './stages-model'
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StagesService {

  constructor(private http:HttpClient) { }
  BASE_URL = ' http://localhost:3000/stages'
  get(): Observable<StagesModel[]> {
    return this.http.get<StagesModel[]>(this.BASE_URL);
  }
 

  GetAllStage(currentPage:number, pageSize:number): Observable<HttpResponse<any>>{
    return this.http.get<HttpResponse<any>>(`http://localhost:3000/stages?_page=${currentPage}&_limit=${pageSize}`,{observe: 'response'});
  }

  getStage(id: any): Observable<StagesModel> {
    return this.http.get<StagesModel>(`${this.BASE_URL}/${id}`)
  }
  deleteStage(id: any): Observable<StagesModel> {
    return this.http.delete<StagesModel>(`${this.BASE_URL}/${id}`)
  }
  addStage(stage: StagesModel): Observable<StagesModel> {
    return this.http.post<StagesModel>(`${"http://localhost:3000/stages"}`, stage)
  }
  editStage(id: any, stage: StagesModel): Observable<StagesModel> {
    return this.http.put<StagesModel>(`${this.BASE_URL}/${id}`, stage)
  }
}
