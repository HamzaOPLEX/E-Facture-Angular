import { Component } from '@angular/core';
import { SharedDataService } from '@services/SharedData/shared-data.service'
import { FetchDocService } from '@services/fetch-doc/fetch-doc.service' //get documment related data

@Component({
  selector: 'app-devis-create',
  templateUrl: './devis-create.component.html',
  styleUrls: ['./devis-create.component.scss']
})
export class DevisCreateComponent {
  TYPE = 'DEVIS'
  constructor(private SharedDataService: SharedDataService, private FetchDocService: FetchDocService) { }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {
    // get Doc ID after seting the TYPE in  the shared data
    let Doc_ID = this.FetchDocService.FetchDocID(this.TYPE)
    this.SharedDataService.setDoc_ID(Doc_ID)
    console.log('[+] app-devis-create : Facture Main Component has get/set the ID =>', this.SharedDataService.getDoc_ID())
  }
}
