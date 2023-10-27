import { Component } from '@angular/core';

@Component({
  selector: 'app-facture-edit',
  templateUrl: './facture-edit.component.html',
  styleUrls: ['./facture-edit.component.scss']
})
export class FactureEditComponent {
  user = {
    id: 1,
    username: 'John Doe',
    userpermission: 'Admin'
  };

  facture = {
    facture_number: '12345',
    CreatedBy: { id: 1 } // Assuming CreatedBy has an id
    // Add other facture properties here
  };

  messages = ['Message 1', 'Message 2'];

  len_item = 5; // Example value, replace with actual data
  TT_INFO = [100, 20, 120]; // Example values, replace with actual data
  permissionMessage = 'You do not have permission to edit this invoice.';

  isUserAdminOrCreatedByUser() {
    return this.user.userpermission === 'Admin' || this.facture.CreatedBy.id === this.user.id;
  }

  ngOnInit(): void { }
}
