import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentServicesService } from 'src/app/services/student/student-services.service';
import { SubjectServicesService } from 'src/app/services/subject/subject-services.service';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  constructor(
    private router: ActivatedRoute,
    private subjectService: SubjectServicesService,
    private studentService: StudentServicesService
  ) { }
  subject: any = {}
  code: string = ''
  listStudent: Array<any> = []
  studentOfQuiz: Array<any> = []
  ngOnInit(): void {
    this.router.params
      .subscribe(res => this.code = res['id'])
    this.subjectService.list()
      .subscribe(res => {
        this.subject = res.find((item:any) => this.code == item.Code)
        console.log(this.subject)
      })
    this.studentService.list()
    .subscribe(value => {
      value.forEach((student: any) => {
        if(student.marks.filter((s: any) => s.subject == this.code).length > 0){
          student.score = student.marks.find((item:any) => item.subject == this.code)
          this.studentOfQuiz.push(student)
        }
      })
      console.log(this.studentOfQuiz)
    })
  }

}
