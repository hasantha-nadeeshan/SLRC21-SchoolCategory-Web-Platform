import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotAnimationComponent } from './robot-animation.component';

describe('RobotAnimationComponent', () => {
  let component: RobotAnimationComponent;
  let fixture: ComponentFixture<RobotAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RobotAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
