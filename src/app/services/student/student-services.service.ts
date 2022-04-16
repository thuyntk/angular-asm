import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from "../../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class StudentServicesService {

  constructor(private HttpClient: HttpClient) { }
  list(): Observable<any>{
    return this.HttpClient.get<any>(`${environment.student_api}`)
  }
  addNew(data: any): Observable<any>{
    return this.HttpClient.post<any>(environment.student_api, {...data});
  }
  getEditStudent(id : number){
    return this.HttpClient.get(`${environment.student_api}/${id}`)
  }
  editStudent(id : number , data : any): Observable<any>{
    return this.HttpClient.put<any>(`${environment.student_api}/${id}`, data)
  }
  delete(id : number) : Observable<any>{
    return this.HttpClient.delete(`${environment.student_api}/${id}`)
  }
}
