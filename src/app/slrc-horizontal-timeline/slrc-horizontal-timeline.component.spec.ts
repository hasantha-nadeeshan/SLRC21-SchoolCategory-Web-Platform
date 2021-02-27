import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SLRCHorizontalTimelineComponent } from './slrc-horizontal-timeline.component';

describe('SLRCHorizontalTimelineComponent', () => {
  let component: SLRCHorizontalTimelineComponent;
  let fixture: ComponentFixture<SLRCHorizontalTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SLRCHorizontalTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SLRCHorizontalTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
