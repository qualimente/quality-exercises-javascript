import { Injectable } from '@angular/core';
import {Address} from './address.model';

const countryCodes = ['CA', 'DE', 'FR', 'IT', 'JP', 'RU', 'US', 'UK'];

@Injectable()
export class AddressValidatorService {

  constructor() { }

  isCountryCodeValid(address: Address): boolean {
    return countryCodes.indexOf(address.country) !== -1;
  }
}
