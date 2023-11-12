import { Component } from '@angular/core';
import { FetchDocService } from '@services/fetch-doc/fetch-doc.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedDataService } from '@services/SharedData/shared-data.service'; // Service for shared data between components

@Component({
  selector: 'app-edit-document',
  templateUrl: './edit-document.component.html',
  styleUrls: ['./edit-document.component.scss']
})


export class EditDocumentComponent {
  TYPE
  Doc_ID
  document_data
  constructor(private FetchDocService: FetchDocService, private route: ActivatedRoute, private SharedDataService: SharedDataService, // Service for shared data
) { }
  ngOnInit(){
      this.route.params.subscribe(params => {
        this.TYPE = params['type'];
        this.Doc_ID = params['id'];
        this.FetchDocService.getDocumentData(this.Doc_ID,this.TYPE).subscribe(
          (respond)=>{
            this.document_data = respond
          },
          (error)=>{
            console.log(error.error)
          }
        )
        // this.SharedDataService.setDoc_Data(this.document_data)
      })
  };

}
