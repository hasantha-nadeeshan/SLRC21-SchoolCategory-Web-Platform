import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlrcTimelineComponent } from './slrc-timeline.component';

describe('SlrcTimelineComponent', () => {
  let component: SlrcTimelineComponent;
  let fixture: ComponentFixture<SlrcTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlrcTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlrcTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
