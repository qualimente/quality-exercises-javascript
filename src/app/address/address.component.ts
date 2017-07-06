import {Component, OnInit} from '@angular/core';
import {AddressService} from '../common/address.service';
import {Address} from '../common/address.model';
import {AddressValidatorService} from '../common/address-validator.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  selectedCity = 'Peoria';
  addresses: Address[];
  printableAddresses: string[];
  selectedAddress: Address;

  constructor(private addressService: AddressService,
              private addressValidator: AddressValidatorService) { }

  ngOnInit() {
    this.addresses = this.addressService.getAddresses();
    this.printableAddresses = this.addresses.map(address => this.makePrintableAddress(address));
    this.selectedAddress = this.addresses.find(address => this.shouldSelectAddress(address, this.selectedCity));
  }

  makePrintableAddress(address: Address): string {
    return `
        Line 1: ${address.line1}
        Line 2: ${address.line2}
        City: ${address.city}
        State: ${address.state}
        Postal Code: ${address.postalCode}
        Country: ${address.country}
      `;
  }

  shouldSelectAddress(address: Address, city: string): boolean {
    return address.city === city;
  }

  isCountryCodeValid(address: Address): boolean {
    return this.addressValidator.isCountryCodeValid(address);
  }
}
