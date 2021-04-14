import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnioverallComponent } from './unioverall.component';

describe('UnioverallComponent', () => {
  let component: UnioverallComponent;
  let fixture: ComponentFixture<UnioverallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnioverallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnioverallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
