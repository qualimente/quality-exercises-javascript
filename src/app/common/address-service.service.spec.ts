import { TestBed, inject } from '@angular/core/testing';

import { AddressServiceService } from './address-service.service';

describe('AddressServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddressServiceService]
    });
  });

  it('should be created', inject([AddressServiceService], (service: AddressServiceService) => {
    expect(service).toBeTruthy();
  }));
});
