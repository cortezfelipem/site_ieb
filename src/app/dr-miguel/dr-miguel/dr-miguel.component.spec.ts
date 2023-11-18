import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrMiguelComponent } from './dr-miguel.component';

describe('DrMiguelComponent', () => {
  let component: DrMiguelComponent;
  let fixture: ComponentFixture<DrMiguelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrMiguelComponent]
    });
    fixture = TestBed.createComponent(DrMiguelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
