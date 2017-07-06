import { Injectable } from '@angular/core';
import {Address} from './address.model';

@Injectable()
export class AddressValidatorService {
  constructor() { }

  isCountryCodeValid(address: Address): boolean {
    const countryCodes = ['CA', 'DE', 'FR', 'IT', 'JP', 'RU', 'US', 'UK'];
    return countryCodes.indexOf(address.country) !== -1;
  }
}
