import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegisterButtonsComponent } from './login-register-buttons.component';

describe('LoginRegisterButtonsComponent', () => {
  let component: LoginRegisterButtonsComponent;
  let fixture: ComponentFixture<LoginRegisterButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginRegisterButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginRegisterButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
