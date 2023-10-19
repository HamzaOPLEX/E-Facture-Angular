import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { SharedDataService } from '@services/SharedData/shared-data.service'
import { FetchDocService } from '@services/fetch-doc/fetch-doc.service' //get documment related data

@Component({
  selector: 'app-facture-create',
  templateUrl: './facture-create.component.html',
  styleUrls: ['./facture-create.component.scss']
})
export class FactureCreateComponent {
  TYPE = 'INVOICE'
  constructor(private SharedDataService: SharedDataService, private FetchDocService: FetchDocService){}
  ngOnInit() {
    // get Doc ID after seting the TYPE in  the shared data
    let Doc_ID = this.FetchDocService.FetchDocID(this.TYPE)
    this.SharedDataService.setDoc_ID(Doc_ID)
    console.log('[+] app-facture-create : Facture Main Component has get/set the ID =>', this.SharedDataService.getDoc_ID())
  }


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

  AddNewClient() {
    // Add your code here for adding a new client
  }

  ValidInputNotEmpty(type: string) {
    // Add your code here for validating input
  }
}
