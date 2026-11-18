import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaCaida } from './la-caida';

describe('LaCaida', () => {
  let component: LaCaida;
  let fixture: ComponentFixture<LaCaida>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaCaida],
    }).compileComponents();

    fixture = TestBed.createComponent(LaCaida);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
