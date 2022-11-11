import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerLimiterComponent } from './timer-limiter.component';

describe('TimerLimiterComponent', () => {
  let component: TimerLimiterComponent;
  let fixture: ComponentFixture<TimerLimiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerLimiterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimerLimiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
