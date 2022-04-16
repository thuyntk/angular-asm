import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServicesService } from 'src/app/services/student/student-services.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  student : any = {}
  constructor( private studentServices: StudentServicesService,
               private  route: ActivatedRoute,
               private Router : Router
  ) { }
  ngOnInit(): void {
    this.getEditStudent()
  }
  getEditStudent(){
    this.route.params
    .subscribe(data =>{
      this.studentServices.getEditStudent(data.id)
      .subscribe(data =>{
        this.student = data
      })
    })
  }
  editStudent(){
    this.studentServices.editStudent(this.student.id,this.student)
    .subscribe(data =>{
      this.Router.navigateByUrl("/")
    })
  }
}
