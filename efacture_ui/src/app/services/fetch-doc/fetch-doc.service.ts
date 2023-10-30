import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchDocService {

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


  FetchDocID(TYPE) {
    console.log('[+] FetchDocService : Fetching a new Doc_ID with type =>',TYPE)
    //send http get request with user token to get new uniq Doc_ID wih TYPE ["INVOICE","DEVIS","BL"]
    
    // this if statement is for testing, after impimenting API remove it
    if (TYPE=="invoices"){
      return "MA-FA-000001" // COPANY_CODE-DOC_TYPE-DOC_ID
    }
    else if (TYPE == "devis"){
      return "MA-DV-000001" // COPANY_CODE-DOC_TYPE-DOC_ID
    }
    else if(TYPE =="bl"){
      return "MA-BL-000001" // COPANY_CODE-DOC_TYPE-DOC_ID
    }
  }
  getAllDocs(TYPE){
    // console.log('[+] FetchDocService : Fetching all documments with type =>', routeParams)
    function fetchData(){
      if (TYPE=='invoices'){
        let data = [
          { id: 33333, clientName: 'Evelyn Martinez', documentDate: '2020-10-15', documentStatus: 'uncompleted', invoiceAvnace: 10200, invoiceRest: 1500, invoiceHT: 1500, invoiceTTC :1599,editUrl:"/invoices/edit/33333"},
        ];
        return data
      }
      if (TYPE == 'devis'){
        let data = [
          { id: 1111, clientName: 'Evelyn Martinez', documentDate: '2020-10-15', documentStatus: 'paid', editUrl: "/devis/edit/1111" },
        ];
        return data
      }
      if (TYPE == 'bl') {
        let data = [
          { id: 22222, clientName: 'Evelyn Martinez', documentDate: '2020-10-15', documentStatus: 'non-paid', editUrl: "/bl/edit/22222" },
        ];
        return data
      }
    }
    return Promise.resolve(fetchData())
  }
}
