import {Component, OnInit} from '@angular/core';
import {AddressService} from '../common/address.service';
import {Address} from '../common/address.model';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  countryCodes = ['CA', 'DE', 'FR', 'IT', 'JP', 'RU', 'US', 'UK'];
  selectedCity = 'Peoria';
  addresses: Address[];
  printableAddresses: string[];
  selectedAddress: Address;

  constructor(private addressService: AddressService) {
    this.addresses = this.addressService.getAddresses();
    this.printableAddresses = this.addresses.map(address => {
      return `
        Line 1: ${address.line1}
        Line 2: ${address.line2}
        City: ${address.city}
        State: ${address.state}
        Postal Code: ${address.postalCode}
        Country: ${address.country}
      `
    });
    this.selectedAddress = this.addresses.find(address => address.city === this.selectedCity);
  }

  ngOnInit() {
  }

  isCountryCodeValid(): boolean {
    return this.countryCodes.indexOf(this.selectedAddress.country) !== -1;
  }
}
