import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionServicesService {

  constructor( private httpClient: HttpClient ) { }
  list(id : any): Observable<any>{
    return this.httpClient.get<any>(`${environment.question_api}/${id}`)
  }
  addNew(id:any,data: any ): Observable<any>{
    return this.httpClient.post<any>(`${environment.question_api}/${id}`, {...data});
  }
  delete(code:any, id:any) : Observable<any>{
    return this.httpClient.delete(`${environment.question_api}/${code}/${id}`)
  }
  update(code:any, idQuestion:any, data: any):Observable<any>{
    return this.httpClient.put<any>(`${environment.question_api}/${code}/${idQuestion}`, data)
  }
  edit(id:any, idQues:any):Observable<any>{
    return this.httpClient.get<any>(`${environment.question_api}/${id}/${idQues}`)
  }
}
