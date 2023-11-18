import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CultosPropagandaComponent } from './cultos-propaganda.component';

describe('CultosPropagandaComponent', () => {
  let component: CultosPropagandaComponent;
  let fixture: ComponentFixture<CultosPropagandaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CultosPropagandaComponent]
    });
    fixture = TestBed.createComponent(CultosPropagandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
