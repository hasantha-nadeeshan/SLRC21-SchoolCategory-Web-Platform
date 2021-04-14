import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInUniComponent } from './sign-in-uni.component';

describe('SignInUniComponent', () => {
  let component: SignInUniComponent;
  let fixture: ComponentFixture<SignInUniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInUniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInUniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
