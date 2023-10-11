import {Component} from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
    Lenghts = {
        len_factures: 10, // Replace with actual values
        len_devis: 20,
        len_bl: 30,
        len_products: 40,
        len_clients: 50
    };

    HT = 1000;
    HT_BL = 1000;
    TTC = 1200;
    TVA_taux = 20;
}
