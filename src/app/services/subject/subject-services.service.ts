import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubjectServicesService {

  constructor(private HttpClient: HttpClient) { }
  list(): Observable<any>{
    return this.HttpClient.get<any>(`${environment.subject_api}`);
  }
}
