import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { StudentSummeryInfo } from '@rihal/data-models';
import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}


    @Get('/:joinTable')
    async fetchCountBy(@Param('joinTable') joinTable:string,studentId:number):Promise<StudentSummeryInfo[]> {
    const summeryInfoService = await this.reportsService.fetchCountBy(joinTable,studentId);
        return summeryInfoService;
    }

    @Get('')
    async averageStudentsAge():Promise<number> {
    const summeryInfoService = await this.reportsService.averageStudentsAge();
    const average = summeryInfoService.reduce(function (avg, value, _, { length }) {
        return avg + value.year / length ;
        // return {title:avg + value.year / length , count:length};
    }, 0);
        return parseInt(average.toString());
    }
}
