import { TestBed, inject } from '@angular/core/testing';

import { CountryInfoService } from './country-info.service';

describe('CountryInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountryInfoService]
    });
  });

  it('should be created', inject([CountryInfoService], (service: CountryInfoService) => {
    expect(service).toBeTruthy();
  }));
});
