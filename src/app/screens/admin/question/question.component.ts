import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionServicesService } from 'src/app/services/question/question-services.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  listQuestions: Array<any> = [];
  constructor(private questionServices: QuestionServicesService,
     private activatedRoute: ActivatedRoute) { }
  param: any = "";
  code: any = ''
  ngOnInit(): void {
    this.param = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.param)

    this.getQuestion();
    console.log(this.listQuestions);
    
  }
  getQuestion() {
    this.questionServices.list(this.param)
      .subscribe(data => {
        this.listQuestions = data;
      })
  }
  deleteQuestion(id : number){
    this.questionServices.delete(this.param, id)
      .subscribe(data => {
        this.listQuestions = this.listQuestions.filter((item : any) =>{
          return item.id =! id
        })
      });
   }
}
