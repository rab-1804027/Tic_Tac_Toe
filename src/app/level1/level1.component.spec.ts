import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Level1Component } from './level1.component';

describe('Level1Component', () => {
  let component: Level1Component;
  let fixture: ComponentFixture<Level1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Level1Component]
    });
    fixture = TestBed.createComponent(Level1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
