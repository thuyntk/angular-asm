import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionServicesService } from 'src/app/services/question/question-services.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  listQuestions: Array<any> =[];
  constructor(private questionServices:QuestionServicesService, private activatedRoute:ActivatedRoute) { }
  param:any = "";
  ngOnInit(): void {
    this.param = this.activatedRoute.snapshot.paramMap.get('id');
    this.getQuestion();
    console.log(this.listQuestions)
  }
  getQuestion(){
     this.questionServices.list(this.param)
  .subscribe(data => {
    this.listQuestions = data;
    console.log(data)
  })
}
}
