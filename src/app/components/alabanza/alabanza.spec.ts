import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alabanza } from './alabanza';

describe('Alabanza', () => {
  let component: Alabanza;
  let fixture: ComponentFixture<Alabanza>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alabanza],
    }).compileComponents();

    fixture = TestBed.createComponent(Alabanza);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
