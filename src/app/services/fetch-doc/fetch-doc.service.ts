import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchDocService {

  constructor() { }
  FetchDocID(TYPE) {
    console.log('[+] FetchDocService : Fetching a new Doc_ID with type =>',TYPE)
    //send http get request with user token to get new uniq Doc_ID wih TYPE ["INVOICE","DEVIS","BL"]
    
    // this if statement is for testing, after impimenting API remove it
    if (TYPE=="INVOICE"){
      return "MA-FA-000001" // COPANY_CODE-DOC_TYPE-DOC_ID
    }
    else if (TYPE == "DEVIS"){
      return "MA-DV-000001" // COPANY_CODE-DOC_TYPE-DOC_ID
    }
    else if(TYPE =="BL"){
      return "MA-BL-000001" // COPANY_CODE-DOC_TYPE-DOC_ID
    }
  }
}
