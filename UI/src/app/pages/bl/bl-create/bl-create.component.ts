import { Component } from '@angular/core';
import { SharedDataService } from '@services/SharedData/shared-data.service'
import { FetchDocService } from '@services/fetch-doc/fetch-doc.service' //get documment related data


@Component({
  selector: 'app-bl-create',
  templateUrl: './bl-create.component.html',
  styleUrls: ['./bl-create.component.scss']
})
export class BlCreateComponent {
  user = { username: 'JohnDoe' }; // Replace with actual user data
  constructor(private SharedDataService: SharedDataService, private FetchDocService: FetchDocService) { }
  TYPE = "BL"
  ngOnInit(){
    // get Doc ID after seting the TYPE in  the shared data
    let Doc_ID = this.FetchDocService.FetchDocID(this.TYPE)
    this.SharedDataService.setDoc_ID(Doc_ID)
    console.log('[+] app-bl-create : Facture Main Component has get/set the ID =>', this.SharedDataService.getDoc_ID())
  }

  onSubmit() {
    // Logic for form submission
  }
}
