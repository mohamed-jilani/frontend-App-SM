import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationChefposeComponent } from './reclamation-chefpose.component';

describe('ReclamationChefposeComponent', () => {
  let component: ReclamationChefposeComponent;
  let fixture: ComponentFixture<ReclamationChefposeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReclamationChefposeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReclamationChefposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
