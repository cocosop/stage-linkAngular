import { StagesModel } from './stages-model'
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StageDto } from './stageDto';

@Injectable({
  providedIn: 'root'
})
export class StagesService {

  constructor(private http:HttpClient) { }
  BASE_URL = ' http://localhost:8089/stage-link/api/v1/stages/recuperer-tous'
  get(): Observable<StagesModel[]> {
    return this.http.get<StagesModel[]>(this.BASE_URL);
  } 

  GetAllStage(currentPage:number, pageSize:number): Observable<HttpResponse<any>>{
    return this.http.get<HttpResponse<any>>(`http://localhost:8089/stage-link/api/v1/stages/recuperer-tous?_page=${currentPage}&_limit=${pageSize}`,{observe: 'response'});
  }

  getStage(idStage: any): Observable<StagesModel> {
    return this.http.get<StagesModel>(`http://localhost:8089/stage-link/api/v1/stages/recuperer/${idStage}`)
  }
  getStageByEmail(email: any): Observable<StagesModel[]> {
    return this.http.get<StagesModel[]>(`http://localhost:8089/stage-link/api/v1/stages/search/${email}`)
  }
  deleteStage(id: any): Observable<StagesModel> {
    return this.http.delete<StagesModel>(`${this.BASE_URL}/${id}`)
  }
  addStage(stage: StageDto): Observable<StagesModel> {
    return this.http.post<StagesModel>(`${"http://localhost:8089/stage-link/api/v1/stages/ajouter"}`, stage)
  }
  editStage(id: any, stage: StagesModel): Observable<StagesModel> {
    return this.http.put<StagesModel>(`http://localhost:8089/stage-link/api/v1/stages/modifier/idStage=${id}`, stage)
  }
}
