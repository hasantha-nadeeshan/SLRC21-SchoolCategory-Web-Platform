import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgTimelineComponent } from './svg-timeline.component';

describe('SvgTimelineComponent', () => {
  let component: SvgTimelineComponent;
  let fixture: ComponentFixture<SvgTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
