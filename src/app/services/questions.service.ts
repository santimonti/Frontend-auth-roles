import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Question } from '../question';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private http: HttpClient) {}
  private URL = 'http://localhost:4040/api';
  question = {};
  createQuestion(question: any) {
    return this.http.post<any>(this.URL + '/question/create', question);
  }
  getQuestions(topic: string): Observable<Question[]> {
    return this.http
      .get<Question[]>(this.URL + '/question/' + topic)
      .pipe(tap((_) => console.log('fetched questions')));
  }

  deleteQuestion(questionId: Question) {
    return this.http.delete<Question>(
      this.URL + `/question/delete/${questionId}`
    );
  }
}
