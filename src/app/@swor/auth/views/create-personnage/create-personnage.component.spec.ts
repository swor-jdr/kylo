import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePersonnageComponent } from './create-personnage.component';

describe('CreatePersonnageComponent', () => {
  let component: CreatePersonnageComponent;
  let fixture: ComponentFixture<CreatePersonnageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePersonnageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePersonnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
