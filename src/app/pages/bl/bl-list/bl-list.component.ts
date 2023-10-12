import { Component } from '@angular/core';

@Component({
  selector: 'app-bl-list',
  templateUrl: './bl-list.component.html',
  styleUrls: ['./bl-list.component.scss']
})
export class BlListComponent {
  messages: string[] = ['Message 1', 'Message 2']; // Replace with actual messages
  allStuff: any[] = [  // Replace with actual data
    { id: 1, name: 'Name 1', data: [/* data for this section */] },
    { id: 2, name: 'Name 2', data: [/* data for this section */] },
    // Add more sections as needed
  ];
  deleteAction = '/delete'; // Replace with actual action URL

  selectedRows: { [key: string]: number[] } = {};

  collapseToggle(id: number) {
    // Toggle the collapse state based on the ID
  }

  isExpanded(id: number): boolean {
    // Check if the section with this ID is expanded
    return false; // Return true or false based on your logic
  }

  selectAllThenConvert(tableId: string) {
    // Logic for selecting all rows and converting them
  }

  selectThenConvert(tableId: string) {
    // Logic for selecting specific rows and converting them
  }

  updateSelectedRow(sectionId: number, rowIndex: number) {
    // Update the selected rows based on the section and row indices
  }
}
