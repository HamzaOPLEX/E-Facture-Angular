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
  clients;
  loading = true
  constructor(private FetchDocService: FetchDocService, private route: ActivatedRoute, private SharedDataService: SharedDataService, // Service for shared data
  ) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.TYPE = params['type'];
      this.FetchDocService.getAllClient().subscribe(
        (response: any) => {
          console.log('change detected')
          this.clients = response
          this.loading = false
        },
        (error) => {
          console.error(error)
        }
      )
    })
  };

  user = { username: 'JohnDoe' };

}
