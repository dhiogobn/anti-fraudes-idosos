import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from 'src/app/models/Question';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  endPoint = 'http://localhost:3000/questions'

  constructor(private http: HttpClient) { }

  public getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.endPoint);
  }

  public CreateQuestion(question: Question): Observable<any> {
    return this.http.post<any>(this.endPoint, question);
  }

  public getQuestionById(id: number): Observable<any> {
    return this.http.get<any>(`${this.endPoint}/${id}`)
  }

  public editQuestion(id: number, question: Question) {
    return this.http.put<any>(`${this.endPoint}/${id}`, question)
  }

}
