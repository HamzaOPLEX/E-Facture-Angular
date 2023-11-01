import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchDocService {
  constructor(private http: HttpClient){}

  getDocumentData(id){
    let data ={ 
        billingForm:{
          id: "MA-FA-33333", 
          clientName: '1',
          documentDate: '2020-10-15',
          documentStatus: 'uncompleted',
          PayingMethod: 'uncompleted',
          invoiceAvnace: 10200,
          invoiceRest: 1500, //calculated
          TTCorHT: "TTC",
          // invoiceHT: 1500, //calculated
          // invoiceTTC: 1599, //calculated
          editUrl: "/invoices/edit/33333",
        },
        tableData:[
          { id: 1, quantity: "10", name: "Sndo9 d btata", unity_total: "15", total: "" },
          { id: 1, quantity: "10", name: "Sndo9 d banan", unity_total: "15", total: "" },
          { id: 1, quantity: "10", name: "Sndo9 d tfa7", unity_total: "15", total: "" },
          { id: 1, quantity: "10", name: "Sndo9 d avoka", unity_total: "15", total: "" },
          { id: 1, quantity: "10", name: "Sndo9 d dla7", unity_total: "15", total: "" },
          { id: 1, quantity: "10", name: "Sndo9 d 3inb", unity_total: "15", total: "" },
        ]
      }
    return data
  }

  getAllDocs(TYPE) {
    let url = "http://127.0.0.1:8000/api/documents/" + TYPE.trim()
    return this.http.get(url)
  }
}
