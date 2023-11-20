import { StagesModel } from './stages-model'
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StagesService {

  constructor(private http:HttpClient) { }
  
  GetAllUsers(currentPage:number, pageSize:number):Observable<HttpResponse<any>>{
    let url= "http://localhost:3000/stages"  
    return this.http.get<HttpResponse<any>>(`http://localhost:3000/stages?_page=${currentPage}&_limit=${pageSize}`,{observe: 'response'});
  }
}
