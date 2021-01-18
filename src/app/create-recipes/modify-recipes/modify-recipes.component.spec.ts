import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyRecipesComponent } from './modify-recipes.component';

describe('ModifyRecipesComponent', () => {
  let component: ModifyRecipesComponent;
  let fixture: ComponentFixture<ModifyRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyRecipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
