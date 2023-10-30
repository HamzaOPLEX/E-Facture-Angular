import { Component } from '@angular/core';
import { FetchDocService } from '@services/fetch-doc/fetch-doc.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedDataService } from '@services/SharedData/shared-data.service'; // Service for shared data between components

@Component({
  selector: 'app-create-document',
  templateUrl: './create-document.component.html',
  styleUrls: ['./create-document.component.scss']
})
export class CreateDocumentComponent {
  TYPE
  Doc_ID
  document_data = {}
  constructor(private FetchDocService: FetchDocService, private route: ActivatedRoute, private SharedDataService: SharedDataService, // Service for shared data
  ) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.TYPE = params['type'];
      // get Doc ID after seting the TYPE in  the shared data
      let Doc_ID = this.FetchDocService.FetchDocID(this.TYPE)
      this.SharedDataService.setDoc_ID(Doc_ID)
      console.log('[+] app-create-document : Document Main Component has get/set the ID =>', this.SharedDataService.getDoc_ID())
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
