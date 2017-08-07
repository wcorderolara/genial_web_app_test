import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubDivisionComponent } from './create-sub-division.component';

describe('CreateSubDivisionComponent', () => {
  let component: CreateSubDivisionComponent;
  let fixture: ComponentFixture<CreateSubDivisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSubDivisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSubDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
