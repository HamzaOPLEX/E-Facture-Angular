// Importing necessary modules and services
import { Component, Input } from '@angular/core';
import { SaveToCookieService } from '@services/save-to-cookie/save-to-cookie.service';
import { FetchDocService } from '@services/fetch-doc/fetch-doc.service'; // Service for retrieving document-related data
import { SharedDataService } from '@services/SharedData/shared-data.service'; // Service for shared data between components
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-billing-form',
  templateUrl: './edit-billing-form.component.html',
  styleUrls: ['./edit-billing-form.component.scss']
})
export class EditBillingFormComponent {
  TYPE: string;
  Doc_ID: string; // Variable to store document ID
  document_data;
  BillingForm: FormGroup; // Form group for billing form

  constructor(
    private SaveToCookieService: SaveToCookieService, // Service for saving data to cookies
    private FetchDocService: FetchDocService, // Service for fetching document data
    private SharedDataService: SharedDataService, // Service for shared data
    private fb: FormBuilder, // Form builder for creating forms
    private route: ActivatedRoute,
  ) { }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.TYPE = params.type;
      console.log('[+] app-billing-form: TYPE=', params.type)
      this.document_data = this.SharedDataService.getDoc_Data()      
      this.Doc_ID = this.document_data.billingForm.id
      console.log('[+] app-billing-form: data retrieved =>',this.document_data)

      if (this.TYPE == "invoices") {
        console.log('[+] app-billing-form: Param Routing Works ! From Invoices Hello')
        this.BillingForm = this.fb.group({
          documentNumber: new FormControl(this.Doc_ID), // Set document number with the retrieved ID
          clientName: new FormControl(this.document_data.billingForm.clientName), // Initialize client name field
          invoiceDate: [this.document_data.billingForm.invoiceDate], // Initialize invoice date field
          avanceMoney: [this.document_data.billingForm.avanceMoney], // Initialize advance field
          PayingMethod: [this.document_data.billingForm.PayingMethod], // Initialize payment method field
          TTTCorHT: [this.document_data.TTTCorHT] // Initialize TTTCorHT field with default value 'TTC'
        });
      }
      else {
        this.BillingForm = this.fb.group({
          documentNumber: new FormControl(this.Doc_ID), // Set document number with the retrieved ID
          clientName: new FormControl(this.document_data.clientName), // Initialize client name field
          invoiceDate: [this.document_data.invoiceDate], // Initialize invoice date field
        });
        console.log('[+] app-billing-items: loding data done', this.document_data)
      }
    })
  }

  // Example data
  user = { username: 'JohnDoe' };
  todayDate = '2023-10-12';
  selectBody = [
    { id: '1', name: 'Client A' },
    { id: '2', name: 'Client B' }
  ];
  selectProductBody = [
    { id: '1', name: 'Product A' },
    { id: '2', name: 'Product B' }
  ];

  newProductName: string = 'New Product'; // Example product name
  newClientName: string = 'New Client'; // Example client name

  // Set default selected client and product IDs
  selectedProduct: string = this.selectProductBody[0].id;
  selectedEditProduct: string = this.selectProductBody[1].id;


  // Function called when form changes
  onFormChange() {
    console.log('Form Changes');
    let data = this.BillingForm.getRawValue()
    console.log("[+] app-billing-items: auto saving data to db",this.BillingForm.getRawValue())
  }
}
