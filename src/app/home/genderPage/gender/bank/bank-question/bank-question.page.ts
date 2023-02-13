import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/home/questionService/question.service';

@Component({
  selector: 'app-bank-question',
  templateUrl: './bank-question.page.html',
  styleUrls: ['./bank-question.page.scss'],
})
export class BankQuestionPage implements OnInit {

  questions: any[] = []

  constructor(private questionService: QuestionService) {
    this.questionService.getQuestions().subscribe((res) => {
      this.questions = res.filter(question => question.gender === "bank")})
  }


  ngOnInit() {
  }

}
