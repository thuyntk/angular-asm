import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentServicesService } from 'src/app/services/student/student-services.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  listStudents: Array<any> =[] ;
  constructor(private studentServices: StudentServicesService,
              private activatedRoute: ActivatedRoute) { }
  param: any = "";
  code: any = ''
  ngOnInit(): void {
    this.param = this.activatedRoute.snapshot.paramMap.get('id');

    this.getStudent()
  }
  getStudent(){
    this.studentServices.list()
      .subscribe(data => {
        this.listStudents = data;
      })
  }
  deleteStudent(id : number){
    this.studentServices.delete(id)
      .subscribe(data => {
        this.listStudents = this.listStudents.filter((item : any) =>{
          return item.id =! id
        })
      });
   }
}
