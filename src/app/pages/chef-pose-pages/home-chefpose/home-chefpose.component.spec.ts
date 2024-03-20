import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChefposeComponent } from './home-chefpose.component';

describe('HomeChefposeComponent', () => {
  let component: HomeChefposeComponent;
  let fixture: ComponentFixture<HomeChefposeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeChefposeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeChefposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
