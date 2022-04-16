import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  loggedInStudent: BehaviorSubject<any> = new BehaviorSubject(JSON.parse(localStorage.getItem('login_user') || "{}"));

  constructor(private http: HttpClient,
              private router: Router) { }
  login(email: String, googleId: String): Observable<any>{
    return this.http.get<any>(`${environment.student_api}?{email}&googleId=${googleId}`)
    .pipe(
      map((item) => {
        if(item.length > 0){
          localStorage.setItem('login_user', JSON.stringify(item[0]));
          this.loggedInStudent.next(item[0])
          return item[0];
        }
        return null;
      })
    )
  }
  getLoggeInUser(){
    return this.loggedInStudent.value;
  }
  isLoggedIn(): boolean{
    const loggedInStudent = JSON.parse(localStorage.getItem('login_user') || "{}");
    if(loggedInStudent.email == undefined || loggedInStudent.email == ""
      || loggedInStudent.googleId == undefined || loggedInStudent.googleId == ""){
        return false;
      }
      return true;
  }
  logout(): void{
    localStorage.removeItem('login_user');
    this.router.navigate(['/login']);
  }
}
