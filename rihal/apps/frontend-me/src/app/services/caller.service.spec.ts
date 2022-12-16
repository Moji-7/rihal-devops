import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { resultDto } from '../models/result.dto';

import { CallerService } from './caller.service';

const quotes$: Observable<string[]> = of([
  'TEST Be happy',
  'TEST Be optemistic',
]);
export class MoqCallerSerive {
  private resultDto$: Observable<resultDto> = of({ name: 'Neda MNY' });

  getAll = () => {
    return this.resultDto$;
  };
  getQuote = (personName: string): Observable<string[]> => {
    return quotes$;
  };
}
describe('CallerService', () => {
  let service: CallerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: CallerService, useClass: MoqCallerSerive }],
    });
    service = TestBed.inject(CallerService);
  });

  it('should be created', () => {
    // expect(service).toBeTruthy();
    service.getQuote('').subscribe((res) => {
      expect(res).toHaveLength(2);
    });
  });


});
