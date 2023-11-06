import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchDocService {
  constructor(private http: HttpClient){}

  getAllClient(){
    let url = "http://127.0.0.1:8000/api/clients/"
    return this.http.get(url)
  }

  getDocumentData(id){
    return true
  }

  getAllDocs(TYPE) {
    let url = "http://127.0.0.1:8000/api/documents/" + TYPE.trim()
    return this.http.get(url)
  }
}
