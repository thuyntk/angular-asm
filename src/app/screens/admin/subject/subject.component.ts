import { Component, OnInit } from '@angular/core';
import { SubjectServicesService } from 'src/app/services/subject/subject-services.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  listSubjects: Array<any> = []
  constructor(private subjectServices: SubjectServicesService) { }

  ngOnInit(): void {
    this.getSubject()
  }
  getSubject(){
    this.subjectServices.list()
      .subscribe(data => {
        this.listSubjects = data;
      })
  }
}
