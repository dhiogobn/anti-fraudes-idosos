import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/home/questionService/question.service';

@Component({
  selector: 'app-social-questions',
  templateUrl: './social-questions.page.html',
  styleUrls: ['./social-questions.page.scss'],
})
export class SocialQuestionsPage implements OnInit {

  questions: any[] = []

  constructor(private questionService: QuestionService) {
    this.questionService.getQuestions().subscribe((res) => {
      this.questions = res.filter(question => question.gender === "social")})
  }

  ngOnInit() {
  }

}
