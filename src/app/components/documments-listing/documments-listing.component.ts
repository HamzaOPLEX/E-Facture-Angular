import { Component, OnInit } from '@angular/core';
import { Documment } from './document';
import { DocumentService } from './documentservice';

@Component({
  selector: 'app-documments-listing',
  templateUrl: './documments-listing.component.html',
  styleUrls: ['./documments-listing.component.scss']
})
export class DocummentsListingComponent {
  documents!: Documment[];

  selectedCustomers!: Documment[];


  statuses!: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  constructor(private documentService: DocumentService) { }

  ngOnInit() {
    this.documentService.getCustomersLarge().then((documents) => {
      this.documents = documents;
      this.loading = false;
      this.documents.forEach((document) => (document.documentDate = new Date(<Date>document.documentDate)));

    });

    this.statuses = [
      { label: 'Unqualified', value: 'paid' },
      { label: 'Qualified', value: 'qualified' },
      { label: 'New', value: 'new' },
      { label: 'Negotiation', value: 'negotiation' },
      { label: 'Renewal', value: 'renewal' },
      { label: 'Proposal', value: 'proposal' }
    ];
  }

  getSeverity(status: string) {
    switch (status) {
      case 'unqualified':
        return 'danger';

      case 'qualified':
        return 'success';

      case 'new':
        return 'info';

      case 'negotiation':
        return 'warning';

      case 'renewal':
        return null;
    }
  }
}
