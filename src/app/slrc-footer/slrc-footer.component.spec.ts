import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlrcFooterComponent } from './slrc-footer.component';

describe('SlrcFooterComponent', () => {
  let component: SlrcFooterComponent;
  let fixture: ComponentFixture<SlrcFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlrcFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlrcFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
