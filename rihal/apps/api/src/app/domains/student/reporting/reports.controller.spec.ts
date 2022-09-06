import { Test, TestingModule } from '@nestjs/testing';

import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';

describe('reportsController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [ReportsController],
      providers: [ReportsService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "student group by input value"', () => {
      const groupBy:string="";
      const studentId?:string|null;
      const reportsController = app.get<ReportsController>(ReportsController);
      expect(reportsController.fetchAll(groupBy,studentId)).toEqual({ message: 'Welcome to api!' });
    });
  });
});
