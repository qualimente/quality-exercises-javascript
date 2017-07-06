import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressComponent } from './address.component';
import {AddressService} from '../common/address.service';
import {AddressValidatorService} from '../common/address-validator.service';
import {Address} from '../common/address.model';

describe('AddressComponent', () => {
  let component: AddressComponent;
  let fixture: ComponentFixture<AddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddressComponent],
      providers: [
        AddressService,
        AddressValidatorService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should make a printable address', () => {
    const address: Address = {
      id: '1',
      line1: 'First Line',
      line2: 'Second Line',
      city: 'Peoria',
      state: 'AZ',
      postalCode: '90210',
      country: 'US'
    };
    const printableAddress = `
        Line 1: First Line
        Line 2: Second Line
        City: Peoria
        State: AZ
        Postal Code: 90210
        Country: US
      `;

    expect(component.makePrintableAddress(address)).toEqual(printableAddress);
  });

  it('should determine if current address', () => {
    const address: Address = {
      id: '1',
      line1: 'First Line',
      line2: 'Second Line',
      city: 'Peoria',
      state: 'AZ',
      postalCode: '90210',
      country: 'US'
    };

    expect(component.shouldSelectAddress(address, 'Payson')).toBeFalsy();
    expect(component.shouldSelectAddress(address, 'Peoria')).toBeTruthy();
  });
});
