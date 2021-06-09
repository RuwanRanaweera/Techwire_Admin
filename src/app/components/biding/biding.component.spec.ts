import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidingComponent } from './biding.component';

describe('BidingComponent', () => {
  let component: BidingComponent;
  let fixture: ComponentFixture<BidingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
