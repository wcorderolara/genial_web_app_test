import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMunicipalityComponent } from './update-municipality.component';

describe('UpdateMunicipalityComponent', () => {
  let component: UpdateMunicipalityComponent;
  let fixture: ComponentFixture<UpdateMunicipalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMunicipalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMunicipalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
