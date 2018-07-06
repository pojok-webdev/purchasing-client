import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionDetaileditComponent } from './submission-detailedit.component';

describe('SubmissionDetaileditComponent', () => {
  let component: SubmissionDetaileditComponent;
  let fixture: ComponentFixture<SubmissionDetaileditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionDetaileditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionDetaileditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
