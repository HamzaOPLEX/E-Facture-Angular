import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FetchDocService } from '@services/fetch-doc/fetch-doc.service'; // Importing custom service
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {
  constructor(
    private http: HttpClient, 
    private FetchDocService: FetchDocService
    ){}

  loading: boolean = true;
  clients
  ngOnInit(){
    this.FetchDocService.getAllClient().subscribe(
      (response: any) => {
        this.clients = response
        console.log(this.clients)
        this.loading = false
      },
    (error) => {
        console.error(error)
      }
    )
  }
  handleClientDataEvent(data) {
    this.clients = data['clientData']
  }
  User = {
    username: "Hamza"
  }
}
