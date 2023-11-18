import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevIsraelComponent } from './rev-israel.component';

describe('RevIsraelComponent', () => {
  let component: RevIsraelComponent;
  let fixture: ComponentFixture<RevIsraelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RevIsraelComponent]
    });
    fixture = TestBed.createComponent(RevIsraelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
