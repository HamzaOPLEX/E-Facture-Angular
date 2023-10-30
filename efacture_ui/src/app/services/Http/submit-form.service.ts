import { Injectable } from '@angular/core';
import { SaveToCookieService } from '@services/save-to-cookie/save-to-cookie.service'; // Service for shared data between components
import { ValidatorsService } from '@services/Validators/validators.service'; // Service for shared data between components



@Injectable({
  providedIn: 'root'
})
export class SubmitFormService {
  billingFormData: any;
  itemsTableData: any[];


  constructor(
    private SaveToCookieService: SaveToCookieService,
    private ValidatorsService: ValidatorsService,
    ) {
  }

  CreateDocument(Doc_ID){
    let data = this.SaveToCookieService.getData(Doc_ID,null)
    console.log(data)
    let data_validation_status = this.ValidatorsService.validateDocumentForm(data)
  }

}
