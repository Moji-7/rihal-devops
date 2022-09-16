import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  NotFoundException,
  Param,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { StudentSummeryInfo } from '@rihal/data-models';
import { RihalLoggerService } from '../../logger/rihal-logger.service';

import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {
  constructor(
    private readonly reportsService: ReportsService,
    private myLogger: RihalLoggerService
  ) {
    this.myLogger.setContext('ReportsController');
  }

  @Get('ageAverage')
  @ApiOperation({ summary: 'for get count of students per year of birth' })
  @ApiResponse({ status: 200, description: '' })
  async averageStudentsAge(): Promise<StudentSummeryInfo[]> {
    const summeryInfoService = await this.reportsService.averageStudentsAge();
    return summeryInfoService;
    // const average = summeryInfoService.reduce(function (avg, value, _, { length }) {
    //   return avg + value.year / length ;
    // return {title:avg + value.year / length , count:length};
    //  }, 0);
    //this.myLogger.customLog();this.myLogger.warn('About to return cats!');
    //throw new HttpException('This is not acceptable', HttpStatus.NOT_ACCEPTABLE);
  }

  @Get('/:relatedEntity')
  @ApiOperation({
    summary:
      'for get count of students per each input entity(classes,countries)',
  })
  @ApiResponse({ status: 200, description: '' })
  async fetchCountBy(
    @Param('relatedEntity') relatedEntity: string,
    studentId: number
  ): Promise<StudentSummeryInfo[]> {
    const summeryInfoService = await this.reportsService.fetchCountBy(
      relatedEntity,
      studentId
    );
    return summeryInfoService;
  }
}
