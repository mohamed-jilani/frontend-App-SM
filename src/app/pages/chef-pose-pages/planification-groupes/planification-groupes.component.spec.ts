import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanificationGroupesComponent } from './planification-groupes.component';

describe('PlanificationGroupesComponent', () => {
  let component: PlanificationGroupesComponent;
  let fixture: ComponentFixture<PlanificationGroupesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanificationGroupesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanificationGroupesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
