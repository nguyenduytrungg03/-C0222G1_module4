import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCountdownTimeAppComponent } from './angular-countdown-time-app.component';

describe('AngularCountdownTimeAppComponent', () => {
  let component: AngularCountdownTimeAppComponent;
  let fixture: ComponentFixture<AngularCountdownTimeAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularCountdownTimeAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularCountdownTimeAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
