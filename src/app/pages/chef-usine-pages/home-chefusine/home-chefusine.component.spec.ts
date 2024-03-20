import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChefusineComponent } from './home-chefusine.component';

describe('HomeChefusineComponent', () => {
  let component: HomeChefusineComponent;
  let fixture: ComponentFixture<HomeChefusineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeChefusineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeChefusineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
