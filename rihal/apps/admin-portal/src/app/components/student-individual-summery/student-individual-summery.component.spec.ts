import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentIndividualSummeryComponent } from './student-individual-summery.component';

describe('StudentIndividualSummeryComponent', () => {
  let component: StudentIndividualSummeryComponent;
  let fixture: ComponentFixture<StudentIndividualSummeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentIndividualSummeryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentIndividualSummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
