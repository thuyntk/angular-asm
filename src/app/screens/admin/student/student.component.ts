import { Component, OnInit } from '@angular/core';
import { StudentServicesService } from 'src/app/services/student/student-services.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  listStudents: Array<any> =[] 
  constructor(private studentServices: StudentServicesService) { 
    
  }

  ngOnInit(): void {
    this.getStudent()
  }
  getStudent(){
    this.studentServices.list()
      .subscribe(data => {
        this.listStudents = data;
      })
  }
}
