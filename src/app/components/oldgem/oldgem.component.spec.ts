import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldgemComponent } from './oldgem.component';

describe('OldgemComponent', () => {
  let component: OldgemComponent;
  let fixture: ComponentFixture<OldgemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldgemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldgemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
