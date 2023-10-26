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
  document_data = {}
  constructor(private FetchDocService: FetchDocService, private route: ActivatedRoute, private SharedDataService: SharedDataService, // Service for shared data
) { }
  ngOnInit(){
      this.route.params.subscribe(params => {
        this.TYPE = params['type'];
        this.Doc_ID = params['id'];
        this.document_data = this.FetchDocService.getDocumentData(this.Doc_ID);
        this.SharedDataService.setDoc_Data(this.document_data)
      })
  };

  user = { username: 'JohnDoe' };
  todayDate = '2023-10-12';
  selectBody = [
    { id: '1', name: 'Client A' },
    { id: '2', name: 'Client B' }
  ];
  selectProductBody = [
    { id: '1', name: 'Product A' },
    { id: '2', name: 'Product B' }
  ];
}
