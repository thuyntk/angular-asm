// import { Component, OnInit } from '@angular/core';
// import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
// import { AuthServiceService } from 'src/app/services/auth/auth-service.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   constructor(private socialService: SocialAuthService,
//               private authService: AuthServiceService
//     ) { }

//   ngOnInit(): void {
//   }
//   googleLogin(){
//     this.socialService.signIn(GoogleLoginProvider.PROVIDER_ID)
//     .then(resp => {
//       this.authService.login(resp.email, resp.id)
//         .subscribe(data => {

//           console.log("LoginComponent", data);
//         })
//     })
//   }
// }
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', Validators.required)
  })
  constructor() { }

  ngOnInit(): void {
  }
  submitForm(){
    console.log(this.loginForm.value)
  }
}