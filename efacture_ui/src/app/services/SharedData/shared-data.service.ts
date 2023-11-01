import { Injectable } from '@angular/core';
import { FetchDocService } from '@services/fetch-doc/fetch-doc.service' //get documment related data
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor(private FetchDocService: FetchDocService,) { }
  document_data = ''

  setDoc_Data(data) {
    this.document_data = data
    return true
  }
  getDoc_Data() {
    return this.document_data
  }
}
