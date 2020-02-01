import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSideComponent } from './no-side.component';

describe('NoSideComponent', () => {
  let component: NoSideComponent;
  let fixture: ComponentFixture<NoSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
