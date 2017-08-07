import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSubDivisionComponent } from './detail-sub-division.component';

describe('DetailSubDivisionComponent', () => {
  let component: DetailSubDivisionComponent;
  let fixture: ComponentFixture<DetailSubDivisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSubDivisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSubDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
