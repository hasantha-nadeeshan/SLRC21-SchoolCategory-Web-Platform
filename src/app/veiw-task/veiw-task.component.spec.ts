import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiwTaskComponent } from './veiw-task.component';

describe('VeiwTaskComponent', () => {
  let component: VeiwTaskComponent;
  let fixture: ComponentFixture<VeiwTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiwTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiwTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
