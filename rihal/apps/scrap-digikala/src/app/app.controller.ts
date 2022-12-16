import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { ScraperService } from '../scraper/scraper.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService
  , private readonly scraperService: ScraperService
    ) {}


  @Get()
  getData() {
    return this.appService.getData();
  }
  @Get('healthCheck')
  public async healthCheck() {
    const obj = await this.scraperService.mapNeedItems('girls-hoodies//search/?page=1');
    console.log(obj);
  }
}
