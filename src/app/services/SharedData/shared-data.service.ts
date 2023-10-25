import { Injectable } from '@angular/core';
import { FetchDocService } from '@services/fetch-doc/fetch-doc.service' //get documment related data
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor(private FetchDocService: FetchDocService,) { }
  Doc_ID = ''
  document_data = ''

  setDoc_Data(data) {
    this.document_data = data
    return true
  }
  getDoc_Data() {
    return this.document_data
  }

  setDoc_ID(Doc_ID){
    this.Doc_ID = Doc_ID
    return true
  }
  getDoc_ID(){
    return this.Doc_ID
  }
  
}
