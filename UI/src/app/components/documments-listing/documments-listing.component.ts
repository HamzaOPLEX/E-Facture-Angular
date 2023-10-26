import { Component, OnInit } from '@angular/core';
import { FetchDocService } from '@services/fetch-doc/fetch-doc.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-documments-listing',
  templateUrl: './documments-listing.component.html',
  styleUrls: ['./documments-listing.component.scss']
})
export class DocummentsListingComponent {
  documents
  invoices
  TYPE: string;
  selectedCustomers


  statuses!: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  constructor(private FetchDocService: FetchDocService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.TYPE = params['type'];
      this.FetchDocService.getAllDocs(this.TYPE).then((documents) => {
        if (this.TYPE == 'invoices'){
          this.invoices = documents
        }
        else {
          this.documents = documents
        }
        this.loading = false;
        this.documents.forEach((document) => (document.documentDate = new Date(<Date>document.documentDate)));
      });
    });


    this.statuses = [
      { label: 'paid', value: 'paid' },
      { label: 'non-paid', value: 'non-paid' },
      { label: 'uncompleted', value: 'uncompleted' },
    ];
  }

  getSeverity(status: string) {
    switch (status) {
      case 'non-paid':
        return 'danger';

      case 'paid':
        return 'success';

      case 'new':
        return 'info';

      case 'uncompleted':
        return 'warning';

      case 'renewal':
        return null;
    }
  }
}
