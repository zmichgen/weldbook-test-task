import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjstaskComponent } from './rxjstask.component';

describe('RxjstaskComponent', () => {
  let component: RxjstaskComponent;
  let fixture: ComponentFixture<RxjstaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjstaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjstaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
