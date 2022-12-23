import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveTripComponent } from './remove-trip.component';

describe('RemoveTripComponent', () => {
  let component: RemoveTripComponent;
  let fixture: ComponentFixture<RemoveTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveTripComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
