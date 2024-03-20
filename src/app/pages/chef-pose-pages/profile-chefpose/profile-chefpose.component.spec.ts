import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileChefposeComponent } from './profile-chefpose.component';

describe('ProfileChefposeComponent', () => {
  let component: ProfileChefposeComponent;
  let fixture: ComponentFixture<ProfileChefposeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileChefposeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileChefposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
