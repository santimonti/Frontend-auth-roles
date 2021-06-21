import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../../question';
import { QuestionService } from '../../services/questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {
  questions: Question = { topic: '', question: '', options: [], answer: '' };
  option1: string = '';
  option2: string = '';
  option3: string = '';
  option4: string = '';
  exists: boolean = false;

  constructor(
    private questionService: QuestionService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  createQuiz() {
    this.questions.options.push(this.option1, this.option2);
    if (!(this.option3 === '')) this.questions.options.push(this.option3);
    if (!(this.option4 === '')) this.questions.options.push(this.option4);

    this.questionService.createQuestion(this.questions).subscribe(
      (res) => {
        this.router.navigate(['/questions']);
      },
      (err) => {
        console.log(err);
        this.questions = { topic: '', question: '', options: [], answer: '' };
        this.exists = true;
      }
    );
  }
}
