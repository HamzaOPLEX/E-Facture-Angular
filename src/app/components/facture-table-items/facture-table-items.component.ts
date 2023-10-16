import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-facture-table-items',
  templateUrl: './facture-table-items.component.html',
  styleUrls: ['./facture-table-items.component.scss']
})
export class FactureTableItemsComponent {

  @Input() public TYPE: string;




  N_ELEMENT: number = 0;
  TOTAL_HT: number = 0;
  TOTAL_TTC: number = 0;
  TVA: number = 0;
  tableData: any[] = [
  ];
  ngOnInit() {
    const savedData = localStorage.getItem('tableData');
    if (savedData) {
      this.tableData = JSON.parse(savedData);
      this.calculateTotalValues()
    }
  }
  // Function to calculate values
  calculateTotalValues() {
    this.N_ELEMENT = this.tableData.length;

    let total = 0;
    for (let i = 0; i < this.tableData.length; i++) {
      total += this.tableData[i].total || 0;
    }
    this.TOTAL_HT = total;
    this.TVA = 20
    this.TOTAL_TTC = this.TOTAL_HT+(this.TOTAL_HT * this.TVA/100)
  }

  addRow() {
    this.tableData.push({ id: this.tableData.length + 1, name: '', quantity: 0, unity_total: 0, total: 0});
    this.N_ELEMENT = this.N_ELEMENT + 1
  }

  saveInCookies(){
    // Save in Cookies
    localStorage.setItem('tableData', JSON.stringify(this.tableData));
  }


  CleanRow(item){
    if (item.quantity < 0 || item.unity_total < 0) {
      item.quantity = Math.abs(item.quantity);
      item.unity_total = Math.abs(item.unity_total);
    }

    item.total = item.quantity * item.unity_total;
  }

  RowDataSave(item) {
    this.CleanRow(item)
    this.calculateTotalValues()   
    this.saveInCookies()
  }
  deleteRow(index: number) {
    this.tableData.splice(index, 1);
    this.calculateTotalValues()   
    this.saveInCookies();
  }

}
