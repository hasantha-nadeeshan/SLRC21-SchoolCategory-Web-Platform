import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorsBannersComponent } from './sponsors-banners.component';

describe('SponsorsBannersComponent', () => {
  let component: SponsorsBannersComponent;
  let fixture: ComponentFixture<SponsorsBannersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsorsBannersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorsBannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
