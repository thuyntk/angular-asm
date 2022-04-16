import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionServicesService } from 'src/app/services/question/question-services.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  formQuestion: any = {
    Text: '',
    Marks: 1,
    AnswerId: '',
    Answers: []
  }
  param: any = "";
  idQues:any = "";
  flag: boolean = false;
  arr: any = [];
  listAnsId: any = [];

  constructor(private activatedRoute: ActivatedRoute,
              private questionService: QuestionServicesService, 
              private route: Router) { }

  ngOnInit(): void {
    this.param = this.activatedRoute.snapshot.paramMap.get('id')
    this.idQues = this.activatedRoute.snapshot.paramMap.get('idQues');
    if(this.idQues){
      this.updateForm()
      this.flag = true
    }
  }

  createAns(){
    let data = {
      Text: '',
      is_correct: false
    }
    this.formQuestion.Answers.push(data)
    this.logIdAnswers()
    console.log(this.formQuestion);
  }

  logIdAnswers() {
    this.questionService.list(this.param).subscribe(data => {
      let idLastQuestion = data[data.length - 1].Answers;
      console.log(data[data.length - 1])
      let idLastAnswer = idLastQuestion[idLastQuestion.length - 1].id;

      for (let i = 0; i < this.formQuestion.Answers.length; i++) {
        this.arr.push((idLastAnswer += 1));
      }

      for (let i = 0; i < this.arr.length; i++) {
        if (!this.listAnsId.includes(this.arr[i])) {
          this.listAnsId.push(this.arr[i])
        }
      }
    })
  }


  changeAns(i:any){
    let Arr: any = this.formQuestion.Answers;
    Arr.forEach((v: any, index: any) => {
      this.formQuestion.Answers[index].is_correct = false;
      if (index == i) {
        this.formQuestion.Answers[i].is_correct = true;
        this.formQuestion.AnswerId = i
      }
    })
  }
 
  changeText(e: any, i: number) {
    this.formQuestion.Answers[i].Text = e.target.value
  }

  save(){
    if (this.idQues) {
      this.questionService.update(this.param,this.idQues, this.formQuestion).subscribe(() =>{
        this.route.navigate(['admin/cau-hoi/' + this.param])
      })
    } else {
    let answers:any = []
    let AnswerId: any;
    this.formQuestion.Answers.forEach((v:any, i:any)=> {
      answers.push({
        id: this.listAnsId[i],
        Text: v.Text
      })
      if (this.formQuestion.AnswerId == i) {
        AnswerId = this.listAnsId[i]
      }

    })

    let dataQues:any = {
      Text: this.formQuestion.Text,
      Marks: 1,
      AnswerId: AnswerId,
      Answers: answers
    }
    
    this.questionService.addNew(this.param, dataQues).subscribe(()=>{
      this.route.navigate(['/admin/cau-hoi/' + this.param])
    })
  }
  }
  updateForm(){
    this.questionService.edit(this.param, this.idQues).subscribe(data => {
      for (const itemForm in this.formQuestion) {
        this.formQuestion[itemForm] = data[itemForm]
      }
    })
  }
  changeAnsUpdate(id: any) {
    if (this.idQues) {
      this.formQuestion.AnswerId = id
    }
  }
}
