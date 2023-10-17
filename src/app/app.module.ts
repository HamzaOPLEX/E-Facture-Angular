import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from '@/app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from '@modules/main/main.component';
import {LoginComponent} from '@modules/login/login.component';
import {HeaderComponent} from '@modules/main/header/header.component';
import {FooterComponent} from '@modules/main/footer/footer.component';
import {MenuSidebarComponent} from '@modules/main/menu-sidebar/menu-sidebar.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RegisterComponent} from '@modules/register/register.component';
import {DashboardComponent} from '@pages/dashboard/dashboard.component';
import {ToastrModule} from 'ngx-toastr';
import {MessagesComponent} from '@modules/main/header/messages/messages.component';
import {NotificationsComponent} from '@modules/main/header/notifications/notifications.component';
import { FormsModule } from '@angular/forms';
import {CommonModule, registerLocaleData} from '@angular/common';
import localeEn from '@angular/common/locales/en';
import {UserComponent} from '@modules/main/header/user/user.component';
import {ForgotPasswordComponent} from '@modules/forgot-password/forgot-password.component';
import {RecoverPasswordComponent} from '@modules/recover-password/recover-password.component';
import {LanguageComponent} from '@modules/main/header/language/language.component';
import {MainMenuComponent} from './pages/main-menu/main-menu.component';
import {SubMenuComponent} from './pages/main-menu/sub-menu/sub-menu.component';
import {MenuItemComponent} from './components/menu-item/menu-item.component';
import {ControlSidebarComponent} from './modules/main/control-sidebar/control-sidebar.component';
import {StoreModule} from '@ngrx/store';
import {authReducer} from './store/auth/reducer';
import {uiReducer} from './store/ui/reducer';
import {ProfabricComponentsModule} from '@profabric/angular-components';
import {SidebarSearchComponent} from './components/sidebar-search/sidebar-search.component';
import { ChartjsComponent } from '@pages/dashboard/chartjs/chartjs.component';
import { AdminComponent } from './pages/admin/admin.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProductsComponent } from './pages/products/products.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { UsersComponent } from './pages/users/users.component';
import { DevisCreateComponent } from './pages/devis/devis-create/devis-create.component';
import { DevisEditComponent } from './pages/devis/devis-edit/devis-edit.component';
import { DevisListComponent } from './pages/devis/devis-list/devis-list.component';
import { BlCreateComponent } from './pages/bl/bl-create/bl-create.component';
import { BlListComponent } from './pages/bl/bl-list/bl-list.component';
import { BlEditComponent } from './pages/bl/bl-edit/bl-edit.component';
import { FactureListComponent } from './pages/facture/facture-list/facture-list.component';
import { FactureCreateComponent } from './pages/facture/facture-create/facture-create.component';
import { FactureEditComponent } from './pages/facture/facture-edit/facture-edit.component';
import { AddClientModalComponent } from './components/add-client-modal/add-client-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FactureTableItemsComponent } from './components/facture-table-items/facture-table-items.component';
import { BillingFormComponent } from './components/billing/billing-form/billing-form.component';

registerLocaleData(localeEn, 'en-EN');

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        LoginComponent,
        HeaderComponent,
        FooterComponent,
        MenuSidebarComponent,
        RegisterComponent,
        DashboardComponent,
        MessagesComponent,
        NotificationsComponent,
        UserComponent,
        ForgotPasswordComponent,
        RecoverPasswordComponent,
        LanguageComponent,
        MainMenuComponent,
        SubMenuComponent,
        MenuItemComponent,
        ControlSidebarComponent,
        SidebarSearchComponent,
        ChartjsComponent,
        AdminComponent,
        ProductsComponent,
        ClientsComponent,
        UsersComponent,
        SettingsComponent,
        DevisCreateComponent,
        DevisEditComponent,
        DevisListComponent,
        BlCreateComponent,
        BlListComponent,
        BlEditComponent,
        FactureListComponent,
        FactureCreateComponent,
        FactureEditComponent,
        AddClientModalComponent,
        FactureTableItemsComponent,
        BillingFormComponent,
    ],
    imports: [
        ProfabricComponentsModule,
        CommonModule,
        BrowserModule,
        StoreModule.forRoot({auth: authReducer, ui: uiReducer}),
        HttpClientModule,
        FormsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            timeOut: 3000,
            positionClass: 'toast-top-right',
            preventDuplicates: true
        }),
        NgbModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
