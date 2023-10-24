import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DocumentService {
    getData() {
        return [
            {
                id: 2356,
                clientName: 'Evelyn Martinez',
                documentDate: '2020-10-15',
                documentStatus: 'pending',
            },
            {
                id: 789,
                clientName: 'John Doe',
                documentDate: '2021-08-02',
                documentStatus: 'unpaid',
            },
            {
                id: 3467,
                clientName: 'Alice Johnson',
                documentDate: '2022-05-07',
                documentStatus: 'completed',
            },
            {
                id: 982,
                clientName: 'Robert Smith',
                documentDate: '2023-01-19',
                documentStatus: 'overdue',
            },
            {
                id: 1754,
                clientName: 'Mary Williams',
                documentDate: '2019-12-04',
                documentStatus: 'pending',
            },
            {
                id: 673,
                clientName: 'David Davis',
                documentDate: '2020-07-31',
                documentStatus: 'paid',
            }, {
                id: 673,
                clientName: 'David Davis',
                documentDate: '2020-07-31',
                documentStatus: 'paid',
            }, {
                id: 673,
                clientName: 'David Davis',
                documentDate: '2020-07-31',
                documentStatus: 'paid',
            }, {
                id: 673,
                clientName: 'David Davis',
                documentDate: '2020-07-31',
                documentStatus: 'paid',
            },            {
                id: 673,
                clientName: 'David Davis',
                documentDate: '2020-07-31',
                documentStatus: 'paid',
            }, {
                id: 673,
                clientName: 'David Davis',
                documentDate: '2020-07-31',
                documentStatus: 'paid',
            },            {
                id: 673,
                clientName: 'David Davis',
                documentDate: '2020-07-31',
                documentStatus: 'paid',
            }, {
                id: 673,
                clientName: 'David Davis',
                documentDate: '2020-07-31',
                documentStatus: 'paid',
            },            {
                id: 673,
                clientName: 'David Davis',
                documentDate: '2020-07-31',
                documentStatus: 'paid',
            }, {
                id: 673,
                clientName: 'David Davis',
                documentDate: '2020-07-31',
                documentStatus: 'paid',
            }, {
                id: 673,
                clientName: 'David Davis',
                documentDate: '2020-07-31',
                documentStatus: 'paid',
            }, {
                id: 673,
                clientName: 'David Davis',
                documentDate: '2020-07-31',
                documentStatus: 'paid',
            },            {
                id: 673,
                clientName: 'David Davis',
                documentDate: '2020-07-31',
                documentStatus: 'paid',
            }, {
                id: 673,
                clientName: 'David Davis',
                documentDate: '2020-07-31',
                documentStatus: 'paid',
            },            {
                id: 673,
                clientName: 'David Davis',
                documentDate: '2020-07-31',
                documentStatus: 'paid',
            },            {
                id: 673,
                clientName: 'David Davis',
                documentDate: '2020-07-31',
                documentStatus: 'paid',
            },            {
                id: 673,
                clientName: 'David Davis',
                documentDate: '2020-07-31',
                documentStatus: 'paid',
            }, {
                id: 673,
                clientName: 'David Davis',
                documentDate: '2020-07-31',
                documentStatus: 'paid',
            },            {
                id: 673,
                clientName: 'David Davis',
                documentDate: '2020-07-31',
                documentStatus: 'paid',
            },            {
                id: 673,
                clientName: 'David Davis',
                documentDate: '2020-07-31',
                documentStatus: 'paid',
            }, {
                id: 673,
                clientName: 'David Davis',
                documentDate: '2020-07-31',
                documentStatus: 'paid',
            },            {
                id: 673,
                clientName: 'David Davis',
                documentDate: '2020-07-31',
                documentStatus: 'paid',
            },            {
                id: 673,
                clientName: 'David Davis',
                documentDate: '2020-07-31',
                documentStatus: 'paid',
            },            {
                id: 673,
                clientName: 'David Davis',
                documentDate: '2020-07-31',
                documentStatus: 'paid',
            }, {
                id: 673,
                clientName: 'David Davis',
                documentDate: '2020-07-31',
                documentStatus: 'paid',
            },            {
                id: 673,
                clientName: 'David Davis',
                documentDate: '2020-07-31',
                documentStatus: 'paid',
            },            {
                id: 673,
                clientName: 'David Davis',
                documentDate: '2020-07-31',
                documentStatus: 'paid',
            }, {
                id: 673,
                clientName: 'David Davis',
                documentDate: '2020-07-31',
                documentStatus: 'paid',
            },            {
                id: 673,
                clientName: 'David Davis',
                documentDate: '2020-07-31',
                documentStatus: 'paid',
            },            {
                id: 673,
                clientName: 'David Davis',
                documentDate: '2020-07-31',
                documentStatus: 'paid',
            }, {
                id: 673,
                clientName: 'David Davis',
                documentDate: '2020-07-31',
                documentStatus: 'paid',
            },            {
                id: 673,
                clientName: 'David Davis',
                documentDate: '2020-07-31',
                documentStatus: 'paid',
            }
        ];
    }

    constructor(private http: HttpClient) { }

    getCustomersMini() {
        return Promise.resolve(this.getData().slice(0, 5));
    }

    getCustomersSmall() {
        return Promise.resolve(this.getData().slice(0, 10));
    }

    getCustomersMedium() {
        return Promise.resolve(this.getData().slice(0, 50));
    }

    getCustomersLarge() {
        return Promise.resolve(this.getData().slice(0, 200));
    }

    getCustomersXLarge() {
        return Promise.resolve(this.getData());
    }

    getCustomers(params?: any) {
        return this.http.get<any>('https://www.primefaces.org/data/customers', { params: params }).toPromise();
    }
};