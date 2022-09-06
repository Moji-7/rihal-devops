import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportingIntroComponent } from './reporting-intro.component';

describe('ReportingIntroComponent', () => {
  let component: ReportingIntroComponent;
  let fixture: ComponentFixture<ReportingIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportingIntroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReportingIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
