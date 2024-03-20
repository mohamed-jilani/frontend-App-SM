import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeUsineComponent } from './commande-usine.component';

describe('CommandeUsineComponent', () => {
  let component: CommandeUsineComponent;
  let fixture: ComponentFixture<CommandeUsineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommandeUsineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommandeUsineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
