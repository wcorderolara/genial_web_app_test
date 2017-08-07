import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubDivisionInfoComponent } from './add-sub-division-info.component';

describe('AddSubDivisionInfoComponent', () => {
  let component: AddSubDivisionInfoComponent;
  let fixture: ComponentFixture<AddSubDivisionInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSubDivisionInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubDivisionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
