import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderTripCardComponent } from './placeholder-trip-card.component';

describe('PlaceholderTripCardComponent', () => {
  let component: PlaceholderTripCardComponent;
  let fixture: ComponentFixture<PlaceholderTripCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceholderTripCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceholderTripCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
