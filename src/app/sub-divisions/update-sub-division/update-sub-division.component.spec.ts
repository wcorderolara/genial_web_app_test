import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSubDivisionComponent } from './update-sub-division.component';

describe('UpdateSubDivisionComponent', () => {
  let component: UpdateSubDivisionComponent;
  let fixture: ComponentFixture<UpdateSubDivisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSubDivisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSubDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
