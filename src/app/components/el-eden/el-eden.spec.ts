import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElEden } from './el-eden';

describe('ElEden', () => {
  let component: ElEden;
  let fixture: ComponentFixture<ElEden>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElEden],
    }).compileComponents();

    fixture = TestBed.createComponent(ElEden);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
