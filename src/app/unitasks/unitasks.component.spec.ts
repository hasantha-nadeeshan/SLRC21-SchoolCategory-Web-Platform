import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitasksComponent } from './unitasks.component';

describe('UnitasksComponent', () => {
  let component: UnitasksComponent;
  let fixture: ComponentFixture<UnitasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
