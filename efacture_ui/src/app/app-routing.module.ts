import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from '@modules/main/main.component';
import { LoginComponent } from '@modules/login/login.component';
import { LogoutComponent } from '@modules/logout/logout/logout.component';
import {DashboardComponent} from '@pages/dashboard/dashboard.component';
import { AuthGuard } from '@services/Auth/auth-guard.guard';
import { LoginAuthGuard } from '@services/Auth/LoginCanActivate/auth-guard.guard';
import { AdminComponent } from './pages/admin/admin.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProductsComponent } from './pages/products/products.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { UsersComponent } from './pages/users/users.component';
import { FactureCreateComponent } from './pages/facture/facture-create/facture-create.component';
import { DevisCreateComponent } from './pages/devis/devis-create/devis-create.component';
import { BlCreateComponent } from './pages/bl/bl-create/bl-create.component';
import { DocummentsListingComponent } from './components/documments-listing/documments-listing.component';
import { EditDocumentComponent } from './pages/edit-document/edit-document/edit-document.component';



const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
            {
                path: '',
                component: DashboardComponent
            },
            {
                path: 'settings',
                component: AdminComponent,
            },
            {
                path: 'settings/global',
                component: SettingsComponent
            },
            {
                path: 'settings/products',
                component: ProductsComponent
            },
            {
                path: 'settings/clients',
                component: ClientsComponent
            },
            {
                path: 'settings/users',
                component: UsersComponent
            },
            // Facture URL
            {
                path: 'invoices/create',
                component: FactureCreateComponent
            },
            {
                path: ':type/list',
                component: DocummentsListingComponent
            },
            {
                path: ':type/edit/:id',
                component: EditDocumentComponent
            },
            // Devis URL
            {
                path: 'devis/create',
                component: DevisCreateComponent
            },
            {
                path: ':type/list',
                component: DocummentsListingComponent
            },
            {
                path: ':type/edit/:id',
                component: EditDocumentComponent
            },
            // BL URL
            {
                path: 'bl/create',
                component: BlCreateComponent
            },
            {
                path: ':type/list',
                component: DocummentsListingComponent
            },
            {
                path: ':type/edit/:id',
                component: EditDocumentComponent
            },
        ]
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [LoginAuthGuard]
    },
    {
        path: 'logout',
        component: LogoutComponent,
        canActivate: [AuthGuard]
    },
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
