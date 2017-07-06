import {Injectable} from '@angular/core';
import {Address} from './address.model';

const initialAddresses: Address[] = [
  {id: '1', line1: 'First Line', line2: 'Second Line', city: 'Peoria', state: 'AZ', postalCode: '90210', country: 'US'},
  {id: '2', line1: 'First Line', line2: 'Second Line', city: 'Mesa', state: 'AZ', postalCode: '90210', country: 'US'},
  {id: '3', line1: 'First Line', line2: 'Second Line', city: 'Sedona', state: 'AZ', postalCode: '90210', country: 'US'}
];

@Injectable()
export class AddressService {

  addresses: Address[] = initialAddresses;

  constructor() {
  }

  getAddresses(): Address[] {
    return this.addresses;
  }

  addAddress(address: Address) {
    this.addresses = [...this.addresses, address];
  }

  updateAddress(address: Address) {
    this.addresses = this.addresses.map(a => address.id !== a.id ? a : Object.assign({}, address));
  }

  removeAddress(address: Address) {
    this.addresses = this.addresses.filter(a => address.id !== a.id);
  }
}
