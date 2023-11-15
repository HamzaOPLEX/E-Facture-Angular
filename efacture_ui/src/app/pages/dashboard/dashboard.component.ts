import {Component} from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
    constructor(private http: HttpClient){

    }
    Lenghts = {
        len_factures: 0, // Replace with actual values
        len_devis: 0,
        len_bl: 0,
        len_products: 0,
        len_clients: 0
    };
    ngOnInit(){
        this.http.get('http://127.0.0.1:8000/api/api/dashboard/').subscribe(
            (response) => {
                this.Lenghts = {
                    len_factures: response['total_invoices'], // Replace with actual values
                    len_devis: response['total_devis'],
                    len_bl: response['total_bl'],
                    len_products: 0,
                    len_clients: response['total_clients']
                };
            },
            (error) => {

            }
        )
    }



    HT = 1000;
    HT_BL = 1000;
    TTC = 1200;
    TVA_taux = 20;
}
