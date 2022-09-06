import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportingSummeryComponent } from './reporting-summery.component';

describe('ReportingSummeryComponent', () => {
  let component: ReportingSummeryComponent;
  let fixture: ComponentFixture<ReportingSummeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportingSummeryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReportingSummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
