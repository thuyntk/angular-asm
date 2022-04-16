import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './screens/login/login.component';
import { AdminLayoutComponent } from './layouts/admin/admin-layout/admin-layout.component';
import { DashboardComponent } from './screens/admin/dashboard/dashboard.component';
import { StudentComponent } from './screens/admin/student/student.component';
import { AddStudentComponent } from './screens/admin/add-student/add-student.component';
import { EditStudentComponent } from './screens/admin/edit-student/edit-student.component';
import { SubjectComponent } from './screens/admin/subject/subject.component';
import { QuestionComponent } from './screens/admin/question/question.component';
import { AddQuestionComponent } from './screens/admin/add-question/add-question.component';
import { EditQuestionComponent } from './screens/admin/edit-question/edit-question.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { HomeComponent } from './screens/home/home/home.component';
import { QuizComponent } from './screens/home/quiz/quiz.component';
import { FinalComponent } from './screens/home/final/final.component';
import { HttpClientModule } from '@angular/common/http';
import { SubComponent } from './screens/home/sub/sub.component';
import { GenderPipe } from './helpers/pipes/gender.pipe';
import { FormsModule } from '@angular/forms';
// import { GoogleLoginProvider, SocialAuthService, SocialAuthServiceConfig } from 'angularx-social-login';
// import { environment } from 'src/environments/environment';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminLayoutComponent,
    DashboardComponent,
    StudentComponent,
    AddStudentComponent,
    EditStudentComponent,
    SubjectComponent,
    QuestionComponent,
    AddQuestionComponent,
    EditQuestionComponent,
    HomeLayoutComponent,
    HomeComponent,
    QuizComponent,
    FinalComponent,
    SubComponent,
    GenderPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    // SocialAuthService, 
    RouterModule
  ],
  providers: [
    // {
    //   provide: 'SocialAuthServiceConfig',
    //   useValue: {
    //     autoLogin: false,
    //     providers: [
    //       {
    //         id: GoogleLoginProvider.PROVIDER_ID,
    //         provider: new GoogleLoginProvider(
    //           environment.GOOGLE_CLIENT_ID
    //         )
    //       }
    //     ]
    //   } as SocialAuthServiceConfig,
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
