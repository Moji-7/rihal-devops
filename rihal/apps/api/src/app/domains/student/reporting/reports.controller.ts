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
import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get()
  async fetchAll(@Res() response) {
    const summeryInfoService = await this.reportsService.findAll();
    return response.status(HttpStatus.OK).json({
      summeryInfoService,
    });
  }
}
