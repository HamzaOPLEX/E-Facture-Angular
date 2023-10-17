import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-billing-form',
  templateUrl: './billing-form.component.html',
  styleUrls: ['./billing-form.component.scss']
})
export class BillingFormComponent {
  @Input() public TYPE: string;

  user = { username: 'JohnDoe' };
  newFactureNumber = 123;
  todayDate = '2023-10-12';
  selectBody = [
    { id: 1, name: 'Client A' },
    { id: 2, name: 'Client B' }
  ];
  selectProductBody = [
    { id: 1, name: 'Product A' },
    { id: 2, name: 'Product B' }
  ];

  newQs: number = 5; // Example Qs value
  newPU: number = 10; // Example PU value

  newProductName: string = 'New Product'; // Example product name
  newClientName: string = 'New Client'; // Example client name
  newICE: string = '1234567890'; // Example ICE
  newCity: string = 'New City'; // Example city

  selectedClient: number = this.selectBody[0].id; // Set default selected client ID
  selectedProduct: number = this.selectProductBody[0].id; // Set default selected product ID
  selectedEditProduct: number = this.selectProductBody[1].id; // Set default selected product ID for editing
  onFormChange() {
    console.log('Form Changes')
  }
}
