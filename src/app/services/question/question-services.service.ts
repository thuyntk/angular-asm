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
}
