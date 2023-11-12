import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class SaveToDbService {

  constructor(private http: HttpClient, private messageService: MessageService) { }


  AutoSave(doc_id,doc_data,doc_type){
    const url = 'http://127.0.0.1:8000/api/documents/update/' + doc_id
    this.http.put(url, doc_data).subscribe(
      (respond)=>{
        console.log(respond)
        this.messageService.add({ severity: 'info', summary: 'Data Saved', detail: 'Changes has been saved' });

      },
      (error)=>{
        console.log(error)
      }
    )
  }


}
