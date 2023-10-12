import { Component } from '@angular/core';

@Component({
  selector: 'app-devis-list',
  templateUrl: './devis-list.component.html',
  styleUrls: ['./devis-list.component.scss']
})
export class DevisListComponent {
  messages: string[] = ['Message 1', 'Message 2']; // Replace with actual messages
  tablebody: any[] = [  // Replace with actual data
    { serie: 'S001', client: 'Client 1', date: '2023-10-12', totalHT: 500 },
    { serie: 'S002', client: 'Client 2', date: '2023-10-13', totalHT: 700 }
  ];
  deleteAction = '/delete'; // Replace with actual action URL
}
