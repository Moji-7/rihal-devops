import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ReportingSummeryComponent } from './reporting-summery.component';
import { ReportService } from '../../services/student/report.service';
import { of } from 'rxjs';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ReportingSummeryComponent', () => {
  let component: ReportingSummeryComponent;
  let fixture: ComponentFixture<ReportingSummeryComponent>;
  let reportService: ReportService;
  let httpTestingController: HttpTestingController;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportingSummeryComponent],
      imports: [HttpClientTestingModule],
      providers: [ReportService],
    }).compileComponents();
    //inject snd instantiating
    reportService = TestBed.inject(ReportService);
    httpTestingController = TestBed.inject(HttpTestingController);
    //fixture component
    fixture = TestBed.createComponent(ReportingSummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('can test HttpClient.get', () => {
    const data = [1, 2, 3];
    // approach 1; test with angular TestBed
    reportService.averageStudentsAge.subscribe((response) => {
      expect(response).toBe(data);
      expect(response).toEqual(data);
    });

    // test with only jest ( no TestBed) ==>faster
    jest
      .spyOn(reportService, 'averageStudentsAge')
      .mockReturnValue(of([{ name: 'Foo' }, { name: 'Bar' }]));

    expect(reportService.averageStudentsAge).toHaveBeenCalled();
    expect(reportService.averageStudentsAge()).toHaveLength(1);
    expect(data).toEqual(item);

    const req = httpTestingController.expectOne('/api/data');
    expect(req.request.method).toBe('GET');

    req.flush(data);
  });

  describe('Render', () => {
    it('show all the favorite movies', () => {
      const movieElements = fixture.debugElement.queryAll(By.css('.movie'));
      expect(movieElements.length).toBe(favoriteMoviesToUse.length);
    });

    it('should show the movie titles', () => {
      const movieElements = fixture.debugElement.queryAll(By.css('.movie'));
      movieElements.forEach((movieElement: DebugElement, index) => {
        expect(movieElement.nativeElement.innerHTML).toContain(
          favoriteMoviesToUse[index].title
        );
      });
    });
  });
  afterEach(() => httpTestingController.verify());
});
const recipeServiceMock: RecipeService = {
  getRecipes: () => [],
};
