import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniLeaderboardComponent } from './uni-leaderboard.component';

describe('UniLeaderboardComponent', () => {
  let component: UniLeaderboardComponent;
  let fixture: ComponentFixture<UniLeaderboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniLeaderboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
