// Importing necessary modules and services
import { Component, Input } from '@angular/core';
import { SaveToCookieService } from '@services/save-to-cookie/save-to-cookie.service';
import { FetchDocService } from '@services/fetch-doc/fetch-doc.service'; // Service for retrieving document-related data
import { SharedDataService } from '@services/SharedData/shared-data.service'; // Service for shared data between components
import { SubmitFormService } from '@services/Http/submit-form.service'
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

interface PayingMethods {
  method: string;
}


@Component({
  selector: 'app-create-billing-form',
  templateUrl: './create-billing-form.component.html',
  styleUrls: ['./create-billing-form.component.scss']
})
export class CreateBillingFormComponent {
  TYPE: string; // Input property for component type
  Doc_ID: string; // Variable to store document ID
  BillingForm!: FormGroup; // Form group for billing form
  submitted = false;
  PaimentMethod: PayingMethods[] | undefined;
  constructor(
    private SaveToCookieService: SaveToCookieService, // Service for saving data to cookies
    private FetchDocService: FetchDocService, // Service for fetching document data
    private SharedDataService: SharedDataService, // Service for shared data
    private SubmitFormService: SubmitFormService, // Service for shared data
    private fb: FormBuilder, // Form builder for creating forms
    private route: ActivatedRoute,
  ) { }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.TYPE = params.type;
      console.log('[+] app-billing-form: TYPE=', params.type)

      // Get document ID from shared data service
      this.Doc_ID = this.SharedDataService.getDoc_ID();

      // Log the retrieved document ID
      console.log('[+] app-billing-form: OnInit billing form has got the ID from shareddata and set to HTML input =>', this.Doc_ID);

      // SetupCookies : Create a temporary data cookie with the fetched data ID
      let temp_data = JSON.parse(localStorage.getItem(this.Doc_ID)); // check if Cookies are setuped if not setup it
      console.log('[+] app-billing-form: temp data ', temp_data)
      if (temp_data == null) { // if cookies not setuped
        console.log('[+] app-billing-form: setting up cookies ', temp_data)
        this.SaveToCookieService.setupCookies(this.Doc_ID); // setuping cookies
        console.log('[+] app-billing-form: setting up cookies done', temp_data)

      }
      else if (temp_data !== null) { // if cookies are setuped
        temp_data = temp_data['billing_data']
        let temp_data_length = Object.values(temp_data).length
        console.log('[+] app-billing-form: temp data lengh', temp_data_length)
        // Check if there is data saved in cookies
        if (temp_data_length > 0) {
          // Data found in table, load data
          console.log('[+] app-billing-items: Data found in cookies, loading data...');

          if (this.TYPE == "invoices") {
            this.BillingForm = this.fb.group({
              documentNumber: [this.Doc_ID, Validators.required], // Set document number with the retrieved ID
              clientName: [temp_data.clientName, [Validators.required, this.validateClientName]], // Initialize client name field
              invoiceDate: [temp_data.invoiceDate, Validators.required], // Initialize invoice date field
              avanceMoney: [temp_data.avanceMoney, Validators.required], // Initialize advance field
              PayingMethod: [temp_data.PayingMethod, [Validators.required, this.validateClientName]], // Initialize payment method field
              TTTCorHT: [temp_data.TTTCorHT, Validators.required] // Initialize TTTCorHT field with default value 'TTC'
            });
          }
          else {
            this.BillingForm = this.fb.group({
              documentNumber: [this.Doc_ID, Validators.required], // Set document number with the retrieved ID
              clientName: [temp_data.clientName, [Validators.required, this.validateClientName]], // Initialize client name field
              invoiceDate: [temp_data.invoiceDate, Validators.required], // Initialize invoice date field
            });
            console.log('[+] app-billing-items: loding data done', temp_data)
          }

        }
        else if (temp_data_length == 0) {
          // No data found in cookies, loading empty form
          console.log('[+] app-billing-items: Data Not Found in cookies, loading empty billing form...');
          if (this.TYPE == "invoices") {
            this.BillingForm = this.fb.group({
              documentNumber: [this.Doc_ID, Validators.required], // Set document number with the retrieved ID
              clientName: ['-', [Validators.required, this.validateClientName]], // Initialize client name field
              invoiceDate: ['', Validators.required], // Initialize invoice date field
              avanceMoney: ['0', Validators.required], // Initialize advance field
              PayingMethod: ['-', [Validators.required, this.validateClientName]], // Initialize payment method field
              TTTCorHT: ['TTC', Validators.required] // Initialize TTTCorHT field with default value 'TTC'
            });
          }
          else {
            this.BillingForm = this.fb.group({
              documentNumber: [this.Doc_ID, Validators.required], // Set document number with the retrieved ID
              clientName: ['', [Validators.required, this.validateClientName]], // Initialize client name field
              invoiceDate: ['', Validators.required], // Initialize invoice date field
            });
          }
        }
      }
    })
  }
  validateClientName(control) {
    if (control.value !== '-') {
      return null; // Validation passed
    } else {
      return { invalidClientName: true }; // Validation failed
    }
  }
  // Example data
  user = { username: 'JohnDoe' };
  todayDate = '2023-10-12';
  Clients = [
    { id: '1', name: 'Client A' },
    { id: '2', name: 'Client B' }
  ];

  PayingMethod =[
    { method: 'Espèces',},
    { method: 'Chèque',},
    { method: 'Lettre De Change', },
    { method: 'Virement Bancaire'},
  ]

  // Function to clear cache (delete cookies with the same ID as the current invoice ID)
  ClearCache() {
    localStorage.removeItem(this.Doc_ID) // remove current document cookie
    this.SaveToCookieService.setupCookies(this.Doc_ID) // setup  new  empty temp_data cookie
    location.reload() // reload page to refresh the view
  }

  // Function called when form changes
  onFormChange() {
    console.log('Form Changes');
    let data = this.BillingForm.getRawValue()
    this.SaveToCookieService.save(this.Doc_ID, data, "billing")
  }

  onSubmit(){
    this.submitted = true;
    let table_data = this.SaveToCookieService.getData(this.Doc_ID,null)
    let isEmpty = Object.keys(table_data['table_data']).length > 0; // check data in the table

    // stop here if form is invalid
    if (this.BillingForm.invalid || isEmpty == false) {
      alert('Form Not Completed')
      this.SubmitFormService.CreateDocument(this.Doc_ID)
    }
    else {
      // display form values on success
      alert('Invoice Has Been Created');
    }
  }
}
