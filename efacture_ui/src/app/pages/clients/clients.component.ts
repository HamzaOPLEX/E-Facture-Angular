import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FetchDocService } from '@services/fetch-doc/fetch-doc.service'; // Importing custom service

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

  clients

  ngOnInit(){
    this.FetchDocService.getAllClient().subscribe(
      (response: any) => {
        this.clients = response
      },
    (error) => {
        console.error(error)
      }
    )
  }
  handleClientDataEvent(data) {
    console.log(data)
    this.clients = data['clientData']
  }
  handleClientDeletion(data){
    console.log("mn 3andk khokom walid o a7san walid :",data)
    this.clients = data
  }
  User = {
    username: "Hamza"
  }
}
