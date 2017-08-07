import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSubDivisionComponent } from './delete-sub-division.component';

describe('DeleteSubDivisionComponent', () => {
  let component: DeleteSubDivisionComponent;
  let fixture: ComponentFixture<DeleteSubDivisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteSubDivisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSubDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
