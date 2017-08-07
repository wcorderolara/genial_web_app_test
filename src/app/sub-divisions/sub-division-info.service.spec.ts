import { TestBed, inject } from '@angular/core/testing';

import { SubDivisionInfoService } from './sub-division-info.service';

describe('SubDivisionInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubDivisionInfoService]
    });
  });

  it('should be created', inject([SubDivisionInfoService], (service: SubDivisionInfoService) => {
    expect(service).toBeTruthy();
  }));
});
