import { Component } from '@angular/core';

@Component({
  selector: 'app-devis-edit',
  templateUrl: './devis-edit.component.html',
  styleUrls: ['./devis-edit.component.scss']
})
export class DevisEditComponent {
  messages: string[] = ["Message 1", "Message 2", "Message 3"]; // Fake messages for testing

  // Function for Adding New Facture Item Modal
  AddNewFactureItemModalHandler() {
    // Add your logic for handling the "Add New Facture Item" modal here
    console.log("Adding new facture item...");
  }

  // Function for Calculating PT
  CalculatePT() {
    // Add your logic for calculating PT here
    console.log("Calculating PT...");
  }

  // Function for Handling Selected Product
  GetSelectedProductThenSet() {
    // Add your logic for handling selected product here
    console.log("Selected product changed...");
  }

  // Function for Handling Input and Setting Select Options
  GetInputAndSet2Select(element: string, index: number) {
    // Add your logic for handling input and setting select options here
    console.log(`Input changed in element ${element} at index ${index}`);
  }

  // Function for Validating Input
  ValidInputNotEmpty(mode: string) {
    // Add your logic for validating input here
    console.log(`Validating input in mode ${mode}`);
  }

  // Function for Adding New Client
  AddNewClient() {
    // Add your logic for adding a new client here
    console.log("Adding new client...");
  }
  // Function for Calculating PT (Edit Mode)
  CalculatePTedit() {
    // Add your logic for calculating PT in edit mode here
    console.log("Calculating PT in edit mode...");
  }

  // Function for Handling Selected Product (Edit Mode)
  GetSelectedProductThenSetEdit() {
    // Add your logic for handling selected product in edit mode here
    console.log("Selected product changed in edit mode...");
  }

  // Function for Editing Facture Item
  EditFactureItem() {
    // Add your logic for editing a facture item here
    console.log("Editing facture item...");
  }

  // Function for Validating Input (Edit Mode)
  ValidInputNotEmptyEdit(mode: string) {
    // Add your logic for validating input in edit mode here
    console.log(`Validating input in edit mode, mode: ${mode}`);
  }

  // Function for Saving Facture
  SaveFacture() {
    // Add your logic for saving facture here
    console.log("Saving facture...");
  }

  // Function for Closing Modal (Edit Mode)
  CloseEditModal() {
    // Add your logic for closing the edit modal here
    console.log("Closing edit modal...");
  }

  // Function for Submitting New Client Form
  SubmitNewClientForm() {
    // Add your logic for submitting the new client form here
    console.log("Submitting new client form...");
  }

  // Function for Closing Add Client Modal
  CloseAddClientModal() {
    // Add your logic for closing the add client modal here
    console.log("Closing add client modal...");
  }

  // Function for Handling Client Name Input
  HandleClientNameInput() {
    // Add your logic for handling client name input here
    console.log("Handling client name input...");
  }

  // Function for Handling ICE Input
  HandleICEInput() {
    // Add your logic for handling ICE input here
    console.log("Handling ICE input...");
  }

  // Function for Handling City Input
  HandleCityInput() {
    // Add your logic for handling city input here
    console.log("Handling city input...");
  }

}
