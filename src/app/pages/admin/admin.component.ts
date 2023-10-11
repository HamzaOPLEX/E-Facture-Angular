import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  user = {
    username: {
      title: 'Hamza'
    }
  };

  lengths = {
    len_products: 10, // Assuming this is a placeholder value, you should replace it with the actual length
    len_clients: 20,  // Replace with the actual length
    len_users: 30,    // Replace with the actual length
    len_templates: 40 // Replace with the actual length
  };


  constructor() {
    // Add any necessary initialization logic here
  }
}
