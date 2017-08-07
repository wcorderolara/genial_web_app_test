import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSubDivisionInfoComponent } from './update-sub-division-info.component';

describe('UpdateSubDivisionInfoComponent', () => {
  let component: UpdateSubDivisionInfoComponent;
  let fixture: ComponentFixture<UpdateSubDivisionInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSubDivisionInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSubDivisionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
