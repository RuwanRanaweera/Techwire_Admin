import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldmeetComponent } from './oldmeet.component';

describe('OldmeetComponent', () => {
  let component: OldmeetComponent;
  let fixture: ComponentFixture<OldmeetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldmeetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldmeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
