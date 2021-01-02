import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpageComponent } from './rpage.component';

describe('RpageComponent', () => {
  let component: RpageComponent;
  let fixture: ComponentFixture<RpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
