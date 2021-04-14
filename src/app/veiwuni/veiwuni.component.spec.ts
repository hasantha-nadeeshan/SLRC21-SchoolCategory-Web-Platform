import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiwuniComponent } from './veiwuni.component';

describe('VeiwuniComponent', () => {
  let component: VeiwuniComponent;
  let fixture: ComponentFixture<VeiwuniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiwuniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiwuniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
