import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCountryInfoComponent } from './add-country-info.component';

describe('AddCountryInfoComponent', () => {
  let component: AddCountryInfoComponent;
  let fixture: ComponentFixture<AddCountryInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCountryInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCountryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
