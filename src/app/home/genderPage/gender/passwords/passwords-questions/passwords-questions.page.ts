import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/home/questionService/question.service';

@Component({
  selector: 'app-passwords-questions',
  templateUrl: './passwords-questions.page.html',
  styleUrls: ['./passwords-questions.page.scss'],
})
export class PasswordsQuestionsPage implements OnInit {

  questions: any[] = []

  constructor(private questionService: QuestionService) {
    this.questionService.getQuestions().subscribe((res) => {
      this.questions = res.filter(question => question.gender === "password")})
  }

  ngOnInit() {
  }

}
