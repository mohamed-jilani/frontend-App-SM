import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCommercantComponent } from './profile-commercant.component';

describe('ProfileCommercantComponent', () => {
  let component: ProfileCommercantComponent;
  let fixture: ComponentFixture<ProfileCommercantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileCommercantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileCommercantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
