import { Component, OnInit } from '@angular/core';
//import { AuthServiceService } from 'src/app/services/auth/auth-service.service';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // isLoggedIn(): boolean{
  //   return this.authService.isLoggedIn();
  // }
  // logout():void{
  //   this.authService.logout();
  // }
}
