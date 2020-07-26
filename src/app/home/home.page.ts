import { Component } from '@angular/core';
import { Address } from '../address';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  selectedAddress: Address = {
    addressLine1:'my home',
    city:'Ghaziabad',
    state:'UP',
    zipCode:'20101',
    lattitude: 27.2038,
    longitude: 77.5011
  };

  constructor() {}

}
