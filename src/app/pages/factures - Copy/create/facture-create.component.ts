import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  // Assuming you have these variables set in your component
  username: string = 'John Doe';
  messages: string[] = []; // Populate this array with messages

  nElement: number = 0; // Initialize these values as needed
  totalHT: number = 0;
  totalTTC: number
  TVA: number = 0;

  tableRows: any[] = []; // Initialize with data as needed

  factureForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.factureForm = this.fb.group({
      datatable: [''],
      facture_number: [''],
      // Add more form controls here as needed
    });
  }

  addNewFactureItem() {
    // Add logic to handle adding a new item to the table
  }

  editRow(row) {
    // Add logic to handle editing a row
  }

  onSubmit() {
    // Add logic to handle form submission
  }
}
