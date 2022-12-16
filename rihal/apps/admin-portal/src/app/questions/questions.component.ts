import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionDto } from '@rihal/data-models';
import { AlertService } from '@rihal/layout';
import { Observable, of } from 'rxjs';
import { QuestionService } from '../services/student/question/question.service';

@Component({
  selector: 'rihal-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  constructor(
    private questionService: QuestionService,
    private alertService: AlertService
  ) {}

  questions$: Observable<QuestionDto[]> = of([]);
  //   questionDto: QuestionDto={
  //     id:1,
  //     title:"questionTitle",
  //     description:"questionTitle",
  //     GroupId:2,
  //     askDate: new Date("2022-10-16"),
  //     studentId:1,
  //     likes:0
  //  }

  questionForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });
  get f() {
    return this.questionForm.controls;
  }
  register = () => {
    const questionDto: QuestionDto = {
      //id:1,
      title: this.questionForm.value.title ?? '',
      description: this.questionForm.value.description ?? '',
      groupId: 2,
      askDate: new Date('2022-10-16'),
      studentId: 1,
      teacherId: 1,
      likes: 0,
    };

    this.questionService.create(questionDto).subscribe({
      next: () => {
        this.questionForm.reset();
        this.alertService.success('succefully registered');
        this.getAll();
      },
      error: (error) => {
        this.alertService.error(`error occured; ${error}`);

      },
    });
  };
  ngOnInit(): void {
    this.getAll();
  }
  getAll = () => {
    this.questions$ = this.questionService.get();
  };
}
