import { Body, Controller, Get, Logger, Post, Query } from '@nestjs/common';

import { Question } from './question.entity';
import { QuestionService } from './Question.service';


@Controller('question')
export class QuestionController {
  constructor(private questionService: QuestionService) {}

  @Get('all')
  async getQuestion(@Query('groupId') groupId: number) {
     return await this.questionService.getQuestion();
  }

  @Post("create")
  async add(@Body() question: Question) {
    Logger.log(question)
    return await this.questionService.add(question);
  }
}
