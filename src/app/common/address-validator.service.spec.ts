import {AddressValidatorService} from './address-validator.service';
import {Address} from './address.model';

describe('AddressValidatorService', () => {
  let service: AddressValidatorService;

  beforeEach(() => { service = new AddressValidatorService(); });

  it('should determine if address country is valid', () => {
    const address: Address = {
      id: '1',
      line1: 'First Line',
      line2: 'Second Line',
      city: 'Peoria',
      state: 'AZ',
      postalCode: '90210',
      country: 'SA'
    };

    expect(service.isCountryCodeValid(address)).toBeFalsy();

    address.country = 'US';

    expect(service.isCountryCodeValid(address)).toBeTruthy();
  });
});
