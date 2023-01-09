import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudinesComponent } from './budines.component';

describe('BudinesComponent', () => {
  let component: BudinesComponent;
  let fixture: ComponentFixture<BudinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
