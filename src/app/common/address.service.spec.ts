import {AddressService} from './address.service';
import {Address} from './address.model';

describe('AddressService', () => {
  let service: AddressService;

  beforeEach(() => {
    service = new AddressService();
  });

  it('should return addresses', () => {
    const addresses: Address[] = [
      {
        id: '1',
        line1: 'First Line',
        line2: 'Second Line',
        city: 'Peoria',
        state: 'AZ',
        postalCode: '90210',
        country: 'US'
      }
    ];

    service.addresses = addresses;
    expect(service.getAddresses()).toBe(addresses);
  });
});


