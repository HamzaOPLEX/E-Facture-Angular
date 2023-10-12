import { Component } from '@angular/core';

@Component({
  selector: 'app-bl-create',
  templateUrl: './bl-create.component.html',
  styleUrls: ['./bl-create.component.scss']
})
export class BlCreateComponent {
  user = { username: 'JohnDoe' }; // Replace with actual user data
  messages: string[] = ['Message 1', 'Message 2']; // Replace with actual messages
  new_BL_number = 1234; // Replace with actual BL number
  selectedClient: string = '-'; // Replace with initial selected client
  selectedDate: string = ''; // Replace with initial selected date
  todaydate = ''
  items = []
  clients = [
    { id: '1', name: 'Client A' },
    { id: '2', name: 'Client B' }
  ]; // Replace with actual client data

  onSubmit() {
    // Logic for form submission
  }

  addNewFactureItemModalHandler() {
    // Logic for handling adding a new facture item
  }

  addNewClient() {
    // Logic for adding a new client
  }
  submitForm(){
    
  }
  editFactureItem(){
    
  }
  deleteFactureItem(){

  }
  addNewFactureItem(){
    
  }
}
