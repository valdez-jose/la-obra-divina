import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Restauracion } from './restauracion';

describe('Restauracion', () => {
  let component: Restauracion;
  let fixture: ComponentFixture<Restauracion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Restauracion],
    }).compileComponents();

    fixture = TestBed.createComponent(Restauracion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
