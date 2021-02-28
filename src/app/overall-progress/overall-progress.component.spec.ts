import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallProgressComponent } from './overall-progress.component';

describe('OverallProgressComponent', () => {
  let component: OverallProgressComponent;
  let fixture: ComponentFixture<OverallProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
