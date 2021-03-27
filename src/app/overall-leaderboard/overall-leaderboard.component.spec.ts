import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallLeaderboardComponent } from './overall-leaderboard.component';

describe('OverallLeaderboardComponent', () => {
  let component: OverallLeaderboardComponent;
  let fixture: ComponentFixture<OverallLeaderboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallLeaderboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
