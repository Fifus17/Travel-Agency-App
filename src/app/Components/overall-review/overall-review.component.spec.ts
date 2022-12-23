import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallReviewComponent } from './overall-review.component';

describe('OverallReviewComponent', () => {
  let component: OverallReviewComponent;
  let fixture: ComponentFixture<OverallReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverallReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
