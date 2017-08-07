import { TestBed, inject } from '@angular/core/testing';

import { MunicipalityInfoService } from './municipality-info.service';

describe('MunicipalityInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MunicipalityInfoService]
    });
  });

  it('should be created', inject([MunicipalityInfoService], (service: MunicipalityInfoService) => {
    expect(service).toBeTruthy();
  }));
});
