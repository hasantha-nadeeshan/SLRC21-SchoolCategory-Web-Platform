import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlrcHrTimelineComponent } from './slrc-hr-timeline.component';

describe('SlrcHrTimelineComponent', () => {
  let component: SlrcHrTimelineComponent;
  let fixture: ComponentFixture<SlrcHrTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlrcHrTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlrcHrTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
