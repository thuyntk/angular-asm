import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionServicesService } from 'src/app/services/question/question-services.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  listQuiz: Array<any> =[];
  constructor(private questionServices:QuestionServicesService, private activatedRoute:ActivatedRoute) { }
  param :any = "";
  ngOnInit(): void {
  this.param = this.activatedRoute.snapshot.paramMap.get('id');
  this.getQuiz();
  }
  getQuiz(){
    this.questionServices.list(this.param)
    .subscribe(data => {
      this.listQuiz = data.sort();
      console.log(data)
    })
  }
}
