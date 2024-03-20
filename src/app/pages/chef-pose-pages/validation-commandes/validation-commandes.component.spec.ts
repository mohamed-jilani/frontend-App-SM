import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationCommandesComponent } from './validation-commandes.component';

describe('ValidationCommandesComponent', () => {
  let component: ValidationCommandesComponent;
  let fixture: ComponentFixture<ValidationCommandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValidationCommandesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidationCommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
