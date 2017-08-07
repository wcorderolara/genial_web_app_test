import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubDivisionDetailComponent } from './sub-division-detail.component';

describe('SubDivisionDetailComponent', () => {
  let component: SubDivisionDetailComponent;
  let fixture: ComponentFixture<SubDivisionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubDivisionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubDivisionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
