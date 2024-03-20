import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCommercantComponent } from './dashboard-commercant.component';

describe('DashboardCommercantComponent', () => {
  let component: DashboardCommercantComponent;
  let fixture: ComponentFixture<DashboardCommercantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardCommercantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardCommercantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
