import { Component } from '@angular/core';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddProductModalComponent } from '../add-product-modal/add-product-modal.component';

@Component({
  selector: 'app-add-new-facture-item-modal',
  templateUrl: './add-new-facture-item-modal.component.html',
  styleUrls: ['./add-new-facture-item-modal.component.scss']
})
export class AddNewFactureItemModalComponent {
  Qs: number;
  selectedProduct: string;
  newProduct: string;
  PU: number;
  PT: number;

  data = [
    { "Qs": 1, "DESIGNATION": 1, "P.U": 1, "P.T": 1 },
    { "Qs": 1, "DESIGNATION": 1, "P.U": 1, "P.T": 1 },
    { "Qs": 1, "DESIGNATION": 1, "P.U": 1, "P.T": 1 },
    { "Qs": 1, "DESIGNATION": 1, "P.U": 1, "P.T": 1 },
    { "Qs": 1, "DESIGNATION": 1, "P.U": 1, "P.T": 1 },
  ]

  CalculatePT() {
    this.PT = this.Qs * this.PU;
  }
  closeResult = '';

  constructor(private modalService: NgbModal) { }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  private getDismissReason(reason) {
      console.log(`with: ${reason}`) ;
  }
}
