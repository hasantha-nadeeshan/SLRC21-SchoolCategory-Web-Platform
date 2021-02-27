import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyTasksComponent } from './easy-tasks.component';

describe('EasyTasksComponent', () => {
  let component: EasyTasksComponent;
  let fixture: ComponentFixture<EasyTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EasyTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
