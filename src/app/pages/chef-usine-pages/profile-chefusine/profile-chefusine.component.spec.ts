import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileChefusineComponent } from './profile-chefusine.component';

describe('ProfileChefusineComponent', () => {
  let component: ProfileChefusineComponent;
  let fixture: ComponentFixture<ProfileChefusineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileChefusineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileChefusineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
