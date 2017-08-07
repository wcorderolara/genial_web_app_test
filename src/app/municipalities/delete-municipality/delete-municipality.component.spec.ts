import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMunicipalityComponent } from './delete-municipality.component';

describe('DeleteMunicipalityComponent', () => {
  let component: DeleteMunicipalityComponent;
  let fixture: ComponentFixture<DeleteMunicipalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteMunicipalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMunicipalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
