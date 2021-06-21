import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/questions.service';
import { Question } from 'src/app/question';
import { TimerService } from 'src/app/services/timer.service';
import { Renderer2 } from '@angular/core';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  questions: Question[] = [];
  selected: string[] = [];
  topic = true;
  start = false;
  timer: any;
  display: string = '';
  correct: number[] = [];
  wrong: number[] = [];
  finish = false;
  inputSearch: string = '';
  constructor(
    private questionService: QuestionService,
    private timerService: TimerService,
    private render: Renderer2
  ) {}

  ngOnInit() {
    window.addEventListener('beforeunload', function (e) {
      var confirmationMessage = 'o/';
      e.returnValue = confirmationMessage;
      return confirmationMessage;
    });
  }

  getQuestions(topics: string) {
    this.questionService
      .getQuestions(topics)
      .subscribe((questions) => (this.questions = questions));

    this.start = true;
    this.timer = this.timerService
      .startTimer()
      .subscribe((a) => (this.display = this.timerService.transform(a)));
  }

  checkQuestion() {
    this.correct = [];
    this.wrong = [];
    for (let i = 0; i < this.selected.length; i++) {
      if (this.selected[i] === this.questions[i].answer) {
        this.correct.push(i + 1);
        let id = <HTMLInputElement>document.getElementById(i.toString());

        this.render.addClass(id, 'bg-success');
        this.render.addClass(id, 'text-white');
      } else {
        let id = <HTMLInputElement>document.getElementById(i.toString());

        this.wrong.push(i + 1);
        this.render.addClass(id, 'bg-danger');
        this.render.addClass(id, 'text-white');
      }
    }
    this.finish = true;
    this.timerService.stopTimer(this.timer);
  }
}
