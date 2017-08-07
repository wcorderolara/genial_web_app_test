import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMunicipalityInfoComponent } from './update-municipality-info.component';

describe('UpdateMunicipalityInfoComponent', () => {
  let component: UpdateMunicipalityInfoComponent;
  let fixture: ComponentFixture<UpdateMunicipalityInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMunicipalityInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMunicipalityInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
