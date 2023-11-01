import { Injectable } from '@angular/core';
import { SaveToCookieService } from '@services/save-to-cookie/save-to-cookie.service'; // Service for shared data between components
import { ValidatorsService } from '@services/Validators/validators.service'; // Service for shared data between components
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';



@Injectable({
  providedIn: 'root'
})
export class SubmitFormService {
  billingFormData: any;
  itemsTableData: any[];


  constructor(
    private SaveToCookieService: SaveToCookieService,
    private ValidatorsService: ValidatorsService,
    private http: HttpClient,
    public jwtHelper: JwtHelperService
    ) {
  }

  CreateDocument(TYPE){
    let data = this.SaveToCookieService.getData(TYPE,null)
    const url = "http://127.0.0.1:8000/api/documents/create/"

    // formating data for the api serializer 
    let formated_data = {}
    formated_data = data['billing_data']
    formated_data['document_items'] = data['table_data']
    formated_data['document_created_by'] = this.jwtHelper.decodeToken().id
    formated_data['document_type'] = TYPE

    this.http.post(url, formated_data).subscribe(
      (response: any) => {
        // display form values on success
        alert('Invoice Has Been Created '+response.document_number);
        this.SaveToCookieService.ClearCache(TYPE)
      },
      (error) => {
        console.log(JSON.stringify(error.error))
        alert('Invoice Creation Error ' + JSON.stringify(error.error));
      }
    )
  }

}
