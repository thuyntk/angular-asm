import { Component, OnInit } from '@angular/core';
import { StudentServicesService } from 'src/app/services/student/student-services.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  listAddStudents: Array<any> =[]
    studentData = {
    fullname: "",
    username: "",
    email: "",
    password: "",
    gender: "",
    birthday: "",
    schoolfee: 0,
  }
  constructor( private studentServices: StudentServicesService) { }

  ngOnInit(): void {
    this.getStudent();
  }
  getStudent(){
    this.studentServices.list()
      .subscribe(data => {
        this.listAddStudents = data;
      })
  }
  addStudent(){
    this.studentServices.addNew(this.studentData)
      .subscribe(newStudent => {
        this.listAddStudents.push(newStudent);
      });
  }
}
