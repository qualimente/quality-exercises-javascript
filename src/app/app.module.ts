import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AddressComponent} from './address/address.component';
import {AddressService} from './common/address.service';
import {AddressValidatorService} from './common/address-validator.service';

@NgModule({
  declarations: [
    AppComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AddressService, AddressValidatorService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
