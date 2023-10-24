import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from '@modules/main/main.component';
import {LoginComponent} from '@modules/login/login.component';
import {RegisterComponent} from '@modules/register/register.component';
import {DashboardComponent} from '@pages/dashboard/dashboard.component';
import {AuthGuard} from '@guards/auth.guard';
import {NonAuthGuard} from '@guards/non-auth.guard';
import {ForgotPasswordComponent} from '@modules/forgot-password/forgot-password.component';
import {RecoverPasswordComponent} from '@modules/recover-password/recover-password.component';
import { AdminComponent } from './pages/admin/admin.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProductsComponent } from './pages/products/products.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { UsersComponent } from './pages/users/users.component';
import { FactureCreateComponent } from './pages/facture/facture-create/facture-create.component';
import { FactureEditComponent } from './pages/facture/facture-edit/facture-edit.component';
import { DevisCreateComponent } from './pages/devis/devis-create/devis-create.component';
import { DevisEditComponent } from './pages/devis/devis-edit/devis-edit.component';
import { BlCreateComponent } from './pages/bl/bl-create/bl-create.component';
import { BlEditComponent } from './pages/bl/bl-edit/bl-edit.component';
import { DocummentsListingComponent } from './components/documments-listing/documments-listing.component';

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
                path: 'invoices/list',
                component: DocummentsListingComponent
            },
            {
                path: 'invoices/edit',
                component: FactureEditComponent
            },
            // Devis URL
            {
                path: 'devis/create',
                component: DevisCreateComponent
            },
            {
                path: 'devis/list',
                component: DocummentsListingComponent
            },
            {
                path: 'devis/edit/:id',
                component: DevisEditComponent
            },
            // BL URL
            {
                path: 'bl/create',
                component: BlCreateComponent
            },
            {
                path: 'bl/list',
                component: DocummentsListingComponent
            },
            {
                path: 'bl/edit/:id',
                component: BlEditComponent
            },
        ]
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [NonAuthGuard]
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [NonAuthGuard]
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        canActivate: [NonAuthGuard]
    },
    {
        path: 'recover-password',
        component: RecoverPasswordComponent,
        canActivate: [NonAuthGuard]
    },
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
