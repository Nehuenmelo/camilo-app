import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TartasComponent } from './tartas.component';

describe('TartasComponent', () => {
  let component: TartasComponent;
  let fixture: ComponentFixture<TartasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TartasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TartasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
