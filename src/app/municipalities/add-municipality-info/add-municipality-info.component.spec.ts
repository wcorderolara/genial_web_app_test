import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMunicipalityInfoComponent } from './add-municipality-info.component';

describe('AddMunicipalityInfoComponent', () => {
  let component: AddMunicipalityInfoComponent;
  let fixture: ComponentFixture<AddMunicipalityInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMunicipalityInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMunicipalityInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
