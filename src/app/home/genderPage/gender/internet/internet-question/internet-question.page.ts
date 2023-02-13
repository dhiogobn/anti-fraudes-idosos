import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/home/questionService/question.service';

@Component({
  selector: 'app-internet-question',
  templateUrl: './internet-question.page.html',
  styleUrls: ['./internet-question.page.scss'],
})
export class InternetQuestionPage implements OnInit {
  slideOpts = {
    slidesPerView: 1,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 1000,
      modifier: 1,
      slideShadows: true,
    }
  }

  questions: any[] = []

  constructor(private questionService: QuestionService) {
    this.questionService.getQuestions().subscribe((res) => {
      this.questions = res.filter(question => question.gender === "internet")})
  }

  ngOnInit() { }

}
