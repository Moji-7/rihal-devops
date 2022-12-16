import {
  ComponentFixture,
  ComponentFixtureAutoDetect,
  TestBed,
  tick,
} from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CallerService } from './services/caller.service';
import { Observable, of } from 'rxjs';
import { resultDto } from './models/result.dto';
import { HttpClientModule } from '@angular/common/http';
import { assert } from 'console';
const quotes$: Observable<string[]> = of([
  'TEST Be happy',
  'TEST Be optemistic',
]);
export class MoqCallerSerive extends CallerService {
  private resultDto$: Observable<resultDto> = of({ name: 'Neda MNY' });

  override getAll = () => {
    return this.resultDto$;
  };
  override getQuote = (personName: string): Observable<string[]> => {
    return quotes$;
  };
}

//const mock = jest.spyOn(CallerService,'getQuote');

const mockService = {
  getAll: jest.fn().mockReturnValue(null),
  getQuote: jest.fn().mockReturnValue(quotes$),
};
describe('AppComponent', () => {
  let appComponent: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let _callerService: CallerService;

  //const _callerServiceSpy = jest.spyOn(TestBed.inject(CallerService), 'getQuote')
  beforeEach(async () => {
    //const providerSpy = jest.spyOn(_callerService, 'getQuote').mockReturnValue(quotes$);

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [AppComponent, NxWelcomeComponent],
      providers: [
        { provide: CallerService, useClass: MoqCallerSerive },
        // { provide: CallerService, useValue: mockService },
        { provide: ComponentFixtureAutoDetect, useValue: true },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('have async title', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const myComp = fixture.componentInstance;
    fixture.detectChanges();
    // let title$ = Observable<resultDto>;

    //jest.spyOn(CallerService,"getAll").mockResolvedValue(of<resultDto>)

    const h1 = fixture.nativeElement.querySelector('h1');
    expect(
      myComp.title$.subscribe((res) => {
        console.log(res);
        fixture.detectChanges();
        // expect (res.name).toContain("Neda")
        expect(h1.textContent).toContain('Nedha');
      })
    );
  });
  it('it should return with stub as same', async () => {
    appComponent.title$.subscribe((res) => {
      expect(res.name).toContain('Neda');
    });
  });

  it('quote all testing html all service spyed and injecthe with value', async () => {
    fixture.detectChanges();
    const ul = fixture.nativeElement.querySelector('li');

    console.log(
      ul.textContent + ': wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww'
    );

    const spy = jest.spyOn(_callerService, 'getQuote').mockReturnValue(quotes$);

    // fixture = TestBed.createComponent(AppComponent);
    // appComponent = fixture.componentInstance;
    // fixture.detectChanges();

    appComponent.title$.subscribe((res) => {
      console.log(res);
    });
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Welcome frontend-me'
    );
  });
});
