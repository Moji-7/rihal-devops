import { Module } from '@nestjs/common';
import { ScraperService } from './scraper.service';
import { HttpModule } from '@nestjs/axios';
@Module({
  imports: [
    HttpModule.register({
      baseURL: 'https://api.digikala.com/v1/categories/',
      timeout: 6000,
      maxRedirects: 5,
    }),
  ],
  providers: [ScraperService],
  exports:[ScraperService]
})
export class ScraperModule {}
