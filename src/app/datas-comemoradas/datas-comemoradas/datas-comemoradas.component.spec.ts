import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasComemoradasComponent } from './datas-comemoradas.component';

describe('DatasComemoradasComponent', () => {
  let component: DatasComemoradasComponent;
  let fixture: ComponentFixture<DatasComemoradasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatasComemoradasComponent]
    });
    fixture = TestBed.createComponent(DatasComemoradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
