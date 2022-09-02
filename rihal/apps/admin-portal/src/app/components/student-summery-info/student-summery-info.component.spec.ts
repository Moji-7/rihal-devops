import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSummeryInfoComponent } from './student-summery-info.component';

describe('StudentSummeryInfoComponent', () => {
  let component: StudentSummeryInfoComponent;
  let fixture: ComponentFixture<StudentSummeryInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentSummeryInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentSummeryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
