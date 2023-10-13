import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-facture-create',
  templateUrl: './facture-create.component.html',
  styleUrls: ['./facture-create.component.scss']
})
export class FactureCreateComponent {


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

  newPT: number = this.calculatePT(); // Calculate PT based on initial values
  selectedClient: number = this.selectBody[0].id; // Set default selected client ID
  selectedProduct: number = this.selectProductBody[0].id; // Set default selected product ID
  selectedEditProduct: number = this.selectProductBody[1].id; // Set default selected product ID for editing
  editQs: number = 3; // Example Qs value for editing
  editPU: number = 7; // Example PU value for editing
  editPT: number = this.CalculatePTedit(); // Calculate PT based on initial values for editing

  calculatePT(): number {
    return this.newQs * this.newPU;
  }

  CalculatePTedit(): number {
    return this.editQs * this.editPU;
  }

  AddNewClient() {
    // Add your code here for adding a new client
  }

  ValidInputNotEmpty(type: string) {
    // Add your code here for validating input
  }
}
