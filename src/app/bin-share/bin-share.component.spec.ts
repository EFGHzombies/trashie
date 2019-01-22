import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinShareComponent } from './bin-share.component';

describe('BinShareComponent', () => {
  let component: BinShareComponent;
  let fixture: ComponentFixture<BinShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
