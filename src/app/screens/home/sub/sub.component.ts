import { Component, OnInit } from '@angular/core';
import { SubjectServicesService } from 'src/app/services/subject/subject-services.service';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {

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
