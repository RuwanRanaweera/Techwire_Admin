import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeeetingComponent } from './meeeting.component';

describe('MeeetingComponent', () => {
  let component: MeeetingComponent;
  let fixture: ComponentFixture<MeeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeeetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
