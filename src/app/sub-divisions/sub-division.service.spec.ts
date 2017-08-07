import { TestBed, inject } from '@angular/core/testing';

import { SubDivisionService } from './sub-division.service';

describe('SubDivisionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubDivisionService]
    });
  });

  it('should be created', inject([SubDivisionService], (service: SubDivisionService) => {
    expect(service).toBeTruthy();
  }));
});
