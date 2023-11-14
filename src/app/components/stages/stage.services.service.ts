import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StageModel } from './models';


@Injectable({
  providedIn: 'root'
})
export class StageServicesService {
  constructor(private http: HttpClient) { } 
   
  get():Observable<StageModel[]>{
    return this.http.get<StageModel[]>("http://localhost:3000/stages")
  }

 


}
