import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';
import { QuestionServicesService } from 'src/app/services/question/question-services.service';
import { StudentServicesService } from 'src/app/services/student/student-services.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  listQuestions: Array<any> = [];
  id: string = "";
  user_id:string ="";
  student_select_answers: Array<any> = [];
  constructor(private questionServices: QuestionServicesService,
              private router: ActivatedRoute,
              private route: Router,
              private studentServices: StudentServicesService,
              private authServices: AuthServiceService) { }
  ngOnInit(): void {
    this.router.params.subscribe(par => {
      this.id = par['id'];
      this.getQuestions();
    })
    
    
    this.studentServices.list()
      .subscribe(res => this.listStudent = res)
  }
  listStudent: Array<any> = [];
  getQuestions(){
    this.questionServices.list(this.id)
    .subscribe(data => {
      let randomArr = this.getDistinctNumberArr(10, data.length);
      this.listQuestions = randomArr.map((ind) => data[ind]);
    })
  }

  studentSelected: any = {}
  selectedStudent(event: any){
    this.studentSelected = this.listStudent.find((item:any) => item.id == event.target.value)
    console.log();
    
  }
  private getDistinctNumberArr(amount = 10, max = 80){
    let arr: Array<number> = [];
    while(arr.length < amount){
      const rand = Math.floor(Math.random() * max);
      if(!arr.includes(rand)){
        arr.push(rand);
      }
    }
    return arr;
  }

  selectAnswer(qId:number, aId: number){
    let indx = -1;
    this.student_select_answers.forEach((el, index)=>{
      if(el.qId == qId){
        indx = index;
        return;
      }
    });
    if(indx == -1){
      this.student_select_answers.push({
        qId, aId
      });
    }else{
      this.student_select_answers[indx].aId = aId;
    }
  }

  submitExcercise(){
    let correctAns = 0;
    this.student_select_answers.forEach((el) => {
      let q = this.listQuestions.find(item => item.id == el.qId);
      if(q.AnswerId == el.aId){
        correctAns++;
      }
    })
    const score = (correctAns*10/this.listQuestions.length).toFixed(2);
    let student = this.authServices.loggedInStudent.value;
    // student.marks
    let indx = -1;
  
    this.studentSelected.marks.forEach((m:any, i: number) => {
      if(m.subject == this.id){
        indx = i;
        return;
      }
    })
    if(indx == -1){
      this.studentSelected.marks.push({
        subject: this.id,
        score: Number(score)
      });
    }else{
      this.studentSelected.marks[indx].score = score;
    }
    this.studentServices.editStudent(this.studentSelected.id,this.studentSelected)
      .subscribe(() => {
        this.route.navigate(['/quiz/' + this.id + '/ket-qua'])
      }) 
    }   
  }
  