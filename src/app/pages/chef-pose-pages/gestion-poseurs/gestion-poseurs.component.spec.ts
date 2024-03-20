import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPoseursComponent } from './gestion-poseurs.component';

describe('GestionPoseursComponent', () => {
  let component: GestionPoseursComponent;
  let fixture: ComponentFixture<GestionPoseursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestionPoseursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionPoseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
