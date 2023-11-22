import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FetchDocService } from '@services/fetch-doc/fetch-doc.service'; // Importing custom service
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  constructor(
    private http: HttpClient,
    private FetchDocService: FetchDocService
  ) { }

  Products;

  ngOnInit() {
    this.FetchDocService.getAllProduct().subscribe(
      (response: any) => {
        this.Products = response
      },
      (error) => {
        console.error(error)
      }
    )
  }
  handleProductDataEvent(data) {
    console.log(data)
    this.Products = data['ProductData']
  }
  handleProductDeletion(data) {
    console.log("mn 3andk khokom walid o a7san walid :", data)
    this.Products = data
  }
  User = {
    username: "Hamza"
  }
}
