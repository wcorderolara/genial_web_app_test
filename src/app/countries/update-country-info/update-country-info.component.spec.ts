import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCountryInfoComponent } from './update-country-info.component';

describe('UpdateCountryInfoComponent', () => {
  let component: UpdateCountryInfoComponent;
  let fixture: ComponentFixture<UpdateCountryInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCountryInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCountryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
