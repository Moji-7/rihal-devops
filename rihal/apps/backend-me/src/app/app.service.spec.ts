import { Test } from '@nestjs/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getData', () => {
    //const spy= jest.spyOn(service,'getData').mockReturnValue({message:"Welcome to backend-me!"});
    //const called=service.getData(1);
    it('should return "Welcome to backend-me!"', () => {
      expect(service.getData(1)).toEqual({ message: 'Welcome to backend-me!' });
    });
  });
});
