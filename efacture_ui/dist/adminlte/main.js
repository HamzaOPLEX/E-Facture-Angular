(self["webpackChunkadminlte"] = self["webpackChunkadminlte"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _modules_main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @modules/main/main.component */ 8187);
/* harmony import */ var _modules_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/login/login.component */ 60744);
/* harmony import */ var _modules_logout_logout_logout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/logout/logout/logout.component */ 23019);
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pages/dashboard/dashboard.component */ 24789);
/* harmony import */ var _services_Auth_auth_guard_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/Auth/auth-guard.guard */ 31154);
/* harmony import */ var _services_Auth_LoginCanActivate_auth_guard_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/Auth/LoginCanActivate/auth-guard.guard */ 78467);
/* harmony import */ var _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/admin/admin.component */ 56601);
/* harmony import */ var _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/settings/settings.component */ 65814);
/* harmony import */ var _pages_products_products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/products/products.component */ 97539);
/* harmony import */ var _pages_clients_clients_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/clients/clients.component */ 26546);
/* harmony import */ var _pages_users_users_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/users/users.component */ 31524);
/* harmony import */ var _components_documments_listing_documments_listing_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/documments-listing/documments-listing.component */ 34265);
/* harmony import */ var _pages_edit_document_edit_document_edit_document_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/edit-document/edit-document/edit-document.component */ 66031);
/* harmony import */ var _pages_create_document_create_document_create_document_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/create-document/create-document/create-document.component */ 29603);
/* harmony import */ var _modules_registration_registration_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/registration/registration.component */ 43891);
/* harmony import */ var _modules_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/reset-password/reset-password.component */ 50978);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 22560);



















const routes = [{
  path: '',
  component: _modules_main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent,
  canActivate: [_services_Auth_auth_guard_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard],
  canActivateChild: [_services_Auth_auth_guard_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard],
  children: [{
    path: '',
    component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.DashboardComponent
  }, {
    path: 'settings',
    component: _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_6__.AdminComponent
  }, {
    path: 'settings/global',
    component: _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_7__.SettingsComponent
  }, {
    path: 'settings/products',
    component: _pages_products_products_component__WEBPACK_IMPORTED_MODULE_8__.ProductsComponent
  }, {
    path: 'settings/clients',
    component: _pages_clients_clients_component__WEBPACK_IMPORTED_MODULE_9__.ClientsComponent
  }, {
    path: 'settings/products',
    component: _pages_products_products_component__WEBPACK_IMPORTED_MODULE_8__.ProductsComponent
  }, {
    path: 'settings/users',
    component: _pages_users_users_component__WEBPACK_IMPORTED_MODULE_10__.UsersComponent
  },
  // Document URL
  {
    path: ':type/create',
    component: _pages_create_document_create_document_create_document_component__WEBPACK_IMPORTED_MODULE_13__.CreateDocumentComponent
  }, {
    path: ':type/list',
    component: _components_documments_listing_documments_listing_component__WEBPACK_IMPORTED_MODULE_11__.DocummentsListingComponent
  }, {
    path: ':type/edit/:id',
    component: _pages_edit_document_edit_document_edit_document_component__WEBPACK_IMPORTED_MODULE_12__.EditDocumentComponent
  }]
}, {
  path: 'login',
  component: _modules_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent,
  canActivate: [_services_Auth_LoginCanActivate_auth_guard_guard__WEBPACK_IMPORTED_MODULE_5__.LoginAuthGuard]
}, {
  path: 'logout',
  component: _modules_logout_logout_logout_component__WEBPACK_IMPORTED_MODULE_2__.LogoutComponent,
  canActivate: [_services_Auth_auth_guard_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard]
}, {
  path: 'register',
  component: _modules_registration_registration_component__WEBPACK_IMPORTED_MODULE_14__.RegistrationComponent,
  canActivate: [_services_Auth_LoginCanActivate_auth_guard_guard__WEBPACK_IMPORTED_MODULE_5__.LoginAuthGuard]
}, {
  path: 'reset-password',
  component: _modules_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_15__.ResetPasswordComponent,
  canActivate: [_services_Auth_LoginCanActivate_auth_guard_guard__WEBPACK_IMPORTED_MODULE_5__.LoginAuthGuard]
}, {
  path: '**',
  redirectTo: ''
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule.forRoot(routes, {}), _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule]
  });
})();

/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_SharedData_shared_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/SharedData/shared-data.service */ 50365);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/toast */ 29129);




class AppComponent {
  constructor(SharedDataService) {
    this.SharedDataService = SharedDataService;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_SharedData_shared_data_service__WEBPACK_IMPORTED_MODULE_0__.SharedDataService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 2,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, primeng_toast__WEBPACK_IMPORTED_MODULE_3__.Toast],
    styles: ["[_nghost-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBQ0oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG59Il19 */\n/*# sourceURL=webpack://./src/app/app.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFDSjtBQUNBLHdUQUF3VCIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _loading_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading.interceptor */ 19527);
/* harmony import */ var _services_Auth_AuthInterceptor_auth_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/Auth/AuthInterceptor/auth-interceptor.interceptor */ 86343);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _modules_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/main/main.component */ 8187);
/* harmony import */ var _modules_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/login/login.component */ 60744);
/* harmony import */ var _modules_main_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/main/header/header.component */ 85718);
/* harmony import */ var _modules_main_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/main/footer/footer.component */ 95044);
/* harmony import */ var _modules_main_menu_sidebar_menu_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @modules/main/menu-sidebar/menu-sidebar.component */ 86008);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @pages/dashboard/dashboard.component */ 24789);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_137__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _modules_main_header_messages_messages_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @modules/main/header/messages/messages.component */ 23649);
/* harmony import */ var _modules_main_header_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @modules/main/header/notifications/notifications.component */ 50125);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/common/locales/en */ 49137);
/* harmony import */ var _modules_main_header_user_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @modules/main/header/user/user.component */ 45112);
/* harmony import */ var _modules_main_header_language_language_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @modules/main/header/language/language.component */ 63081);
/* harmony import */ var _pages_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/main-menu/main-menu.component */ 42917);
/* harmony import */ var _pages_main_menu_sub_menu_sub_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/main-menu/sub-menu/sub-menu.component */ 63895);
/* harmony import */ var _components_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/menu-item/menu-item.component */ 41459);
/* harmony import */ var _modules_main_control_sidebar_control_sidebar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/main/control-sidebar/control-sidebar.component */ 7269);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_136__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _store_auth_reducer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./store/auth/reducer */ 7590);
/* harmony import */ var _store_ui_reducer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./store/ui/reducer */ 36555);
/* harmony import */ var _profabric_angular_components__WEBPACK_IMPORTED_MODULE_135__ = __webpack_require__(/*! @profabric/angular-components */ 9700);
/* harmony import */ var _components_sidebar_search_sidebar_search_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/sidebar-search/sidebar-search.component */ 93254);
/* harmony import */ var _pages_dashboard_chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @pages/dashboard/chartjs/chartjs.component */ 51649);
/* harmony import */ var _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/admin/admin.component */ 56601);
/* harmony import */ var _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/settings/settings.component */ 65814);
/* harmony import */ var _pages_products_products_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/products/products.component */ 97539);
/* harmony import */ var _pages_clients_clients_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/clients/clients.component */ 26546);
/* harmony import */ var _pages_users_users_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/users/users.component */ 31524);
/* harmony import */ var _components_add_client_modal_add_client_modal_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/add-client-modal/add-client-modal.component */ 58071);
/* harmony import */ var _components_documments_listing_documments_listing_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/documments-listing/documments-listing.component */ 34265);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! primeng/accordion */ 79854);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! primeng/autocomplete */ 75630);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! primeng/avatar */ 37063);
/* harmony import */ var primeng_avatargroup__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! primeng/avatargroup */ 11385);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! primeng/badge */ 52381);
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! primeng/breadcrumb */ 47298);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! primeng/button */ 76328);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! primeng/calendar */ 32547);
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! primeng/carousel */ 8707);
/* harmony import */ var primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! primeng/cascadeselect */ 78671);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! primeng/chart */ 62348);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! primeng/checkbox */ 40749);
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! primeng/chip */ 80287);
/* harmony import */ var primeng_chips__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! primeng/chips */ 65980);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! primeng/confirmdialog */ 60097);
/* harmony import */ var primeng_colorpicker__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! primeng/colorpicker */ 26303);
/* harmony import */ var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! primeng/contextmenu */ 55945);
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! primeng/dataview */ 81233);
/* harmony import */ var primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! primeng/virtualscroller */ 58476);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! primeng/dialog */ 1837);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! primeng/divider */ 1154);
/* harmony import */ var primeng_dock__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! primeng/dock */ 41706);
/* harmony import */ var primeng_dragdrop__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! primeng/dragdrop */ 92281);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! primeng/dropdown */ 38992);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! primeng/dynamicdialog */ 62648);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! primeng/fieldset */ 94619);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! primeng/fileupload */ 16193);
/* harmony import */ var primeng_galleria__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! primeng/galleria */ 70806);
/* harmony import */ var primeng_inplace__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! primeng/inplace */ 82116);
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! primeng/inputmask */ 51227);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! primeng/inputswitch */ 13585);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! primeng/inputnumber */ 87990);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! primeng/inputtextarea */ 71102);
/* harmony import */ var primeng_image__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! primeng/image */ 21478);
/* harmony import */ var primeng_knob__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! primeng/knob */ 74397);
/* harmony import */ var primeng_listbox__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! primeng/listbox */ 2210);
/* harmony import */ var primeng_megamenu__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! primeng/megamenu */ 66792);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! primeng/menu */ 60625);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! primeng/menubar */ 80552);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! primeng/message */ 73589);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! primeng/messages */ 58547);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! primeng/multiselect */ 30850);
/* harmony import */ var primeng_orderlist__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! primeng/orderlist */ 67397);
/* harmony import */ var primeng_organizationchart__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! primeng/organizationchart */ 95918);
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! primeng/overlaypanel */ 16664);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! primeng/paginator */ 42722);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! primeng/panel */ 24266);
/* harmony import */ var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! primeng/panelmenu */ 39028);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! primeng/password */ 68848);
/* harmony import */ var primeng_picklist__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! primeng/picklist */ 19238);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! primeng/progressbar */ 88395);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! primeng/radiobutton */ 69902);
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! primeng/rating */ 62415);
/* harmony import */ var primeng_scroller__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! primeng/scroller */ 73705);
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! primeng/scrollpanel */ 14250);
/* harmony import */ var primeng_scrolltop__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! primeng/scrolltop */ 68933);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! primeng/selectbutton */ 70205);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! primeng/sidebar */ 34179);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! primeng/skeleton */ 32712);
/* harmony import */ var primeng_slidemenu__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! primeng/slidemenu */ 40691);
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(/*! primeng/slider */ 14950);
/* harmony import */ var primeng_speeddial__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(/*! primeng/speeddial */ 19869);
/* harmony import */ var primeng_spinner__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(/*! primeng/spinner */ 65233);
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(/*! primeng/splitbutton */ 33650);
/* harmony import */ var primeng_splitter__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(/*! primeng/splitter */ 80330);
/* harmony import */ var primeng_steps__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(/*! primeng/steps */ 72420);
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(/*! primeng/tabmenu */ 67077);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(/*! primeng/tabview */ 79504);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_121__ = __webpack_require__(/*! primeng/tag */ 33042);
/* harmony import */ var primeng_terminal__WEBPACK_IMPORTED_MODULE_122__ = __webpack_require__(/*! primeng/terminal */ 39128);
/* harmony import */ var primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_123__ = __webpack_require__(/*! primeng/tieredmenu */ 51487);
/* harmony import */ var primeng_timeline__WEBPACK_IMPORTED_MODULE_124__ = __webpack_require__(/*! primeng/timeline */ 76687);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_125__ = __webpack_require__(/*! primeng/toast */ 29129);
/* harmony import */ var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_126__ = __webpack_require__(/*! primeng/togglebutton */ 95293);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_127__ = __webpack_require__(/*! primeng/toolbar */ 44575);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_128__ = __webpack_require__(/*! primeng/tooltip */ 24329);
/* harmony import */ var primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_129__ = __webpack_require__(/*! primeng/tristatecheckbox */ 61604);
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_130__ = __webpack_require__(/*! primeng/tree */ 93449);
/* harmony import */ var primeng_treeselect__WEBPACK_IMPORTED_MODULE_131__ = __webpack_require__(/*! primeng/treeselect */ 64016);
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_132__ = __webpack_require__(/*! primeng/treetable */ 92385);
/* harmony import */ var primeng_animate__WEBPACK_IMPORTED_MODULE_133__ = __webpack_require__(/*! primeng/animate */ 70498);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_134__ = __webpack_require__(/*! primeng/card */ 34357);
/* harmony import */ var primeng_blockui__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! primeng/blockui */ 40081);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! primeng/progressspinner */ 22901);
/* harmony import */ var _pages_edit_document_edit_document_edit_document_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/edit-document/edit-document/edit-document.component */ 66031);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_138__ = __webpack_require__(/*! @auth0/angular-jwt */ 4467);
/* harmony import */ var _modules_logout_logout_logout_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./modules/logout/logout/logout.component */ 23019);
/* harmony import */ var _pages_create_document_create_document_create_document_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/create-document/create-document/create-document.component */ 29603);
/* harmony import */ var _pages_create_document_create_billing_form_create_billing_form_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/create-document/create-billing-form/create-billing-form.component */ 34246);
/* harmony import */ var _pages_create_document_create_document_table_items_create_document_table_items_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/create-document/create-document-table-items/create-document-table-items.component */ 61503);
/* harmony import */ var _components_loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/loading/loading/loading.component */ 52353);
/* harmony import */ var _components_delete_delete_item_delete_item_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/delete/delete-item/delete-item.component */ 43189);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var _pages_edit_document_edit_billing_form_edit_billing_form_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/edit-document/edit-billing-form/edit-billing-form.component */ 88695);
/* harmony import */ var _pages_edit_document_edit_document_table_items_edit_document_table_items_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/edit-document/edit-document-table-items/edit-document-table-items.component */ 5519);
/* harmony import */ var _components_edit_client_modal_edit_client_modal_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/edit-client-modal/edit-client-modal.component */ 22434);
/* harmony import */ var _modules_registration_registration_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./modules/registration/registration.component */ 43891);
/* harmony import */ var _modules_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./modules/reset-password/reset-password.component */ 50978);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_139__ = __webpack_require__(/*! @angular/router */ 60124);







































// Import PrimeNG modules











































































































(0,_angular_common__WEBPACK_IMPORTED_MODULE_41__.registerLocaleData)(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_42__["default"], 'en-EN');
class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_43__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent, _components_documments_listing_documments_listing_component__WEBPACK_IMPORTED_MODULE_28__.DocummentsListingComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_43__["ɵɵdefineInjector"]({
    providers: [{
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_44__.HTTP_INTERCEPTORS,
      useClass: _loading_interceptor__WEBPACK_IMPORTED_MODULE_0__.LoadingInterceptor,
      multi: true
    }, primeng_api__WEBPACK_IMPORTED_MODULE_45__.ConfirmationService, primeng_api__WEBPACK_IMPORTED_MODULE_45__.MessageService, {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_44__.HTTP_INTERCEPTORS,
      useClass: _services_Auth_AuthInterceptor_auth_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_1__.AuthInterceptorInterceptor,
      multi: true
    }],
    imports: [primeng_avatar__WEBPACK_IMPORTED_MODULE_46__.AvatarModule, primeng_avatargroup__WEBPACK_IMPORTED_MODULE_47__.AvatarGroupModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_48__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_49__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_44__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_49__.ReactiveFormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_50__.BrowserAnimationsModule, primeng_accordion__WEBPACK_IMPORTED_MODULE_51__.AccordionModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_52__.AutoCompleteModule, primeng_badge__WEBPACK_IMPORTED_MODULE_53__.BadgeModule, primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_54__.BreadcrumbModule, primeng_blockui__WEBPACK_IMPORTED_MODULE_55__.BlockUIModule, primeng_button__WEBPACK_IMPORTED_MODULE_56__.ButtonModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_57__.CalendarModule, primeng_carousel__WEBPACK_IMPORTED_MODULE_58__.CarouselModule, primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_59__.CascadeSelectModule, primeng_chart__WEBPACK_IMPORTED_MODULE_60__.ChartModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_61__.CheckboxModule, primeng_chips__WEBPACK_IMPORTED_MODULE_62__.ChipsModule, primeng_chip__WEBPACK_IMPORTED_MODULE_63__.ChipModule, primeng_colorpicker__WEBPACK_IMPORTED_MODULE_64__.ColorPickerModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_65__.ConfirmDialogModule, primeng_contextmenu__WEBPACK_IMPORTED_MODULE_66__.ContextMenuModule, primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_67__.VirtualScrollerModule, primeng_dataview__WEBPACK_IMPORTED_MODULE_68__.DataViewModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_69__.DialogModule, primeng_divider__WEBPACK_IMPORTED_MODULE_70__.DividerModule, primeng_dock__WEBPACK_IMPORTED_MODULE_71__.DockModule, primeng_dragdrop__WEBPACK_IMPORTED_MODULE_72__.DragDropModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_73__.DropdownModule, primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_74__.DynamicDialogModule, primeng_fieldset__WEBPACK_IMPORTED_MODULE_75__.FieldsetModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_76__.FileUploadModule, primeng_galleria__WEBPACK_IMPORTED_MODULE_77__.GalleriaModule, primeng_inplace__WEBPACK_IMPORTED_MODULE_78__.InplaceModule, primeng_inputmask__WEBPACK_IMPORTED_MODULE_79__.InputMaskModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_80__.InputSwitchModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_81__.InputTextModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_82__.InputTextareaModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_83__.InputNumberModule, primeng_image__WEBPACK_IMPORTED_MODULE_84__.ImageModule, primeng_knob__WEBPACK_IMPORTED_MODULE_85__.KnobModule, primeng_listbox__WEBPACK_IMPORTED_MODULE_86__.ListboxModule, primeng_megamenu__WEBPACK_IMPORTED_MODULE_87__.MegaMenuModule, primeng_menu__WEBPACK_IMPORTED_MODULE_88__.MenuModule, primeng_menubar__WEBPACK_IMPORTED_MODULE_89__.MenubarModule, primeng_message__WEBPACK_IMPORTED_MODULE_90__.MessageModule, primeng_messages__WEBPACK_IMPORTED_MODULE_91__.MessagesModule, primeng_multiselect__WEBPACK_IMPORTED_MODULE_92__.MultiSelectModule, primeng_organizationchart__WEBPACK_IMPORTED_MODULE_93__.OrganizationChartModule, primeng_orderlist__WEBPACK_IMPORTED_MODULE_94__.OrderListModule, primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_95__.OverlayPanelModule, primeng_paginator__WEBPACK_IMPORTED_MODULE_96__.PaginatorModule, primeng_panel__WEBPACK_IMPORTED_MODULE_97__.PanelModule, primeng_panelmenu__WEBPACK_IMPORTED_MODULE_98__.PanelMenuModule, primeng_password__WEBPACK_IMPORTED_MODULE_99__.PasswordModule, primeng_picklist__WEBPACK_IMPORTED_MODULE_100__.PickListModule, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_101__.ProgressSpinnerModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_102__.ProgressBarModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_103__.RadioButtonModule, primeng_rating__WEBPACK_IMPORTED_MODULE_104__.RatingModule, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_105__.SelectButtonModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_106__.SidebarModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_107__.ScrollerModule, primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_108__.ScrollPanelModule, primeng_scrolltop__WEBPACK_IMPORTED_MODULE_109__.ScrollTopModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_110__.SkeletonModule, primeng_slidemenu__WEBPACK_IMPORTED_MODULE_111__.SlideMenuModule, primeng_slider__WEBPACK_IMPORTED_MODULE_112__.SliderModule, primeng_speeddial__WEBPACK_IMPORTED_MODULE_113__.SpeedDialModule, primeng_spinner__WEBPACK_IMPORTED_MODULE_114__.SpinnerModule, primeng_splitter__WEBPACK_IMPORTED_MODULE_115__.SplitterModule, primeng_splitbutton__WEBPACK_IMPORTED_MODULE_116__.SplitButtonModule, primeng_steps__WEBPACK_IMPORTED_MODULE_117__.StepsModule, primeng_table__WEBPACK_IMPORTED_MODULE_118__.TableModule, primeng_tabmenu__WEBPACK_IMPORTED_MODULE_119__.TabMenuModule, primeng_tabview__WEBPACK_IMPORTED_MODULE_120__.TabViewModule, primeng_tag__WEBPACK_IMPORTED_MODULE_121__.TagModule, primeng_terminal__WEBPACK_IMPORTED_MODULE_122__.TerminalModule, primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_123__.TieredMenuModule, primeng_timeline__WEBPACK_IMPORTED_MODULE_124__.TimelineModule, primeng_toast__WEBPACK_IMPORTED_MODULE_125__.ToastModule, primeng_togglebutton__WEBPACK_IMPORTED_MODULE_126__.ToggleButtonModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_127__.ToolbarModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_128__.TooltipModule, primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_129__.TriStateCheckboxModule, primeng_tree__WEBPACK_IMPORTED_MODULE_130__.TreeModule, primeng_treeselect__WEBPACK_IMPORTED_MODULE_131__.TreeSelectModule, primeng_treetable__WEBPACK_IMPORTED_MODULE_132__.TreeTableModule, primeng_animate__WEBPACK_IMPORTED_MODULE_133__.AnimateModule, primeng_card__WEBPACK_IMPORTED_MODULE_134__.CardModule, _profabric_angular_components__WEBPACK_IMPORTED_MODULE_135__.ProfabricComponentsModule, _angular_common__WEBPACK_IMPORTED_MODULE_41__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_48__.BrowserModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_136__.StoreModule.forRoot({
      auth: _store_auth_reducer__WEBPACK_IMPORTED_MODULE_18__.authReducer,
      ui: _store_ui_reducer__WEBPACK_IMPORTED_MODULE_19__.uiReducer
    }), _angular_common_http__WEBPACK_IMPORTED_MODULE_44__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_49__.FormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_49__.ReactiveFormsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_137__.ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true
    }), _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_138__.JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        }
        // allowedDomains: ['example.com'],
        // disallowedRoutes: ['example.com/unauthorized'],
      }
    })]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_43__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent, _modules_main_main_component__WEBPACK_IMPORTED_MODULE_4__.MainComponent, _modules_main_header_header_component__WEBPACK_IMPORTED_MODULE_6__.HeaderComponent, _modules_main_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent, _modules_main_menu_sidebar_menu_sidebar_component__WEBPACK_IMPORTED_MODULE_8__.MenuSidebarComponent, _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__.DashboardComponent, _modules_main_header_messages_messages_component__WEBPACK_IMPORTED_MODULE_10__.MessagesComponent, _modules_main_header_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_11__.NotificationsComponent, _modules_main_header_user_user_component__WEBPACK_IMPORTED_MODULE_12__.UserComponent, _modules_main_header_language_language_component__WEBPACK_IMPORTED_MODULE_13__.LanguageComponent, _pages_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_14__.MainMenuComponent, _pages_main_menu_sub_menu_sub_menu_component__WEBPACK_IMPORTED_MODULE_15__.SubMenuComponent, _components_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_16__.MenuItemComponent, _modules_main_control_sidebar_control_sidebar_component__WEBPACK_IMPORTED_MODULE_17__.ControlSidebarComponent, _components_sidebar_search_sidebar_search_component__WEBPACK_IMPORTED_MODULE_20__.SidebarSearchComponent, _pages_dashboard_chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_21__.ChartjsComponent, _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_22__.AdminComponent, _pages_products_products_component__WEBPACK_IMPORTED_MODULE_24__.ProductsComponent, _pages_clients_clients_component__WEBPACK_IMPORTED_MODULE_25__.ClientsComponent, _pages_users_users_component__WEBPACK_IMPORTED_MODULE_26__.UsersComponent, _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_23__.SettingsComponent, _components_add_client_modal_add_client_modal_component__WEBPACK_IMPORTED_MODULE_27__.AddClientModalComponent, _components_documments_listing_documments_listing_component__WEBPACK_IMPORTED_MODULE_28__.DocummentsListingComponent, _pages_edit_document_edit_document_edit_document_component__WEBPACK_IMPORTED_MODULE_29__.EditDocumentComponent, _modules_login_login_component__WEBPACK_IMPORTED_MODULE_5__.LoginComponent, _modules_logout_logout_logout_component__WEBPACK_IMPORTED_MODULE_30__.LogoutComponent, _pages_create_document_create_document_create_document_component__WEBPACK_IMPORTED_MODULE_31__.CreateDocumentComponent, _pages_create_document_create_billing_form_create_billing_form_component__WEBPACK_IMPORTED_MODULE_32__.CreateBillingFormComponent, _pages_create_document_create_document_table_items_create_document_table_items_component__WEBPACK_IMPORTED_MODULE_33__.CreateDocumentTableItemsComponent, _components_loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_34__.LoadingComponent, _components_delete_delete_item_delete_item_component__WEBPACK_IMPORTED_MODULE_35__.DeleteItemComponent, _pages_edit_document_edit_billing_form_edit_billing_form_component__WEBPACK_IMPORTED_MODULE_36__.EditBillingFormComponent, _pages_edit_document_edit_document_table_items_edit_document_table_items_component__WEBPACK_IMPORTED_MODULE_37__.EditDocumentTableItemsComponent, _components_edit_client_modal_edit_client_modal_component__WEBPACK_IMPORTED_MODULE_38__.EditClientModalComponent, _modules_registration_registration_component__WEBPACK_IMPORTED_MODULE_39__.RegistrationComponent, _modules_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_40__.ResetPasswordComponent],
    imports: [primeng_avatar__WEBPACK_IMPORTED_MODULE_46__.AvatarModule, primeng_avatargroup__WEBPACK_IMPORTED_MODULE_47__.AvatarGroupModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_48__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_49__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_44__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_49__.ReactiveFormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_50__.BrowserAnimationsModule, primeng_accordion__WEBPACK_IMPORTED_MODULE_51__.AccordionModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_52__.AutoCompleteModule, primeng_badge__WEBPACK_IMPORTED_MODULE_53__.BadgeModule, primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_54__.BreadcrumbModule, primeng_blockui__WEBPACK_IMPORTED_MODULE_55__.BlockUIModule, primeng_button__WEBPACK_IMPORTED_MODULE_56__.ButtonModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_57__.CalendarModule, primeng_carousel__WEBPACK_IMPORTED_MODULE_58__.CarouselModule, primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_59__.CascadeSelectModule, primeng_chart__WEBPACK_IMPORTED_MODULE_60__.ChartModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_61__.CheckboxModule, primeng_chips__WEBPACK_IMPORTED_MODULE_62__.ChipsModule, primeng_chip__WEBPACK_IMPORTED_MODULE_63__.ChipModule, primeng_colorpicker__WEBPACK_IMPORTED_MODULE_64__.ColorPickerModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_65__.ConfirmDialogModule, primeng_contextmenu__WEBPACK_IMPORTED_MODULE_66__.ContextMenuModule, primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_67__.VirtualScrollerModule, primeng_dataview__WEBPACK_IMPORTED_MODULE_68__.DataViewModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_69__.DialogModule, primeng_divider__WEBPACK_IMPORTED_MODULE_70__.DividerModule, primeng_dock__WEBPACK_IMPORTED_MODULE_71__.DockModule, primeng_dragdrop__WEBPACK_IMPORTED_MODULE_72__.DragDropModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_73__.DropdownModule, primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_74__.DynamicDialogModule, primeng_fieldset__WEBPACK_IMPORTED_MODULE_75__.FieldsetModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_76__.FileUploadModule, primeng_galleria__WEBPACK_IMPORTED_MODULE_77__.GalleriaModule, primeng_inplace__WEBPACK_IMPORTED_MODULE_78__.InplaceModule, primeng_inputmask__WEBPACK_IMPORTED_MODULE_79__.InputMaskModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_80__.InputSwitchModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_81__.InputTextModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_82__.InputTextareaModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_83__.InputNumberModule, primeng_image__WEBPACK_IMPORTED_MODULE_84__.ImageModule, primeng_knob__WEBPACK_IMPORTED_MODULE_85__.KnobModule, primeng_listbox__WEBPACK_IMPORTED_MODULE_86__.ListboxModule, primeng_megamenu__WEBPACK_IMPORTED_MODULE_87__.MegaMenuModule, primeng_menu__WEBPACK_IMPORTED_MODULE_88__.MenuModule, primeng_menubar__WEBPACK_IMPORTED_MODULE_89__.MenubarModule, primeng_message__WEBPACK_IMPORTED_MODULE_90__.MessageModule, primeng_messages__WEBPACK_IMPORTED_MODULE_91__.MessagesModule, primeng_multiselect__WEBPACK_IMPORTED_MODULE_92__.MultiSelectModule, primeng_organizationchart__WEBPACK_IMPORTED_MODULE_93__.OrganizationChartModule, primeng_orderlist__WEBPACK_IMPORTED_MODULE_94__.OrderListModule, primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_95__.OverlayPanelModule, primeng_paginator__WEBPACK_IMPORTED_MODULE_96__.PaginatorModule, primeng_panel__WEBPACK_IMPORTED_MODULE_97__.PanelModule, primeng_panelmenu__WEBPACK_IMPORTED_MODULE_98__.PanelMenuModule, primeng_password__WEBPACK_IMPORTED_MODULE_99__.PasswordModule, primeng_picklist__WEBPACK_IMPORTED_MODULE_100__.PickListModule, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_101__.ProgressSpinnerModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_102__.ProgressBarModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_103__.RadioButtonModule, primeng_rating__WEBPACK_IMPORTED_MODULE_104__.RatingModule, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_105__.SelectButtonModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_106__.SidebarModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_107__.ScrollerModule, primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_108__.ScrollPanelModule, primeng_scrolltop__WEBPACK_IMPORTED_MODULE_109__.ScrollTopModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_110__.SkeletonModule, primeng_slidemenu__WEBPACK_IMPORTED_MODULE_111__.SlideMenuModule, primeng_slider__WEBPACK_IMPORTED_MODULE_112__.SliderModule, primeng_speeddial__WEBPACK_IMPORTED_MODULE_113__.SpeedDialModule, primeng_spinner__WEBPACK_IMPORTED_MODULE_114__.SpinnerModule, primeng_splitter__WEBPACK_IMPORTED_MODULE_115__.SplitterModule, primeng_splitbutton__WEBPACK_IMPORTED_MODULE_116__.SplitButtonModule, primeng_steps__WEBPACK_IMPORTED_MODULE_117__.StepsModule, primeng_table__WEBPACK_IMPORTED_MODULE_118__.TableModule, primeng_tabmenu__WEBPACK_IMPORTED_MODULE_119__.TabMenuModule, primeng_tabview__WEBPACK_IMPORTED_MODULE_120__.TabViewModule, primeng_tag__WEBPACK_IMPORTED_MODULE_121__.TagModule, primeng_terminal__WEBPACK_IMPORTED_MODULE_122__.TerminalModule, primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_123__.TieredMenuModule, primeng_timeline__WEBPACK_IMPORTED_MODULE_124__.TimelineModule, primeng_toast__WEBPACK_IMPORTED_MODULE_125__.ToastModule, primeng_togglebutton__WEBPACK_IMPORTED_MODULE_126__.ToggleButtonModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_127__.ToolbarModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_128__.TooltipModule, primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_129__.TriStateCheckboxModule, primeng_tree__WEBPACK_IMPORTED_MODULE_130__.TreeModule, primeng_treeselect__WEBPACK_IMPORTED_MODULE_131__.TreeSelectModule, primeng_treetable__WEBPACK_IMPORTED_MODULE_132__.TreeTableModule, primeng_animate__WEBPACK_IMPORTED_MODULE_133__.AnimateModule, primeng_card__WEBPACK_IMPORTED_MODULE_134__.CardModule, _profabric_angular_components__WEBPACK_IMPORTED_MODULE_135__.ProfabricComponentsModule, _angular_common__WEBPACK_IMPORTED_MODULE_41__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_48__.BrowserModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_136__.StoreRootModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_44__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_49__.FormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_49__.ReactiveFormsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_137__.ToastrModule, _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_138__.JwtModule]
  });
})();
_angular_core__WEBPACK_IMPORTED_MODULE_43__["ɵɵsetComponentScope"](_modules_main_menu_sidebar_menu_sidebar_component__WEBPACK_IMPORTED_MODULE_8__.MenuSidebarComponent, function () {
  return [_angular_common__WEBPACK_IMPORTED_MODULE_41__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_139__.RouterLink, _profabric_angular_components__WEBPACK_IMPORTED_MODULE_135__.PfImage, _components_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_16__.MenuItemComponent, _components_sidebar_search_sidebar_search_component__WEBPACK_IMPORTED_MODULE_20__.SidebarSearchComponent];
}, []);

/***/ }),

/***/ 58071:
/*!***************************************************************************!*\
  !*** ./src/app/components/add-client-modal/add-client-modal.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddClientModalComponent": () => (/* binding */ AddClientModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 76328);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dialog */ 1837);










function AddClientModalComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This Field is Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AddClientModalComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This Field is Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AddClientModalComponent_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This Field is Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class AddClientModalComponent {
  constructor(http, fb, messageService) {
    this.http = http;
    this.fb = fb;
    this.messageService = messageService;
    this.clients = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.submitted = false;
    this.closeResult = '';
    this.visible = false;
  }
  resetForm() {
    this.ClientForm = this.fb.group({
      client_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
      client_ICE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
      client_city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]]
    });
  }
  ngOnInit() {
    this.resetForm();
  }
  showDialog() {
    this.visible = true;
  }
  Change() {
    console.log(this.ClientForm.getRawValue());
  }
  emitEvent(data) {
    this.clients.emit(data);
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.ClientForm.invalid) {
      alert('Form not complete please to check that all required field are filled');
    } else {
      let url = 'http://127.0.0.1:8000/api/clients/create/';
      this.http.post(url, this.ClientForm.getRawValue()).subscribe(response => {
        this.visible = false;
        this.resetForm();
        let data = {};
        data['clientData'] = response[0];
        data['selectedClient'] = response[1];
        this.emitEvent(data);
        this.messageService.add({
          severity: 'info',
          summary: 'Client Created',
          detail: 'Client has been created'
        });
      }, error => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: JSON.stringify(error.error)
        });
      });
    }
  }
  static #_ = this.ɵfac = function AddClientModalComponent_Factory(t) {
    return new (t || AddClientModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.MessageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AddClientModalComponent,
    selectors: [["app-add-client-modal"]],
    outputs: {
      clients: "clients"
    },
    decls: 21,
    vars: 8,
    consts: [["icon", "pi pi-plus", "styleClass", "p-button-success ", 1, "btn-default", 3, "click"], ["header", "add new client", 2, "width", "50vw", 3, "visible", "modal", "draggable", "resizable", "visibleChange"], [3, "formGroup", "submit", "change"], [1, "flex", "justify-content-center"], ["class", "text-danger", 4, "ngIf"], [1, "p-inputgroup", "pb-3"], [1, "p-inputgroup-addon"], [1, "pi", "pi-user"], ["pInputText", "", "placeholder", "Name", "formControlName", "client_name"], [1, "pi", "pi-building"], ["type", "text", "pInputText", "", "placeholder", "ICE", "formControlName", "client_ICE"], [1, "pi", "pi-home"], ["type", "text", "pInputText", "", "placeholder", "City", "formControlName", "client_city"], [1, "flex", "justify-content-center", "flex-wrap", 2, "text-align", "center"], ["label", "Save", "icon", "pi pi-check", "styleClass", "p-button-success", "type", "submit"], [1, "text-danger"]],
    template: function AddClientModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddClientModalComponent_Template_p_button_click_0_listener() {
          return ctx.showDialog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-dialog", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function AddClientModalComponent_Template_p_dialog_visibleChange_1_listener($event) {
          return ctx.visible = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AddClientModalComponent_Template_form_submit_2_listener() {
          return ctx.onSubmit();
        })("change", function AddClientModalComponent_Template_form_change_2_listener() {
          return ctx.Change();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AddClientModalComponent_span_4_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AddClientModalComponent_span_9_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5)(11, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AddClientModalComponent_span_14_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5)(16, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "p-button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.visible)("modal", true)("draggable", false)("resizable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.ClientForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.ClientForm.get("client_name").invalid || ctx.submitted) && (ctx.ClientForm.get("client_name").errors == null ? null : ctx.ClientForm.get("client_name").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.ClientForm.get("client_ICE").invalid || ctx.submitted) && (ctx.ClientForm.get("client_ICE").errors == null ? null : ctx.ClientForm.get("client_ICE").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.ClientForm.get("client_city").invalid || ctx.submitted) && (ctx.ClientForm.get("client_city").errors == null ? null : ctx.ClientForm.get("client_city").errors.required));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, primeng_button__WEBPACK_IMPORTED_MODULE_5__.Button, primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputText, primeng_dialog__WEBPACK_IMPORTED_MODULE_7__.Dialog],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtY2xpZW50LW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceURL=webpack://./src/app/components/add-client-modal/add-client-modal.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hZGQtY2xpZW50LW1vZGFsL2FkZC1jbGllbnQtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdMQUFnTCIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 43189:
/*!************************************************************************!*\
  !*** ./src/app/components/delete/delete-item/delete-item.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteItemComponent": () => (/* binding */ DeleteItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ 76328);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/confirmdialog */ 60097);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toast */ 29129);









const _c0 = function () {
  return {
    width: "50vw"
  };
};
class DeleteItemComponent {
  constructor(confirmationService, messageService, http) {
    this.confirmationService = confirmationService;
    this.messageService = messageService;
    this.http = http;
    this.data = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  emitEvent(data) {
    this.data.emit(data);
  }
  Delete() {
    let url = this.URL + this.Item_ID;
    this.http.delete(url).subscribe(response => {
      // display form values on success
      this.messageService.add({
        severity: 'info',
        summary: 'Confirmed',
        detail: this.Item_ID + ' deleted'
      });
      this.emitEvent(response);
      // location.reload()
    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: JSON.stringify(error.error)
      });
    });
  }
  confirmDelete() {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.Delete();
      },
      reject: type => {
        switch (type) {
          case primeng_api__WEBPACK_IMPORTED_MODULE_1__.ConfirmEventType.REJECT:
            this.messageService.add({
              severity: 'error',
              summary: 'Rejected',
              detail: 'You have rejected'
            });
            break;
          case primeng_api__WEBPACK_IMPORTED_MODULE_1__.ConfirmEventType.CANCEL:
            this.messageService.add({
              severity: 'warn',
              summary: 'Cancelled',
              detail: 'You have cancelled'
            });
            break;
        }
      }
    });
  }
  static #_ = this.ɵfac = function DeleteItemComponent_Factory(t) {
    return new (t || DeleteItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DeleteItemComponent,
    selectors: [["app-delete-item"]],
    inputs: {
      Item_ID: "Item_ID",
      URL: "URL"
    },
    outputs: {
      data: "data"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_1__.ConfirmationService])],
    decls: 3,
    vars: 3,
    consts: [["icon", "pi pi-trash", 1, "p-button-danger", "p-button-sm", "btn", 3, "click"]],
    template: function DeleteItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-toast")(1, "p-confirmDialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p-button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteItemComponent_Template_p_button_click_2_listener() {
          return ctx.confirmDelete();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
      }
    },
    dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_3__.Button, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_4__.ConfirmDialog, primeng_toast__WEBPACK_IMPORTED_MODULE_5__.Toast],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUtaXRlbS5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceURL=webpack://./src/app/components/delete/delete-item/delete-item.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9kZWxldGUvZGVsZXRlLWl0ZW0vZGVsZXRlLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHdLQUF3SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 34265:
/*!*******************************************************************************!*\
  !*** ./src/app/components/documments-listing/documments-listing.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocummentsListingComponent": () => (/* binding */ DocummentsListingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_fetch_doc_fetch_doc_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/fetch-doc/fetch-doc.service */ 79697);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_pdf_generator_pdf_generator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/pdf-generator/pdf-generator.service */ 17927);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var _services_Auth_JWTAuthService_jwt_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/Auth/JWTAuthService/jwt-auth-service.service */ 95928);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 76328);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dropdown */ 38992);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/tag */ 33042);
/* harmony import */ var _delete_delete_item_delete_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../delete/delete-item/delete-item.component */ 43189);















function DocummentsListingComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " List of Customers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function DocummentsListingComponent_ng_template_18_Template_input_input_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](17);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.filterGlobal($event.target.value, "contains"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function DocummentsListingComponent_ng_template_19_ng_template_23_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p-tag", 37);
  }
  if (rf & 2) {
    const option_r12 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r12.label)("severity", ctx_r11.getSeverity(option_r12.label));
  }
}
function DocummentsListingComponent_ng_template_19_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-dropdown", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onChange", function DocummentsListingComponent_ng_template_19_ng_template_23_Template_p_dropdown_onChange_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);
      const filter_r10 = restoredCtx.filterCallback;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](filter_r10($event.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DocummentsListingComponent_ng_template_19_ng_template_23_ng_template_1_Template, 1, 2, "ng-template", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const value_r9 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", value_r9)("options", ctx_r7.statuses);
  }
}
function DocummentsListingComponent_ng_template_19_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "th", 38)(2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " deposit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "p-sortIcon", 39)(5, "p-columnFilter", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "th", 41)(7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Rest ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "p-sortIcon", 42)(10, "p-columnFilter", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th", 43)(12, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " HT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "p-sortIcon", 44)(15, "p-columnFilter", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th", 45)(17, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, " TTC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "p-sortIcon", 46)(20, "p-columnFilter", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}
function DocummentsListingComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "p-tableHeaderCheckbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th", 19)(4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "p-sortIcon", 21)(7, "p-columnFilter", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th", 23)(9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " Client Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "p-sortIcon", 24)(12, "p-columnFilter", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th", 26)(14, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "p-sortIcon", 27)(17, "p-columnFilter", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "th", 29)(19, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "p-sortIcon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "p-columnFilter", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, DocummentsListingComponent_ng_template_19_ng_template_23_Template, 2, 2, "ng-template", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, DocummentsListingComponent_ng_template_19_ng_container_24_Template, 21, 0, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.TYPE === "invoices");
  }
}
function DocummentsListingComponent_ng_template_20_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td")(2, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "deposit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td")(6, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td")(10, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "HT");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td")(14, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "TTC");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const document_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", document_r15.deposit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", document_r15.Rest, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", document_r15.HT, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", document_r15.TTC, " ");
  }
}
function DocummentsListingComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 47)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "p-tableCheckbox", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td")(4, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td")(8, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Client Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td")(13, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "td")(18, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "p-tag", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, DocummentsListingComponent_ng_template_20_ng_container_21_Template, 17, 4, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "td", 51)(23, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DocummentsListingComponent_ng_template_20_Template_button_click_23_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const document_r15 = restoredCtx.$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r18.PrintPDF(document_r15.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "app-delete-item", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("data", function DocummentsListingComponent_ng_template_20_Template_app_delete_item_data_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r20.handleDocumentDeletion($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const document_r15 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", document_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", document_r15.document_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](document_r15.document_client.client_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](16, 10, document_r15.document_date, "MM/dd/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", document_r15.document_status)("severity", ctx_r3.getSeverity(document_r15.document_status));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.TYPE === "invoices");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate2"]("routerLink", "/", ctx_r3.TYPE, "/edit/", document_r15.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("Item_ID", document_r15.id);
  }
}
function DocummentsListingComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "No Document Found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
const _c0 = function () {
  return [10, 25, 50];
};
const _c1 = function () {
  return ["name", "country.name", "representative.name", "status"];
};
class DocummentsListingComponent {
  // Constructor function to inject services
  constructor(FetchDocService, route, pdfService, messageService, jwtHelper) {
    this.FetchDocService = FetchDocService;
    this.route = route;
    this.pdfService = pdfService;
    this.messageService = messageService;
    this.jwtHelper = jwtHelper;
    this.loading = true;
    this.activityValues = [0, 100]; // Initializing an array
  }
  // ngOnInit is a lifecycle hook that runs when the component is initialized
  ngOnInit() {
    // Subscribe to route params (when the URL changes)
    this.User = this.jwtHelper.getUser().username;
    this.route.params.subscribe(params => {
      this.TYPE = params['type']; // Retrieve 'type' parameter from the URL
      // Declare a variable to store the list of documents
      let documents_list;
      // Call the service to fetch documents
      this.FetchDocService.getAllDocs(this.TYPE).subscribe(response => {
        // Process the response data
        let HT;
        let Rest;
        let TTC;
        let TVA = 20;
        response.forEach(element => {
          let HT = 0;
          let TVA = 20;
          for (let i = 0; i < element.document_items.length; i++) {
            HT += element.document_items[i].total || 0;
          }
          let TTC = HT + HT * TVA / 100;
          element['HT'] = HT;
          element['Rest'] = HT - element.deposit;
          element['TTC'] = TTC;
        });
        // Assign data based on 'TYPE'
        if (this.TYPE == 'invoices') {
          this.invoices = response;
        } else {
          this.documents = response;
        }
      }, error => {
        this.messageService.add({
          severity: 'error',
          summary: 'Request Error',
          detail: "Server Request Error, Please Contact The Administrator"
        });
      });
    });
    // Initialize 'statuses' array
    this.statuses = [{
      label: 'paid',
      value: 'paid'
    }, {
      label: 'non-paid',
      value: 'non-paid'
    }, {
      label: 'uncompleted',
      value: 'uncompleted'
    }];
  }
  // Function to determine severity based on status
  getSeverity(status) {
    switch (status) {
      case 'non-paid':
        return 'danger';
      case 'paid':
        return 'success';
      case 'new':
        return 'info';
      case 'uncompleted':
        return 'warning';
      case 'renewal':
        return null;
      // No specific severity
    }
  }

  PrintPDF(ID) {
    let data = this.FetchDocService.getDocumentData(ID, this.TYPE).subscribe(respond => {
      this.pdfService.generateInvoice(respond);
      console.log(respond);
    }, error => {
      console.log(error);
    });
  }
  handleDocumentDeletion(data) {
    // Assign data based on 'TYPE'
    console.log('o a7san walid o walid o a7san walid', data);
    if (this.TYPE == 'invoices') {
      this.invoices = data;
    } else {
      this.documents = data;
    }
  }
  static #_ = this.ɵfac = function DocummentsListingComponent_Factory(t) {
    return new (t || DocummentsListingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_fetch_doc_fetch_doc_service__WEBPACK_IMPORTED_MODULE_0__.FetchDocService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_pdf_generator_pdf_generator_service__WEBPACK_IMPORTED_MODULE_1__.PdfGeneratorService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_Auth_JWTAuthService_jwt_auth_service_service__WEBPACK_IMPORTED_MODULE_2__.JwtAuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: DocummentsListingComponent,
    selectors: [["app-documments-listing"]],
    decls: 22,
    vars: 17,
    consts: [[1, "content-header"], [1, "container-fluid"], [1, "row", "mb-2"], [1, "col-sm-6"], [2, "font-weight", "bold"], [1, "content"], [1, "card"], [1, "card-body"], ["dataKey", "id", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "value", "selection", "rowHover", "rows", "showCurrentPageReport", "rowsPerPageOptions", "paginator", "filterDelay", "globalFilterFields", "selectionChange"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "table-header"], [1, "p-input-icon-left"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Global Search", 3, "input"], [2, "width", "4rem"], ["pSortableColumn", "document_number", 2, "min-width", "5rem"], [1, "flex", "justify-content-between", "align-items-center"], ["field", "document_number"], ["type", "text", "field", "document_number", "display", "menu", 1, "ml-auto"], ["pSortableColumn", "document_client", 2, "min-width", "14rem"], ["field", "document_client"], ["type", "text", "field", "document_client", "display", "menu", 1, "ml-auto"], ["pSortableColumn", "document_date", 2, "min-width", "5rem"], ["field", "document_date"], ["type", "date", "field", "document_date", "display", "menu", 1, "ml-auto"], ["pSortableColumn", "status", 2, "min-width", "5rem"], ["field", "status"], ["field", "status", "matchMode", "equals", "display", "menu", 1, "ml-auto"], ["pTemplate", "filter"], [4, "ngIf"], [2, "width", "10rem"], ["placeholder", "Any", 3, "ngModel", "options", "onChange"], ["pTemplate", "item"], [3, "value", "severity"], ["pSortableColumn", "deposit", 2, "min-width", "5rem"], ["field", "deposit"], ["type", "number", "field", "deposit", "display", "menu", 1, "ml-auto"], ["pSortableColumn", "Rest", 2, "min-width", "5rem"], ["field", "Rest"], ["pSortableColumn", "HT", 2, "min-width", "5rem"], ["field", "HT"], ["pSortableColumn", "TTC", 2, "min-width", "5rem"], ["field", "TTC"], [1, "p-selectable-row"], [3, "value"], [1, "p-column-title"], [1, "ml-1", "vertical-align-middle"], [2, "text-align", "center"], ["pButton", "", "type", "button", "icon", "pi pi-eye", 1, "p-button-warning", "p-button-sm", "btn", 3, "click"], [3, "routerLink"], ["pButton", "", "type", "button", "icon", "pi pi-file-edit", 1, "p-button-secondary", "btn", "p-button-sm"], ["URL", "http://127.0.0.1:8000/api/documents/delete/", 3, "Item_ID", "data"], ["colspan", "8"]],
    template: function DocummentsListingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1")(5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Welcome to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " listing page ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "section", 5)(14, "div", 6)(15, "div", 7)(16, "p-table", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function DocummentsListingComponent_Template_p_table_selectionChange_16_listener($event) {
          return ctx.selectedCustomers = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, DocummentsListingComponent_ng_template_18_Template, 5, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, DocummentsListingComponent_ng_template_19_Template, 27, 1, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, DocummentsListingComponent_ng_template_20_Template, 27, 13, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, DocummentsListingComponent_ng_template_21_Template, 3, 0, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 11, ctx.User));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 13, ctx.TYPE));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.TYPE === "invoices" ? ctx.invoices : ctx.documents)("selection", ctx.selectedCustomers)("rowHover", true)("rows", 10)("showCurrentPageReport", true)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](15, _c0))("paginator", true)("filterDelay", 0)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](16, _c1));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__.InputText, primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__.Dropdown, primeng_table__WEBPACK_IMPORTED_MODULE_12__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_12__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_12__.SortIcon, primeng_table__WEBPACK_IMPORTED_MODULE_12__.TableCheckbox, primeng_table__WEBPACK_IMPORTED_MODULE_12__.TableHeaderCheckbox, primeng_table__WEBPACK_IMPORTED_MODULE_12__.ColumnFilter, primeng_tag__WEBPACK_IMPORTED_MODULE_13__.Tag, _delete_delete_item_delete_item_component__WEBPACK_IMPORTED_MODULE_3__.DeleteItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
    styles: ["[_nghost-%COMP%]     {\n  \n}\n[_nghost-%COMP%]     .p-paginator .p-paginator-current {\n  margin-left: auto;\n}\n[_nghost-%COMP%]     .p-progressbar {\n  height: 0.5rem;\n  background-color: #D8DADC;\n}\n[_nghost-%COMP%]     .p-progressbar .p-progressbar-value {\n  background-color: #607D8B;\n}\n[_nghost-%COMP%]     .table-header {\n  display: flex;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]     .p-calendar .p-datepicker {\n  min-width: 25rem;\n}\n[_nghost-%COMP%]     .p-calendar .p-datepicker td {\n  font-weight: 400;\n}\n[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-header {\n  padding: 1rem;\n  text-align: left;\n  font-size: 1.5rem;\n}\n[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-paginator {\n  padding: 1rem;\n}\n[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-thead > tr > th {\n  text-align: left;\n}\n[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td {\n  cursor: auto;\n}\n[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-dropdown-label:not(.p-placeholder) {\n  text-transform: uppercase;\n}\n[_nghost-%COMP%]     .p-w-100 {\n  width: 100%;\n}\n[_nghost-%COMP%]     .p-datatable-customers .p-datatable-tbody > tr > td .p-column-title {\n  display: none;\n}\n\n@media screen and (max-width: 960px) {\n  [_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-thead > tr > th, [_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tfoot > tr > td {\n    display: none !important;\n  }\n  [_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tbody > tr {\n    border-bottom: 1px solid var(--layer-2);\n  }\n  [_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td {\n    text-align: left;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    border: 0 none;\n  }\n  [_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td .p-column-title {\n    min-width: 30%;\n    display: inline-block;\n    font-weight: bold;\n  }\n  [_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td p-progressbar {\n    width: 100%;\n  }\n  [_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td:last-child {\n    border-bottom: 1px solid var(--surface-d);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtbWVudHMtbGlzdGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQXlESSxlQUFBO0FBdkRKO0FBQVE7RUFDSSxpQkFBQTtBQUVaO0FBRUk7RUFDSSxjQUFBO0VBQ0EseUJBQUE7QUFBUjtBQUVRO0VBQ0kseUJBQUE7QUFBWjtBQUlJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBRlI7QUFLSTtFQUNJLGdCQUFBO0FBSFI7QUFLUTtFQUNJLGdCQUFBO0FBSFo7QUFRUTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBTlo7QUFTUTtFQUNJLGFBQUE7QUFQWjtBQVVRO0VBQ0ksZ0JBQUE7QUFSWjtBQVdRO0VBQ0ksWUFBQTtBQVRaO0FBWVE7RUFDSSx5QkFBQTtBQVZaO0FBY0k7RUFDSSxXQUFBO0FBWlI7QUFnQkk7RUFDSSxhQUFBO0FBZFI7O0FBa0JBO0VBS2dCOztJQUVJLHdCQUFBO0VBbkJsQjtFQXNCYztJQUNJLHVDQUFBO0VBcEJsQjtFQXNCa0I7SUFDSSxnQkFBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxjQUFBO0VBcEJ0QjtFQXNCc0I7SUFDSSxjQUFBO0lBQ0EscUJBQUE7SUFDQSxpQkFBQTtFQXBCMUI7RUF1QnNCO0lBQ0ksV0FBQTtFQXJCMUI7RUF3QnNCO0lBQ0kseUNBQUE7RUF0QjFCO0FBQ0YiLCJmaWxlIjoiZG9jdW1tZW50cy1saXN0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIHtcbiAgLyogUmVzcG9uc2l2ZSAqL1xufVxuOmhvc3QgOjpuZy1kZWVwIC5wLXBhZ2luYXRvciAucC1wYWdpbmF0b3ItY3VycmVudCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5wLXByb2dyZXNzYmFyIHtcbiAgaGVpZ2h0OiAwLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNEOERBREM7XG59XG46aG9zdCA6Om5nLWRlZXAgLnAtcHJvZ3Jlc3NiYXIgLnAtcHJvZ3Jlc3NiYXItdmFsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3RDhCO1xufVxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG46aG9zdCA6Om5nLWRlZXAgLnAtY2FsZW5kYXIgLnAtZGF0ZXBpY2tlciB7XG4gIG1pbi13aWR0aDogMjVyZW07XG59XG46aG9zdCA6Om5nLWRlZXAgLnAtY2FsZW5kYXIgLnAtZGF0ZXBpY2tlciB0ZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG46aG9zdCA6Om5nLWRlZXAgLnAtZGF0YXRhYmxlLnAtZGF0YXRhYmxlLWN1c3RvbWVycyAucC1kYXRhdGFibGUtaGVhZGVyIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG46aG9zdCA6Om5nLWRlZXAgLnAtZGF0YXRhYmxlLnAtZGF0YXRhYmxlLWN1c3RvbWVycyAucC1wYWdpbmF0b3Ige1xuICBwYWRkaW5nOiAxcmVtO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5wLWRhdGF0YWJsZS5wLWRhdGF0YWJsZS1jdXN0b21lcnMgLnAtZGF0YXRhYmxlLXRoZWFkID4gdHIgPiB0aCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLnAtZGF0YXRhYmxlLnAtZGF0YXRhYmxlLWN1c3RvbWVycyAucC1kYXRhdGFibGUtdGJvZHkgPiB0ciA+IHRkIHtcbiAgY3Vyc29yOiBhdXRvO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5wLWRhdGF0YWJsZS5wLWRhdGF0YWJsZS1jdXN0b21lcnMgLnAtZHJvcGRvd24tbGFiZWw6bm90KC5wLXBsYWNlaG9sZGVyKSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG46aG9zdCA6Om5nLWRlZXAgLnAtdy0xMDAge1xuICB3aWR0aDogMTAwJTtcbn1cbjpob3N0IDo6bmctZGVlcCAucC1kYXRhdGFibGUtY3VzdG9tZXJzIC5wLWRhdGF0YWJsZS10Ym9keSA+IHRyID4gdGQgLnAtY29sdW1uLXRpdGxlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgOmhvc3QgOjpuZy1kZWVwIC5wLWRhdGF0YWJsZS5wLWRhdGF0YWJsZS1jdXN0b21lcnMgLnAtZGF0YXRhYmxlLXRoZWFkID4gdHIgPiB0aCxcbiAgOmhvc3QgOjpuZy1kZWVwIC5wLWRhdGF0YWJsZS5wLWRhdGF0YWJsZS1jdXN0b21lcnMgLnAtZGF0YXRhYmxlLXRmb290ID4gdHIgPiB0ZCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIDpob3N0IDo6bmctZGVlcCAucC1kYXRhdGFibGUucC1kYXRhdGFibGUtY3VzdG9tZXJzIC5wLWRhdGF0YWJsZS10Ym9keSA+IHRyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbGF5ZXItMik7XG4gIH1cbiAgOmhvc3QgOjpuZy1kZWVwIC5wLWRhdGF0YWJsZS5wLWRhdGF0YWJsZS1jdXN0b21lcnMgLnAtZGF0YXRhYmxlLXRib2R5ID4gdHIgPiB0ZCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAwIG5vbmU7XG4gIH1cbiAgOmhvc3QgOjpuZy1kZWVwIC5wLWRhdGF0YWJsZS5wLWRhdGF0YWJsZS1jdXN0b21lcnMgLnAtZGF0YXRhYmxlLXRib2R5ID4gdHIgPiB0ZCAucC1jb2x1bW4tdGl0bGUge1xuICAgIG1pbi13aWR0aDogMzAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICA6aG9zdCA6Om5nLWRlZXAgLnAtZGF0YXRhYmxlLnAtZGF0YXRhYmxlLWN1c3RvbWVycyAucC1kYXRhdGFibGUtdGJvZHkgPiB0ciA+IHRkIHAtcHJvZ3Jlc3NiYXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIDpob3N0IDo6bmctZGVlcCAucC1kYXRhdGFibGUucC1kYXRhdGFibGUtY3VzdG9tZXJzIC5wLWRhdGF0YWJsZS10Ym9keSA+IHRyID4gdGQ6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtZCk7XG4gIH1cbn0iXX0= */\n/*# sourceURL=webpack://./src/app/components/documments-listing/documments-listing.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9kb2N1bW1lbnRzLWxpc3RpbmcvZG9jdW1tZW50cy1saXN0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBeURJLGVBQUE7QUF2REo7QUFBUTtFQUNJLGlCQUFBO0FBRVo7QUFFSTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtBQUFSO0FBRVE7RUFDSSx5QkFBQTtBQUFaO0FBSUk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFGUjtBQUtJO0VBQ0ksZ0JBQUE7QUFIUjtBQUtRO0VBQ0ksZ0JBQUE7QUFIWjtBQVFRO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFOWjtBQVNRO0VBQ0ksYUFBQTtBQVBaO0FBVVE7RUFDSSxnQkFBQTtBQVJaO0FBV1E7RUFDSSxZQUFBO0FBVFo7QUFZUTtFQUNJLHlCQUFBO0FBVlo7QUFjSTtFQUNJLFdBQUE7QUFaUjtBQWdCSTtFQUNJLGFBQUE7QUFkUjs7QUFrQkE7RUFLZ0I7O0lBRUksd0JBQUE7RUFuQmxCO0VBc0JjO0lBQ0ksdUNBQUE7RUFwQmxCO0VBc0JrQjtJQUNJLGdCQUFBO0lBQ0EsV0FBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLGNBQUE7RUFwQnRCO0VBc0JzQjtJQUNJLGNBQUE7SUFDQSxxQkFBQTtJQUNBLGlCQUFBO0VBcEIxQjtFQXVCc0I7SUFDSSxXQUFBO0VBckIxQjtFQXdCc0I7SUFDSSx5Q0FBQTtFQXRCMUI7QUFDRjtBQUNBLGc3SEFBZzdIIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIHtcbiAgLyogUmVzcG9uc2l2ZSAqL1xufVxuOmhvc3QgOjpuZy1kZWVwIC5wLXBhZ2luYXRvciAucC1wYWdpbmF0b3ItY3VycmVudCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5wLXByb2dyZXNzYmFyIHtcbiAgaGVpZ2h0OiAwLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNEOERBREM7XG59XG46aG9zdCA6Om5nLWRlZXAgLnAtcHJvZ3Jlc3NiYXIgLnAtcHJvZ3Jlc3NiYXItdmFsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3RDhCO1xufVxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG46aG9zdCA6Om5nLWRlZXAgLnAtY2FsZW5kYXIgLnAtZGF0ZXBpY2tlciB7XG4gIG1pbi13aWR0aDogMjVyZW07XG59XG46aG9zdCA6Om5nLWRlZXAgLnAtY2FsZW5kYXIgLnAtZGF0ZXBpY2tlciB0ZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG46aG9zdCA6Om5nLWRlZXAgLnAtZGF0YXRhYmxlLnAtZGF0YXRhYmxlLWN1c3RvbWVycyAucC1kYXRhdGFibGUtaGVhZGVyIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG46aG9zdCA6Om5nLWRlZXAgLnAtZGF0YXRhYmxlLnAtZGF0YXRhYmxlLWN1c3RvbWVycyAucC1wYWdpbmF0b3Ige1xuICBwYWRkaW5nOiAxcmVtO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5wLWRhdGF0YWJsZS5wLWRhdGF0YWJsZS1jdXN0b21lcnMgLnAtZGF0YXRhYmxlLXRoZWFkID4gdHIgPiB0aCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLnAtZGF0YXRhYmxlLnAtZGF0YXRhYmxlLWN1c3RvbWVycyAucC1kYXRhdGFibGUtdGJvZHkgPiB0ciA+IHRkIHtcbiAgY3Vyc29yOiBhdXRvO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5wLWRhdGF0YWJsZS5wLWRhdGF0YWJsZS1jdXN0b21lcnMgLnAtZHJvcGRvd24tbGFiZWw6bm90KC5wLXBsYWNlaG9sZGVyKSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG46aG9zdCA6Om5nLWRlZXAgLnAtdy0xMDAge1xuICB3aWR0aDogMTAwJTtcbn1cbjpob3N0IDo6bmctZGVlcCAucC1kYXRhdGFibGUtY3VzdG9tZXJzIC5wLWRhdGF0YWJsZS10Ym9keSA+IHRyID4gdGQgLnAtY29sdW1uLXRpdGxlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgOmhvc3QgOjpuZy1kZWVwIC5wLWRhdGF0YWJsZS5wLWRhdGF0YWJsZS1jdXN0b21lcnMgLnAtZGF0YXRhYmxlLXRoZWFkID4gdHIgPiB0aCxcbiAgOmhvc3QgOjpuZy1kZWVwIC5wLWRhdGF0YWJsZS5wLWRhdGF0YWJsZS1jdXN0b21lcnMgLnAtZGF0YXRhYmxlLXRmb290ID4gdHIgPiB0ZCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIDpob3N0IDo6bmctZGVlcCAucC1kYXRhdGFibGUucC1kYXRhdGFibGUtY3VzdG9tZXJzIC5wLWRhdGF0YWJsZS10Ym9keSA+IHRyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbGF5ZXItMik7XG4gIH1cbiAgOmhvc3QgOjpuZy1kZWVwIC5wLWRhdGF0YWJsZS5wLWRhdGF0YWJsZS1jdXN0b21lcnMgLnAtZGF0YXRhYmxlLXRib2R5ID4gdHIgPiB0ZCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAwIG5vbmU7XG4gIH1cbiAgOmhvc3QgOjpuZy1kZWVwIC5wLWRhdGF0YWJsZS5wLWRhdGF0YWJsZS1jdXN0b21lcnMgLnAtZGF0YXRhYmxlLXRib2R5ID4gdHIgPiB0ZCAucC1jb2x1bW4tdGl0bGUge1xuICAgIG1pbi13aWR0aDogMzAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICA6aG9zdCA6Om5nLWRlZXAgLnAtZGF0YXRhYmxlLnAtZGF0YXRhYmxlLWN1c3RvbWVycyAucC1kYXRhdGFibGUtdGJvZHkgPiB0ciA+IHRkIHAtcHJvZ3Jlc3NiYXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIDpob3N0IDo6bmctZGVlcCAucC1kYXRhdGFibGUucC1kYXRhdGFibGUtY3VzdG9tZXJzIC5wLWRhdGF0YWJsZS10Ym9keSA+IHRyID4gdGQ6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtZCk7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 22434:
/*!*****************************************************************************!*\
  !*** ./src/app/components/edit-client-modal/edit-client-modal.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditClientModalComponent": () => (/* binding */ EditClientModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _services_SharedData_shared_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/SharedData/shared-data.service */ 50365);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 76328);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dialog */ 1837);












function EditClientModalComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "This Field is Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function EditClientModalComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This Field is Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function EditClientModalComponent_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This Field is Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class EditClientModalComponent {
  constructor(http, fb, SharedDataService, messageService) {
    this.http = http;
    this.fb = fb;
    this.SharedDataService = SharedDataService;
    this.messageService = messageService;
    this.clients = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.submitted = false;
    this.closeResult = '';
    this.visible = false;
  }
  resetForm() {
    this.ClientForm = this.fb.group({
      client_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      client_ICE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      client_city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
    });
  }
  ngOnInit() {
    this.resetForm();
  }
  showDialog() {
    this.visible = true;
    let url = "http://127.0.0.1:8000/api/clients/" + this.Item_ID;
    this.http.get(url).subscribe(response => {
      // this.visible = false;
      this.ClientForm.controls['client_name'].setValue(response.client_name);
      this.ClientForm.controls['client_ICE'].setValue(response.client_ICE);
      this.ClientForm.controls['client_city'].setValue(response.client_city);
    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: JSON.stringify(error.error)
      });
    });
  }
  Change() {
    let data = this.ClientForm.getRawValue();
    let url = "http://127.0.0.1:8000/api/clients/update/" + this.Item_ID;
    this.http.put(url, data).subscribe(response => {
      // this.visible = false;
      this.messageService.add({
        severity: 'info',
        summary: 'Saved',
        detail: 'Client Informations Saved Successfully'
      });
    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: JSON.stringify(error.error)
      });
    });
  }
  static #_ = this.ɵfac = function EditClientModalComponent_Factory(t) {
    return new (t || EditClientModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_SharedData_shared_data_service__WEBPACK_IMPORTED_MODULE_0__.SharedDataService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.MessageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: EditClientModalComponent,
    selectors: [["app-edit-client-modal"]],
    inputs: {
      Item_ID: "Item_ID",
      URL: "URL"
    },
    outputs: {
      clients: "clients"
    },
    decls: 19,
    vars: 8,
    consts: [["pButton", "", "type", "button", "icon", "pi pi-file-edit", 1, "p-button-secondary", "btn", 3, "click"], ["header", "Edit Client", 2, "width", "50vw", 3, "visible", "modal", "draggable", "resizable", "visibleChange"], [3, "formGroup", "change"], [1, "flex", "justify-content-center"], ["class", "text-danger", 4, "ngIf"], [1, "p-inputgroup", "pb-3"], [1, "p-inputgroup-addon"], [1, "pi", "pi-user"], ["pInputText", "", "placeholder", "Name", "formControlName", "client_name"], [1, "pi", "pi-building"], ["type", "text", "pInputText", "", "placeholder", "ICE", "formControlName", "client_ICE"], [1, "pi", "pi-home"], ["type", "text", "pInputText", "", "placeholder", "City", "formControlName", "client_city"], [1, "text-danger"]],
    template: function EditClientModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditClientModalComponent_Template_button_click_0_listener() {
          return ctx.showDialog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p-dialog", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function EditClientModalComponent_Template_p_dialog_visibleChange_1_listener($event) {
          return ctx.visible = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EditClientModalComponent_Template_form_change_2_listener() {
          return ctx.Change();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, EditClientModalComponent_span_4_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5)(6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, EditClientModalComponent_span_9_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5)(11, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, EditClientModalComponent_span_14_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 5)(16, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", ctx.visible)("modal", true)("draggable", false)("resizable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.ClientForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.ClientForm.get("client_name").invalid || ctx.submitted) && (ctx.ClientForm.get("client_name").errors == null ? null : ctx.ClientForm.get("client_name").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.ClientForm.get("client_ICE").invalid || ctx.submitted) && (ctx.ClientForm.get("client_ICE").errors == null ? null : ctx.ClientForm.get("client_ICE").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.ClientForm.get("client_city").invalid || ctx.submitted) && (ctx.ClientForm.get("client_city").errors == null ? null : ctx.ClientForm.get("client_city").errors.required));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, primeng_dialog__WEBPACK_IMPORTED_MODULE_8__.Dialog],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWNsaWVudC1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceURL=webpack://./src/app/components/edit-client-modal/edit-client-modal.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9lZGl0LWNsaWVudC1tb2RhbC9lZGl0LWNsaWVudC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0xBQWdMIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 52353:
/*!*****************************************************************!*\
  !*** ./src/app/components/loading/loading/loading.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingComponent": () => (/* binding */ LoadingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/loading/loading.service */ 98982);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/progressspinner */ 22901);




function LoadingComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "p-progressSpinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class LoadingComponent {
  constructor(loadingService) {
    this.loadingService = loadingService;
  }
  static #_ = this.ɵfac = function LoadingComponent_Factory(t) {
    return new (t || LoadingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_0__.LoadingService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: LoadingComponent,
    selectors: [["app-loading"]],
    decls: 1,
    vars: 1,
    consts: [["class", "progress-spinner", 4, "ngIf"], [1, "progress-spinner"]],
    template: function LoadingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LoadingComponent_div_0_Template, 2, 0, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loadingService.getLoading());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_3__.ProgressSpinner],
    styles: [".progress-spinner[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 2000;\n  height: 2em;\n  width: 2em;\n  overflow: show;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n\n.progress-spinner[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.53);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FBQ0o7O0FBRUEsd0JBQUE7QUFDQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtBQUNKIiwiZmlsZSI6ImxvYWRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZ3Jlc3Mtc3Bpbm5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjAwMDtcbiAgaGVpZ2h0OiAyZW07XG4gIHdpZHRoOiAyZW07XG4gIG92ZXJmbG93OiBzaG93O1xuICBtYXJnaW46IGF1dG87XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cblxuLyogVHJhbnNwYXJlbnQgT3ZlcmxheSAqL1xuLnByb2dyZXNzLXNwaW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTMpO1xufSJdfQ== */\n/*# sourceURL=webpack://./src/app/components/loading/loading/loading.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sb2FkaW5nL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUFDSjs7QUFFQSx3QkFBQTtBQUNBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO0FBQ0o7QUFDQSx3Z0NBQXdnQyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9ncmVzcy1zcGlubmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyMDAwO1xuICBoZWlnaHQ6IDJlbTtcbiAgd2lkdGg6IDJlbTtcbiAgb3ZlcmZsb3c6IHNob3c7XG4gIG1hcmdpbjogYXV0bztcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4vKiBUcmFuc3BhcmVudCBPdmVybGF5ICovXG4ucHJvZ3Jlc3Mtc3Bpbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41Myk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 25166:
/*!**************************************************************!*\
  !*** ./src/app/components/menu-item/menu-item.animations.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openCloseAnimation": () => (/* binding */ openCloseAnimation),
/* harmony export */   "rotateAnimation": () => (/* binding */ rotateAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 24851);

const TRANSITION_DURATION = 250;
const openCloseAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('openClose', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('true', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  height: _angular_animations__WEBPACK_IMPORTED_MODULE_0__.AUTO_STYLE
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('false', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  height: 0
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('false <=> true', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(`${TRANSITION_DURATION}ms ease-in`))]);
const rotateAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('rotate', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('true', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'rotate(90deg)'
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('false <=> true', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(`${TRANSITION_DURATION}ms ease-out`))]);

/***/ }),

/***/ 41459:
/*!*************************************************************!*\
  !*** ./src/app/components/menu-item/menu-item.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuItemComponent": () => (/* binding */ MenuItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var _menu_item_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-item.animations */ 25166);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);






function MenuItemComponent_i_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 3);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rotate", ctx_r0.isMenuExtended);
  }
}
function MenuItemComponent_ul_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 4)(1, "li", 5)(2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@openClose", ctx_r1.isMenuExtended);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("routerLink", item_r2.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("nav-icon ", item_r2.iconClasses, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.name);
  }
}
const _c0 = function (a0) {
  return {
    active: a0
  };
};
class MenuItemComponent {
  constructor(router) {
    this.router = router;
    this.menuItem = null;
    this.isExpandable = false;
    this.isNavItem = true;
    this.isMenuExtended = false;
    this.isMainActive = false;
    this.isOneOfChildrenActive = false;
  }
  ngOnInit() {
    if (this.menuItem && this.menuItem.children && this.menuItem.children.length > 0) {
      this.isExpandable = true;
    }
    this.calculateIsActive(this.router.url);
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd)).subscribe(event => {
      this.calculateIsActive(event.url);
    });
  }
  handleMainMenuAction() {
    if (this.isExpandable) {
      this.toggleMenu();
      return;
    }
    this.router.navigate(this.menuItem.path);
  }
  toggleMenu() {
    this.isMenuExtended = !this.isMenuExtended;
  }
  calculateIsActive(url) {
    this.isMainActive = false;
    this.isOneOfChildrenActive = false;
    if (this.isExpandable) {
      this.menuItem.children.forEach(item => {
        if (item.path[0] === url) {
          this.isOneOfChildrenActive = true;
          this.isMenuExtended = true;
        }
      });
    } else if (this.menuItem.path[0] === url) {
      this.isMainActive = true;
    }
    if (!this.isMainActive && !this.isOneOfChildrenActive) {
      this.isMenuExtended = false;
    }
  }
  static #_ = this.ɵfac = function MenuItemComponent_Factory(t) {
    return new (t || MenuItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MenuItemComponent,
    selectors: [["app-menu-item"]],
    hostVars: 4,
    hostBindings: function MenuItemComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("nav-item", ctx.isNavItem)("menu-open", ctx.isMenuExtended);
      }
    },
    inputs: {
      menuItem: "menuItem"
    },
    decls: 6,
    vars: 12,
    consts: [[3, "ngClass", "click"], ["class", "right fas fa-angle-right", 4, "ngIf"], ["class", "nav nav-treeview", 4, "ngFor", "ngForOf"], [1, "right", "fas", "fa-angle-right"], [1, "nav", "nav-treeview"], [1, "nav-item"], [1, "nav-link", 3, "routerLink", "routerLinkActive"]],
    template: function MenuItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuItemComponent_Template_a_click_0_listener() {
          return ctx.handleMainMenuAction();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MenuItemComponent_i_4_Template, 1, 1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MenuItemComponent_ul_5_Template, 6, 7, "ul", 2);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.menuItem.liClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, ctx.isMainActive || ctx.isOneOfChildrenActive));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("nav-icon ", ctx.menuItem.iconClasses, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.menuItem.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isExpandable && ctx.menuItem.children.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.menuItem.children);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive],
    styles: ["[_nghost-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSiIsImZpbGUiOiJtZW51LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */\n/*# sourceURL=webpack://./src/app/components/menu-item/menu-item.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tZW51LWl0ZW0vbWVudS1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKO0FBQ0Esd1NBQXdTIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [_menu_item_animations__WEBPACK_IMPORTED_MODULE_0__.openCloseAnimation, _menu_item_animations__WEBPACK_IMPORTED_MODULE_0__.rotateAnimation]
    }
  });
}

/***/ }),

/***/ 93254:
/*!***********************************************************************!*\
  !*** ./src/app/components/sidebar-search/sidebar-search.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarSearchComponent": () => (/* binding */ SidebarSearchComponent)
/* harmony export */ });
/* harmony import */ var _modules_main_menu_sidebar_menu_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @modules/main/menu-sidebar/menu-sidebar.component */ 86008);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _profabric_angular_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @profabric/angular-components */ 9700);





const _c0 = ["dropdown"];
function SidebarSearchComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No Element found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SidebarSearchComponent_div_10_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarSearchComponent_div_10_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.handleMenuItemClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const menuItem_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", menuItem_r4.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r3.boldString(menuItem_r4.name, ctx_r3.searchText), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](menuItem_r4.name);
  }
}
function SidebarSearchComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SidebarSearchComponent_div_10_a_1_Template, 4, 3, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.foundMenuItems);
  }
}
const _c1 = function (a1, a2) {
  return {
    fas: true,
    "fa-search": a1,
    "fa-times": a2,
    "fa-fw": true
  };
};
class SidebarSearchComponent {
  constructor() {
    this.searchText = '';
    this.foundMenuItems = [];
  }
  ngOnInit() {}
  handleSearchTextChange(event) {
    this.foundMenuItems = [];
    if (event.target.value) {
      this.searchText = event.target.value;
      this.findMenuItems(_modules_main_menu_sidebar_menu_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.MENU);
      return;
    } else {
      this.searchText = '';
      this.dropdown.isOpen = false;
    }
  }
  handleIconClick() {
    this.searchText = '';
    this.dropdown.isOpen = false;
  }
  handleMenuItemClick() {
    this.searchText = '';
    this.dropdown.isOpen = false;
  }
  findMenuItems(menu) {
    if (!this.searchText) {
      return;
    }
    menu.forEach(menuItem => {
      if (menuItem.path && menuItem.name.toLowerCase().includes(this.searchText.toLowerCase())) {
        this.foundMenuItems.push(menuItem);
      }
      if (menuItem.children) {
        return this.findMenuItems(menuItem.children);
      }
    });
    if (this.foundMenuItems.length > 0) {
      this.dropdown.isOpen = true;
    }
  }
  boldString(str, substr) {
    return str.replaceAll(this.capitalizeFirstLetter(substr), `<strong class="text-light">${this.capitalizeFirstLetter(substr)}</strong>`);
  }
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static #_ = this.ɵfac = function SidebarSearchComponent_Factory(t) {
    return new (t || SidebarSearchComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SidebarSearchComponent,
    selectors: [["app-sidebar-search"]],
    viewQuery: function SidebarSearchComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dropdown = _t.first);
      }
    },
    decls: 11,
    vars: 8,
    consts: [["hide-arrow", "", 3, "openOnButtonClick"], ["dropdown", ""], ["slot", "button"], [1, "input-group"], ["type", "text", "placeholder", "Search", "aria-label", "Search", 1, "form-control", "form-control-sidebar", 3, "value", "input"], [1, "input-group-append"], [1, "btn", "btn-sidebar", 3, "click"], [3, "ngClass"], ["slot", "menu", 1, "menu"], ["class", "nothing-found", 4, "ngIf"], ["class", "list-group", 4, "ngIf"], [1, "nothing-found"], [1, "list-group"], ["class", "list-group-item", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], [1, "list-group-item", 3, "routerLink", "click"], [1, "search-title", 3, "innerHTML"], [1, "search-path"]],
    template: function SidebarSearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "pf-dropdown", 0, 1)(2, "div", 2)(3, "div", 3)(4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function SidebarSearchComponent_Template_input_input_4_listener($event) {
          return ctx.handleSearchTextChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5)(6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarSearchComponent_Template_button_click_6_listener() {
          return ctx.handleIconClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SidebarSearchComponent_div_9_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SidebarSearchComponent_div_10_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("openOnButtonClick", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx.searchText.length === 0, ctx.searchText.length > 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.foundMenuItems.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.foundMenuItems.length > 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _profabric_angular_components__WEBPACK_IMPORTED_MODULE_4__.PfDropdown],
    styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\npf-dropdown[_ngcontent-%COMP%] {\n  --pf-dropdown-width: 100%;\n  --pf-dropdown-border: none;\n  --pf-dropdown-menu-min-width: 100%;\n  --pf-dropdown-menu-margin-top: 0px;\n}\npf-dropdown[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  background-color: #454d55;\n}\npf-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n}\n\n.nothing-found[_ngcontent-%COMP%] {\n  color: #c2c7d0;\n  padding: 0.25rem 0.5rem;\n}\n\n.list-group[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  cursor: pointer;\n}\n.list-group[_ngcontent-%COMP%]   .search-path[_ngcontent-%COMP%] {\n  font-size: 80%;\n  color: #adb5bd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXItc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0FBQ0o7QUFDSTtFQUNJLHlCQUFBO0FBQ1I7QUFFSTtFQUNJLG9CQUFBO0FBQVI7O0FBSUE7RUFDSSxjQUFBO0VBQ0EsdUJBQUE7QUFESjs7QUFLSTtFQUNJLHVCQUFBO0VBQ0EsZUFBQTtBQUZSO0FBS0k7RUFDSSxjQUFBO0VBQ0EsY0FBQTtBQUhSIiwiZmlsZSI6InNpZGViYXItc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxucGYtZHJvcGRvd24ge1xuICAtLXBmLWRyb3Bkb3duLXdpZHRoOiAxMDAlO1xuICAtLXBmLWRyb3Bkb3duLWJvcmRlcjogbm9uZTtcbiAgLS1wZi1kcm9wZG93bi1tZW51LW1pbi13aWR0aDogMTAwJTtcbiAgLS1wZi1kcm9wZG93bi1tZW51LW1hcmdpbi10b3A6IDBweDtcbn1cbnBmLWRyb3Bkb3duIC5tZW51IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NGQ1NTtcbn1cbnBmLWRyb3Bkb3duIC5kcm9wZG93bi1pdGVtIHtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG59XG5cbi5ub3RoaW5nLWZvdW5kIHtcbiAgY29sb3I6ICNjMmM3ZDA7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xufVxuXG4ubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtIHtcbiAgcGFkZGluZzogMC41cmVtIDAuNzVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5saXN0LWdyb3VwIC5zZWFyY2gtcGF0aCB7XG4gIGZvbnQtc2l6ZTogODAlO1xuICBjb2xvcjogI2FkYjViZDtcbn0iXX0= */\n/*# sourceURL=webpack://./src/app/components/sidebar-search/sidebar-search.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyLXNlYXJjaC9zaWRlYmFyLXNlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQ0FBQTtBQUNKO0FBQ0k7RUFDSSx5QkFBQTtBQUNSO0FBRUk7RUFDSSxvQkFBQTtBQUFSOztBQUlBO0VBQ0ksY0FBQTtFQUNBLHVCQUFBO0FBREo7O0FBS0k7RUFDSSx1QkFBQTtFQUNBLGVBQUE7QUFGUjtBQUtJO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUFIUjtBQUNBLHd5Q0FBd3lDIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxucGYtZHJvcGRvd24ge1xuICAtLXBmLWRyb3Bkb3duLXdpZHRoOiAxMDAlO1xuICAtLXBmLWRyb3Bkb3duLWJvcmRlcjogbm9uZTtcbiAgLS1wZi1kcm9wZG93bi1tZW51LW1pbi13aWR0aDogMTAwJTtcbiAgLS1wZi1kcm9wZG93bi1tZW51LW1hcmdpbi10b3A6IDBweDtcbn1cbnBmLWRyb3Bkb3duIC5tZW51IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NGQ1NTtcbn1cbnBmLWRyb3Bkb3duIC5kcm9wZG93bi1pdGVtIHtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG59XG5cbi5ub3RoaW5nLWZvdW5kIHtcbiAgY29sb3I6ICNjMmM3ZDA7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xufVxuXG4ubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtIHtcbiAgcGFkZGluZzogMC41cmVtIDAuNzVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5saXN0LWdyb3VwIC5zZWFyY2gtcGF0aCB7XG4gIGZvbnQtc2l6ZTogODAlO1xuICBjb2xvcjogI2FkYjViZDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 19527:
/*!****************************************!*\
  !*** ./src/app/loading.interceptor.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingInterceptor": () => (/* binding */ LoadingInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/loading/loading.service */ 98982);




class LoadingInterceptor {
  constructor(loadingService) {
    this.loadingService = loadingService;
    this.totalRequests = 0;
  }
  intercept(request, next) {
    console.log('caught');
    this.totalRequests++;
    this.loadingService.setLoading(true);
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.finalize)(() => {
      this.totalRequests--;
      if (this.totalRequests == 0) {
        this.loadingService.setLoading(false);
      }
    }));
  }
  static #_ = this.ɵfac = function LoadingInterceptor_Factory(t) {
    return new (t || LoadingInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_0__.LoadingService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: LoadingInterceptor,
    factory: LoadingInterceptor.ɵfac
  });
}

/***/ }),

/***/ 60744:
/*!**************************************************!*\
  !*** ./src/app/modules/login/login.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _services_Auth_JWTAuthService_jwt_auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/Auth/JWTAuthService/jwt-auth-service.service */ 95928);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 76328);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ 69906);











const _c0 = function () {
  return ["/register"];
};
class LoginComponent {
  constructor(http, formBuilder, jwtAuthService, router, renderer, messageService) {
    this.http = http;
    this.formBuilder = formBuilder;
    this.jwtAuthService = jwtAuthService;
    this.router = router;
    this.renderer = renderer;
    this.messageService = messageService;
    this.class = 'login-box';
    this.loginForm = this.formBuilder.group({
      username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
    });
    this.api_server = environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_server;
    this.login_path = environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.endpoints.login;
  }
  ngOnInit() {
    this.renderer.addClass(document.querySelector('app-root'), 'login-page');
  }
  onSubmit() {
    if (this.loginForm.valid) {
      let formData = {
        username: this.loginForm.get('username')?.value,
        password: this.loginForm.get('password')?.value
      };
      const apiUrl = `${this.api_server}/${this.login_path}`;
      this.http.post(apiUrl, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).subscribe(response => {
        const token = response.jwt;
        console.log('Login successful:', token);
        this.jwtAuthService.setToken(token);
        this.router.navigateByUrl('/');
        // location.reload();
        this.messageService.add({
          severity: 'success',
          summary: 'Login Successfull',
          detail: 'Welcome To E-facture'
        });
        // Handle successful login (e.g., redirect to another page)
      }, error => {
        try {
          this.messageService.add({
            severity: 'error',
            summary: 'Login Error',
            detail: error.error.detail.detail
          });
        } catch (err) {
          this.messageService.add({
            severity: 'error',
            summary: 'Server Error',
            detail: "Server Error Please Contact The Administrator"
          });
        }
        // Handle login error (e.g., display error message)
      });
    }

    if (this.loginForm.invalid) {
      console.log("Login Form Invalid");
      this.messageService.add({
        severity: 'error',
        summary: 'Login Error',
        detail: "Login Form Invalid"
      });
    }
  }
  get controls() {
    return this.loginForm.controls;
  }
  ngOnDestroy() {
    this.renderer.removeClass(document.querySelector('app-root'), 'login-page');
  }
  static #_ = this.ɵfac = function LoginComponent_Factory(t) {
    return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_Auth_JWTAuthService_jwt_auth_service_service__WEBPACK_IMPORTED_MODULE_1__.JwtAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.MessageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["app-login"]],
    hostVars: 2,
    hostBindings: function LoginComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.class);
      }
    },
    decls: 30,
    vars: 3,
    consts: [[1, "login-box"], [1, "login-logo"], [2, "color", "black", "padding", "8px", "background-color", "#ffffff78", "width", "100% !important", "border-top-left-radius", "14px", "border-top-right-radius", "14px", "text-shadow", "1px 1px 2px #0000004d"], [1, "card", 2, "background", "none"], [1, "card-body", "login-card-body", 2, "background-color", "#ffffff78", "border-bottom-right-radius", "14px", "border-bottom-left-radius", "14px"], [2, "text-align", "center", "padding", "10px"], [3, "formGroup", "ngSubmit"], [1, "input-group", "mb-3"], [1, "p-inputgroup"], [1, "p-inputgroup-addon"], [1, "pi", "pi-user"], ["pInputText", "", "placeholder", "Username", "formControlName", "username"], [1, "pi", "pi-lock"], ["pInputText", "", "placeholder", "Password", "formControlName", "password", "type", "password"], [1, "row"], [1, "col-4"], ["type", "submit", "label", "Login", "icon", "pi pi-check", "styleClass", "p-button-secondary"], ["routerLinkActive", "router-link-active", 3, "routerLink"], ["label", "Register", "icon", "pi pi-plus", "styleClass", "p-button-success"], ["routerLink", "/reset-password/", 2, "padding", "10px", "text-align", "center"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p", 2)(3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "E");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "-FACTURE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 3)(7, "div", 4)(8, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Welcome To The Login Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_10_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 7)(12, "div", 8)(13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 7)(17, "div", 8)(18, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 14)(22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "p-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 15)(25, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "p-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 14)(28, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Reset Your Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c0));
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, primeng_button__WEBPACK_IMPORTED_MODULE_7__.Button, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputText],
    styles: [".btn-primary[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n  box-shadow: none;\n  padding: 6px;\n  width: 114px;\n}\n\n.col-4[_ngcontent-%COMP%] {\n  flex: 0 0 33.333333%;\n  max-width: 33.333333%;\n  margin: auto;\n}\n\n.card[_ngcontent-%COMP%] {\n  box-shadow: 4px 7px 7px rgba(0, 0, 0, 0), 0px 20px 20px 0px rgb(13, 128, 146);\n  margin-bottom: 1rem;\n  border-bottom-left-radius: 14px;\n  border-bottom-right-radius: 14px;\n}\n\n.input-group[_ngcontent-%COMP%] {\n  background-color: white !important;\n  border-radius: 7px !important;\n}\n\n.login-box[_ngcontent-%COMP%], .register-box[_ngcontent-%COMP%] {\n  width: 97% !important;\n  max-width: 400px !important;\n}\n\n.login-logo[_ngcontent-%COMP%], .register-logo[_ngcontent-%COMP%] {\n  box-shadow: 4px 7px 7px rgba(0, 0, 0, 0), 0px 20px 20px 0px rgb(13, 128, 146);\n}\n\n.alert-danger[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: rgba(37, 53, 87, 0.6784313725);\n  border-color: rgba(0, 123, 255, 0.2705882353);\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #0d8092;\n  border-color: #ffffff;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #0d8092;\n  border-color: rgba(6, 98, 113, 0.5803921569);\n  box-shadow: none;\n  padding: 6px;\n  width: 114px;\n}\n\n.btn-primary[_ngcontent-%COMP%]:focus, .btn-primary.focus[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #0d8092;\n  border-color: #0d8092;\n  box-shadow: 0 0 0 0 rgba(38, 143, 255, 0.5);\n}\n\n.login-page[_ngcontent-%COMP%] {\n  min-height: 300.391px;\n  background-image: url(/src/assets/img/loginbackound.jpg);\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVCQUFBO0FBRUE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFBSjs7QUFHQTtFQUVJLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0E7RUFDSSw2RUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtBQUFKOztBQUdBO0VBQ0ksa0NBQUE7RUFDQSw2QkFBQTtBQUFKOztBQUdBOztFQUVJLHFCQUFBO0VBQ0EsMkJBQUE7QUFBSjs7QUFHQTs7RUFFSSw2RUFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLGdEQUFBO0VBQ0EsNkNBQUE7QUFBSjs7QUFHQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFBSjs7QUFHQTs7RUFFSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLDJDQUFBO0FBQUo7O0FBR0E7RUFDSSxxQkFBQTtFQUNBLHdEQUFBO0VBQ0Esc0JBQUE7QUFBSiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIExvZ2luIFBhZ2UgU2V0dGluZ3MqL1xuLmJ0bi1wcmltYXJ5IHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcGFkZGluZzogNnB4O1xuICB3aWR0aDogMTE0cHg7XG59XG5cbi5jb2wtNCB7XG4gIC1tcy1mbGV4OiAwIDAgMzMuMzMzMzMzJTtcbiAgZmxleDogMCAwIDMzLjMzMzMzMyU7XG4gIG1heC13aWR0aDogMzMuMzMzMzMzJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY2FyZCB7XG4gIGJveC1zaGFkb3c6IDRweCA3cHggN3B4IHJnYmEoMCwgMCwgMCwgMCksIDBweCAyMHB4IDIwcHggMHB4IHJnYigxMywgMTI4LCAxNDYpO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTRweDtcbn1cblxuLmlucHV0LWdyb3VwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogN3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5sb2dpbi1ib3gsXG4ucmVnaXN0ZXItYm94IHtcbiAgd2lkdGg6IDk3JSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDQwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5sb2dpbi1sb2dvLFxuLnJlZ2lzdGVyLWxvZ28ge1xuICBib3gtc2hhZG93OiA0cHggN3B4IDdweCByZ2JhKDAsIDAsIDAsIDApLCAwcHggMjBweCAyMHB4IDBweCByZ2IoMTMsIDEyOCwgMTQ2KTtcbn1cblxuLmFsZXJ0LWRhbmdlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM3LCA1MywgODcsIDAuNjc4NDMxMzcyNSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAxMjMsIDI1NSwgMC4yNzA1ODgyMzUzKTtcbn1cblxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZDgwOTI7XG4gIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZDgwOTI7XG4gIGJvcmRlci1jb2xvcjogcmdiYSg2LCA5OCwgMTEzLCAwLjU4MDM5MjE1NjkpO1xuICBib3gtc2hhZG93OiBub25lO1xuICBwYWRkaW5nOiA2cHg7XG4gIHdpZHRoOiAxMTRweDtcbn1cblxuLmJ0bi1wcmltYXJ5OmZvY3VzLFxuLmJ0bi1wcmltYXJ5LmZvY3VzIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZDgwOTI7XG4gIGJvcmRlci1jb2xvcjogIzBkODA5MjtcbiAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDM4LCAxNDMsIDI1NSwgMC41KTtcbn1cblxuLmxvZ2luLXBhZ2Uge1xuICBtaW4taGVpZ2h0OiAzMDAuMzkxcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3JjL2Fzc2V0cy9pbWcvbG9naW5iYWNrb3VuZC5qcGcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufSJdfQ== */\n/*# sourceURL=webpack://./src/app/modules/login/login.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1QkFBQTtBQUVBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0E7RUFFSSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUdBO0VBQ0ksNkVBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUFBSjs7QUFHQTtFQUNJLGtDQUFBO0VBQ0EsNkJBQUE7QUFBSjs7QUFHQTs7RUFFSSxxQkFBQTtFQUNBLDJCQUFBO0FBQUo7O0FBR0E7O0VBRUksNkVBQUE7QUFBSjs7QUFHQTtFQUNJLFdBQUE7RUFDQSxnREFBQTtFQUNBLDZDQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0E7O0VBRUksV0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQ0FBQTtBQUFKOztBQUdBO0VBQ0kscUJBQUE7RUFDQSx3REFBQTtFQUNBLHNCQUFBO0FBQUo7QUFBQSx3MkZBQXcyRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIExvZ2luIFBhZ2UgU2V0dGluZ3MqL1xuLmJ0bi1wcmltYXJ5IHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcGFkZGluZzogNnB4O1xuICB3aWR0aDogMTE0cHg7XG59XG5cbi5jb2wtNCB7XG4gIC1tcy1mbGV4OiAwIDAgMzMuMzMzMzMzJTtcbiAgZmxleDogMCAwIDMzLjMzMzMzMyU7XG4gIG1heC13aWR0aDogMzMuMzMzMzMzJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY2FyZCB7XG4gIGJveC1zaGFkb3c6IDRweCA3cHggN3B4IHJnYmEoMCwgMCwgMCwgMCksIDBweCAyMHB4IDIwcHggMHB4IHJnYigxMywgMTI4LCAxNDYpO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTRweDtcbn1cblxuLmlucHV0LWdyb3VwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogN3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5sb2dpbi1ib3gsXG4ucmVnaXN0ZXItYm94IHtcbiAgd2lkdGg6IDk3JSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDQwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5sb2dpbi1sb2dvLFxuLnJlZ2lzdGVyLWxvZ28ge1xuICBib3gtc2hhZG93OiA0cHggN3B4IDdweCByZ2JhKDAsIDAsIDAsIDApLCAwcHggMjBweCAyMHB4IDBweCByZ2IoMTMsIDEyOCwgMTQ2KTtcbn1cblxuLmFsZXJ0LWRhbmdlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM3LCA1MywgODcsIDAuNjc4NDMxMzcyNSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAxMjMsIDI1NSwgMC4yNzA1ODgyMzUzKTtcbn1cblxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZDgwOTI7XG4gIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZDgwOTI7XG4gIGJvcmRlci1jb2xvcjogcmdiYSg2LCA5OCwgMTEzLCAwLjU4MDM5MjE1NjkpO1xuICBib3gtc2hhZG93OiBub25lO1xuICBwYWRkaW5nOiA2cHg7XG4gIHdpZHRoOiAxMTRweDtcbn1cblxuLmJ0bi1wcmltYXJ5OmZvY3VzLFxuLmJ0bi1wcmltYXJ5LmZvY3VzIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZDgwOTI7XG4gIGJvcmRlci1jb2xvcjogIzBkODA5MjtcbiAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDM4LCAxNDMsIDI1NSwgMC41KTtcbn1cblxuLmxvZ2luLXBhZ2Uge1xuICBtaW4taGVpZ2h0OiAzMDAuMzkxcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3JjL2Fzc2V0cy9pbWcvbG9naW5iYWNrb3VuZC5qcGcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 23019:
/*!***********************************************************!*\
  !*** ./src/app/modules/logout/logout/logout.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoutComponent": () => (/* binding */ LogoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _services_Auth_JWTAuthService_jwt_auth_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/Auth/JWTAuthService/jwt-auth-service.service */ 95928);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 14356);







class LogoutComponent {
  constructor(http, jwtAuthService, toastr, router, messageService) {
    this.http = http;
    this.jwtAuthService = jwtAuthService;
    this.toastr = toastr;
    this.router = router;
    this.messageService = messageService;
  }
  ngOnInit() {
    const apiUrl = 'http://127.0.0.1:8000/api/auth/logout';
    this.jwtAuthService.removeToken();
    this.router.navigateByUrl('/login');
    this.messageService.add({
      severity: 'success',
      summary: 'Logout Successfull',
      detail: 'See You Again :)'
    });
  }
  static #_ = this.ɵfac = function LogoutComponent_Factory(t) {
    return new (t || LogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_Auth_JWTAuthService_jwt_auth_service_service__WEBPACK_IMPORTED_MODULE_0__.JwtAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.MessageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: LogoutComponent,
    selectors: [["app-logout"]],
    decls: 2,
    vars: 0,
    template: function LogoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "logout works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    },
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvdXQuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceURL=webpack://./src/app/modules/logout/logout/logout.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9sb2dvdXQvbG9nb3V0L2xvZ291dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esb0tBQW9LIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 7269:
/*!***************************************************************************!*\
  !*** ./src/app/modules/main/control-sidebar/control-sidebar.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlSidebarComponent": () => (/* binding */ ControlSidebarComponent)
/* harmony export */ });
/* harmony import */ var _store_ui_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store/ui/actions */ 15728);
/* harmony import */ var _utils_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/themes */ 57558);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _profabric_angular_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @profabric/angular-components */ 9700);





const _c0 = function () {
  return [];
};
class ControlSidebarComponent {
  constructor(store) {
    this.store = store;
    this.classes = 'control-sidebar control-sidebar-dark';
    this.navbarLightVariants = _utils_themes__WEBPACK_IMPORTED_MODULE_1__.NAVBAR_LIGHT_VARIANTS;
    this.navbarDarkVariants = _utils_themes__WEBPACK_IMPORTED_MODULE_1__.NAVBAR_DARK_VARIANTS;
    this.darkSidebarSkins = _utils_themes__WEBPACK_IMPORTED_MODULE_1__.SIDEBAR_DARK_SKINS;
    this.lightSidebarSkins = _utils_themes__WEBPACK_IMPORTED_MODULE_1__.SIDEBAR_LIGHT_SKINS;
  }
  ngOnInit() {
    this.ui = this.store.select('ui');
    this.ui.subscribe(state => {
      this.navbarVariant = state.navbarVariant;
      this.darkMode = state.darkMode;
      this.sidebarSkin = state.sidebarSkin;
    });
  }
  handleDarkModeChange(event) {
    console.log('value', event.target.checked);
    this.store.dispatch(new _store_ui_actions__WEBPACK_IMPORTED_MODULE_0__.ToggleDarkMode());
  }
  onNavbarVariantChange(event) {
    console.log('value', event.target.value);
    this.store.dispatch(new _store_ui_actions__WEBPACK_IMPORTED_MODULE_0__.SetNavbarVariant(event.target.value));
  }
  onSidebarSkinChange(event) {
    console.log('value', event.target.value);
    this.store.dispatch(new _store_ui_actions__WEBPACK_IMPORTED_MODULE_0__.SetSidebarSkin(event.target.value));
  }
  static #_ = this.ɵfac = function ControlSidebarComponent_Factory(t) {
    return new (t || ControlSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ControlSidebarComponent,
    selectors: [["app-control-sidebar"]],
    hostVars: 2,
    hostBindings: function ControlSidebarComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.classes);
      }
    },
    decls: 12,
    vars: 12,
    consts: [[1, "mb-2"], [2, "padding", "8px 0"], [3, "change"], ["type", "custom", "label", "Light Navbar Variants", 1, "mt-3", 3, "value", "options", "change"], ["type", "custom", "label", " Dark Navbar Variants", 1, "mt-3", 3, "value", "options", "change"], ["type", "custom", "disabled", "true", "label", "Accent Color Variants", 1, "mt-3", 3, "options"], ["type", "custom", "label", "Light Sidebar Variants", 1, "mt-3", 3, "value", "options", "change"], ["type", "custom", "label", "Dark Sidebar Variants", 1, "mt-3", 3, "value", "options", "change"], ["type", "custom", "disabled", "true", "label", "Brand Logo Variants", 1, "mt-3", 3, "options"]],
    template: function ControlSidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Customize AdminLTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "hr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1)(4, "pf-checkbox", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ControlSidebarComponent_Template_pf_checkbox_change_4_listener($event) {
          return ctx.handleDarkModeChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Dark mode ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "pf-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ControlSidebarComponent_Template_pf_select_change_6_listener($event) {
          return ctx.onNavbarVariantChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "pf-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ControlSidebarComponent_Template_pf_select_change_7_listener($event) {
          return ctx.onNavbarVariantChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "pf-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "pf-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ControlSidebarComponent_Template_pf_select_change_9_listener($event) {
          return ctx.onSidebarSkinChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "pf-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ControlSidebarComponent_Template_pf_select_change_10_listener($event) {
          return ctx.onSidebarSkinChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "pf-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.navbarVariant)("options", ctx.navbarLightVariants);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.navbarVariant)("options", ctx.navbarDarkVariants);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.sidebarSkin)("options", ctx.lightSidebarSkins);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.sidebarSkin)("options", ctx.darkSidebarSkins);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](11, _c0));
      }
    },
    dependencies: [_profabric_angular_components__WEBPACK_IMPORTED_MODULE_4__.PfCheckbox, _profabric_angular_components__WEBPACK_IMPORTED_MODULE_4__.PfSelect],
    styles: ["[_nghost-%COMP%] {\n  padding: 16px;\n  padding-top: 73px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2wtc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGFBQUE7RUFDQSxpQkFBQTtBQUFKIiwiZmlsZSI6ImNvbnRyb2wtc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcGFkZGluZzogMTZweDtcbiAgcGFkZGluZy10b3A6IDczcHg7XG59Il19 */\n/*# sourceURL=webpack://./src/app/modules/main/control-sidebar/control-sidebar.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9tYWluL2NvbnRyb2wtc2lkZWJhci9jb250cm9sLXNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxhQUFBO0VBQ0EsaUJBQUE7QUFBSjtBQUNBLGdXQUFnVyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcGFkZGluZzogMTZweDtcbiAgcGFkZGluZy10b3A6IDczcHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 95044:
/*!*********************************************************!*\
  !*** ./src/app/modules/main/footer/footer.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! luxon */ 20020);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../package.json */ 4147);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



class FooterComponent {
  constructor() {
    this.classes = 'main-footer';
    this.appVersion = _package_json__WEBPACK_IMPORTED_MODULE_1__.version;
    this.currentYear = luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.now().toFormat('y');
  }
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    hostVars: 2,
    hostBindings: function FooterComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.classes);
      }
    },
    decls: 13,
    vars: 2,
    consts: [[1, "float-right", "d-none", "d-sm-block"], ["href", "hamzaoplex.com", "target", "_blank", "rel", "noopener noreferrer", 2, "margin", "0"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Version");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "strong")(5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " E-FACTURE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.appVersion, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Copyright \u00A9 ", ctx.currentYear, "");
      }
    },
    styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */\n/*# sourceURL=webpack://./src/app/modules/main/footer/footer.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9tYWluL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0o7QUFDQSxnU0FBZ1MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 85718:
/*!*********************************************************!*\
  !*** ./src/app/modules/main/header/header.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _store_ui_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store/ui/actions */ 15728);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _modules_main_header_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/main/header/notifications/notifications.component */ 50125);
/* harmony import */ var _modules_main_header_user_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/main/header/user/user.component */ 45112);








function HeaderComponent_form_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 9)(4, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.searchForm);
  }
}
const BASE_CLASSES = 'main-header navbar navbar-expand';
class HeaderComponent {
  constructor(store) {
    this.store = store;
    this.classes = BASE_CLASSES;
  }
  ngOnInit() {
    this.ui = this.store.select('ui');
    this.ui.subscribe(state => {
      this.classes = `${BASE_CLASSES} ${state.navbarVariant}`;
    });
    this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormGroup({
      search: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(null)
    });
  }
  logout() {
    // this.appService.logout();
  }
  onToggleMenuSidebar() {
    this.store.dispatch(new _store_ui_actions__WEBPACK_IMPORTED_MODULE_0__.ToggleSidebarMenu());
  }
  onToggleControlSidebar() {
    this.store.dispatch(new _store_ui_actions__WEBPACK_IMPORTED_MODULE_0__.ToggleControlSidebar());
  }
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    hostVars: 2,
    hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.classes);
      }
    },
    decls: 8,
    vars: 1,
    consts: [[1, "navbar-nav"], [1, "nav-item"], ["role", "button", 1, "nav-link", 3, "click"], [1, "fas", "fa-bars"], ["class", "form-inline ml-3", 3, "formGroup", 4, "ngIf"], [1, "navbar-nav", "ml-auto"], [1, "form-inline", "ml-3", 3, "formGroup"], [1, "input-group", "input-group-sm"], ["type", "search", "placeholder", "Search", "aria-label", "Search", 1, "form-control", "form-control-navbar"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-navbar"], [1, "fas", "fa-search"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 0)(1, "li", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_2_listener() {
          return ctx.onToggleMenuSidebar();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, HeaderComponent_form_4_Template, 6, 1, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "app-notifications")(7, "app-user");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", false);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _modules_main_header_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_1__.NotificationsComponent, _modules_main_header_user_user_component__WEBPACK_IMPORTED_MODULE_2__.UserComponent],
    styles: [".fa-bars[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.nav-item[_ngcontent-%COMP%]   button.nav-link[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSjs7QUFHSTtFQUNJLGVBQUE7QUFBUjs7QUFJSTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QUFEUiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmEtYmFycyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5hdi1pdGVtIC5uYXYtbGluayB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5hdi1pdGVtIGJ1dHRvbi5uYXYtbGluayB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59Il19 */\n/*# sourceURL=webpack://./src/app/modules/main/header/header.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9tYWluL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0o7O0FBR0k7RUFDSSxlQUFBO0FBQVI7O0FBSUk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FBRFI7QUFDQSxna0JBQWdrQiIsInNvdXJjZXNDb250ZW50IjpbIi5mYS1iYXJzIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmF2LWl0ZW0gLm5hdi1saW5rIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmF2LWl0ZW0gYnV0dG9uLm5hdi1saW5rIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 63081:
/*!********************************************************************!*\
  !*** ./src/app/modules/main/header/language/language.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageComponent": () => (/* binding */ LanguageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class LanguageComponent {
  static #_ = this.ɵfac = function LanguageComponent_Factory(t) {
    return new (t || LanguageComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LanguageComponent,
    selectors: [["app-language"]],
    decls: 0,
    vars: 0,
    template: function LanguageComponent_Template(rf, ctx) {},
    styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\npf-dropdown[_ngcontent-%COMP%] {\n  border: none;\n  width: 3rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  --pf-dropdown-menu-min-width: 10rem;\n}\npf-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n}\npf-dropdown[_ngcontent-%COMP%]   .text-sm[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\npf-dropdown[_ngcontent-%COMP%]   .dropdown-divider[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmd1YWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtBQUNKO0FBQ0k7RUFDSSxvQkFBQTtBQUNSO0FBRUk7RUFDSSxnQkFBQTtBQUFSO0FBRUk7RUFDSSxTQUFBO0FBQVIiLCJmaWxlIjoibGFuZ3VhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5wZi1kcm9wZG93biB7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDNyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAtLXBmLWRyb3Bkb3duLW1lbnUtbWluLXdpZHRoOiAxMHJlbTtcbn1cbnBmLWRyb3Bkb3duIC5kcm9wZG93bi1pdGVtIHtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG59XG5wZi1kcm9wZG93biAudGV4dC1zbSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5wZi1kcm9wZG93biAuZHJvcGRvd24tZGl2aWRlciB7XG4gIG1hcmdpbjogMDtcbn0iXX0= */\n/*# sourceURL=webpack://./src/app/modules/main/header/language/language.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9tYWluL2hlYWRlci9sYW5ndWFnZS9sYW5ndWFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7QUFDSjtBQUNJO0VBQ0ksb0JBQUE7QUFDUjtBQUVJO0VBQ0ksZ0JBQUE7QUFBUjtBQUVJO0VBQ0ksU0FBQTtBQUFSO0FBQ0EsbytCQUFvK0IiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5wZi1kcm9wZG93biB7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDNyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAtLXBmLWRyb3Bkb3duLW1lbnUtbWluLXdpZHRoOiAxMHJlbTtcbn1cbnBmLWRyb3Bkb3duIC5kcm9wZG93bi1pdGVtIHtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG59XG5wZi1kcm9wZG93biAudGV4dC1zbSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5wZi1kcm9wZG93biAuZHJvcGRvd24tZGl2aWRlciB7XG4gIG1hcmdpbjogMDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 23649:
/*!********************************************************************!*\
  !*** ./src/app/modules/main/header/messages/messages.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagesComponent": () => (/* binding */ MessagesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class MessagesComponent {
  static #_ = this.ɵfac = function MessagesComponent_Factory(t) {
    return new (t || MessagesComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MessagesComponent,
    selectors: [["app-messages"]],
    decls: 0,
    vars: 0,
    template: function MessagesComponent_Template(rf, ctx) {},
    styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\npf-dropdown[_ngcontent-%COMP%] {\n  border: none;\n  width: 3rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  --pf-dropdown-menu-min-width: 18rem;\n}\npf-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n}\npf-dropdown[_ngcontent-%COMP%]   .text-sm[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\npf-dropdown[_ngcontent-%COMP%]   .dropdown-divider[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtBQUNKO0FBQ0k7RUFDSSxvQkFBQTtBQUNSO0FBRUk7RUFDSSxnQkFBQTtBQUFSO0FBRUk7RUFDSSxTQUFBO0FBQVIiLCJmaWxlIjoibWVzc2FnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5wZi1kcm9wZG93biB7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDNyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAtLXBmLWRyb3Bkb3duLW1lbnUtbWluLXdpZHRoOiAxOHJlbTtcbn1cbnBmLWRyb3Bkb3duIC5kcm9wZG93bi1pdGVtIHtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG59XG5wZi1kcm9wZG93biAudGV4dC1zbSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5wZi1kcm9wZG93biAuZHJvcGRvd24tZGl2aWRlciB7XG4gIG1hcmdpbjogMDtcbn0iXX0= */\n/*# sourceURL=webpack://./src/app/modules/main/header/messages/messages.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9tYWluL2hlYWRlci9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7QUFDSjtBQUNJO0VBQ0ksb0JBQUE7QUFDUjtBQUVJO0VBQ0ksZ0JBQUE7QUFBUjtBQUVJO0VBQ0ksU0FBQTtBQUFSO0FBQ0EsbytCQUFvK0IiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5wZi1kcm9wZG93biB7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDNyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAtLXBmLWRyb3Bkb3duLW1lbnUtbWluLXdpZHRoOiAxOHJlbTtcbn1cbnBmLWRyb3Bkb3duIC5kcm9wZG93bi1pdGVtIHtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG59XG5wZi1kcm9wZG93biAudGV4dC1zbSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5wZi1kcm9wZG93biAuZHJvcGRvd24tZGl2aWRlciB7XG4gIG1hcmdpbjogMDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 50125:
/*!******************************************************************************!*\
  !*** ./src/app/modules/main/header/notifications/notifications.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsComponent": () => (/* binding */ NotificationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class NotificationsComponent {
  static #_ = this.ɵfac = function NotificationsComponent_Factory(t) {
    return new (t || NotificationsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NotificationsComponent,
    selectors: [["app-notifications"]],
    decls: 0,
    vars: 0,
    template: function NotificationsComponent_Template(rf, ctx) {},
    styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\npf-dropdown[_ngcontent-%COMP%] {\n  border: none;\n  width: 3rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  --pf-dropdown-menu-min-width: 18rem;\n}\npf-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n}\npf-dropdown[_ngcontent-%COMP%]   .text-sm[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\npf-dropdown[_ngcontent-%COMP%]   .dropdown-divider[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0FBQ0o7QUFDSTtFQUNJLG9CQUFBO0FBQ1I7QUFFSTtFQUNJLGdCQUFBO0FBQVI7QUFFSTtFQUNJLFNBQUE7QUFBUiIsImZpbGUiOiJub3RpZmljYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxucGYtZHJvcGRvd24ge1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAzcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLS1wZi1kcm9wZG93bi1tZW51LW1pbi13aWR0aDogMThyZW07XG59XG5wZi1kcm9wZG93biAuZHJvcGRvd24taXRlbSB7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xufVxucGYtZHJvcGRvd24gLnRleHQtc20ge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxucGYtZHJvcGRvd24gLmRyb3Bkb3duLWRpdmlkZXIge1xuICBtYXJnaW46IDA7XG59Il19 */\n/*# sourceURL=webpack://./src/app/modules/main/header/notifications/notifications.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9tYWluL2hlYWRlci9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0FBQ0o7QUFDSTtFQUNJLG9CQUFBO0FBQ1I7QUFFSTtFQUNJLGdCQUFBO0FBQVI7QUFFSTtFQUNJLFNBQUE7QUFBUjtBQUNBLGcvQkFBZy9CIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxucGYtZHJvcGRvd24ge1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAzcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLS1wZi1kcm9wZG93bi1tZW51LW1pbi13aWR0aDogMThyZW07XG59XG5wZi1kcm9wZG93biAuZHJvcGRvd24taXRlbSB7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xufVxucGYtZHJvcGRvd24gLnRleHQtc20ge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxucGYtZHJvcGRvd24gLmRyb3Bkb3duLWRpdmlkZXIge1xuICBtYXJnaW46IDA7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 45112:
/*!************************************************************!*\
  !*** ./src/app/modules/main/header/user/user.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserComponent": () => (/* binding */ UserComponent)
/* harmony export */ });
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! luxon */ 20020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _profabric_angular_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @profabric/angular-components */ 9700);




const _c0 = function () {
  return ["/change-password"];
};
const _c1 = function () {
  return ["/logout"];
};
class UserComponent {
  constructor() {}
  ngOnInit() {
    this.user = 'User';
  }
  formatDate(date) {
    return luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.fromISO(date).toFormat('dd LLL yyyy');
  }
  static #_ = this.ɵfac = function UserComponent_Factory(t) {
    return new (t || UserComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: UserComponent,
    selectors: [["app-user"]],
    decls: 12,
    vars: 6,
    consts: [["hide-arrow", "", 1, "user-menu"], ["slot", "button"], [1, "nav-link"], ["fallback-src", "assets/img/male.png", "width", "25", "height", "25", "alt", "User Image", "rounded", "", 1, "user-image-small", 3, "src"], ["slot", "menu"], [1, "user-header", "bg-primary"], ["fallback-src", "assets/img/male.png", "alt", "User Image", "width", "90", "height", "90", "rounded", "", 1, "user-image-big", 3, "src"], [1, "user-footer"], [1, "btn", "btn-default", "btn-flat", 3, "routerLink"], [1, "btn", "btn-default", "btn-flat", "float-right", 3, "routerLink"]],
    template: function UserComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "pf-dropdown", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "pf-image", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "pf-image", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 7)(8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " change password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Sign out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.user.picture);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.user.picture);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c1));
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _profabric_angular_components__WEBPACK_IMPORTED_MODULE_3__.PfDropdown, _profabric_angular_components__WEBPACK_IMPORTED_MODULE_3__.PfImage],
    styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\npf-dropdown[_ngcontent-%COMP%] {\n  border: none;\n  width: 3rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  --pf-dropdown-menu-min-width: 280px;\n}\npf-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n}\npf-dropdown[_ngcontent-%COMP%]   .text-sm[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\npf-dropdown[_ngcontent-%COMP%]   .dropdown-divider[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.user-image-small[_ngcontent-%COMP%] {\n  margin: 0px -4px;\n  --pf-box-shadow: 0 3px 6px #00000029, 0 3px 6px #0000003b !important;\n}\n\n.user-image-big[_ngcontent-%COMP%] {\n  --pf-box-shadow: 0 3px 6px #00000029, 0 3px 6px #0000003b !important;\n  --pf-border: 3px solid #fff3;\n}\n\n.user-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  height: 175px;\n  padding: 10px;\n  text-align: center;\n}\n.user-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  z-index: 5;\n  height: 90px;\n  width: 90px;\n  border: 3px solid;\n  border-color: transparent;\n  border-color: rgba(255, 255, 255, 0.2);\n}\n.user-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  z-index: 5;\n  font-size: 17px;\n  margin-top: 10px;\n}\n.user-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n}\n\n.user-body[_ngcontent-%COMP%] {\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n  border-bottom: 1px solid #495057;\n  border-top: 1px solid #dee2e6;\n  padding: 15px;\n}\n.user-body[_ngcontent-%COMP%]::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n\n.user-footer[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  padding: 10px;\n}\n.user-footer[_ngcontent-%COMP%]::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n.user-footer[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n\n@media (min-width: 576px) {\n  .user-body[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    background: #ffffff !important;\n    color: #495057 !important;\n  }\n}\n@media (min-width: 576px) {\n  .user-footer[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%]:hover {\n    background-color: #f8f9fa;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0FBQ0o7QUFDSTtFQUNJLG9CQUFBO0FBQ1I7QUFFSTtFQUNJLGdCQUFBO0FBQVI7QUFFSTtFQUNJLFNBQUE7QUFBUjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0Esb0VBQUE7QUFESjs7QUFHQTtFQUNJLG9FQUFBO0VBQ0EsNEJBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUFKO0FBQ0k7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0NBQUE7QUFDUjtBQUNJO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNSO0FBQVE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUVaOztBQUdBO0VBQ0ksK0JBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0FBQUo7QUFDSTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUNSOztBQUdBO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0FBQUo7QUFDSTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUNSO0FBQ0k7RUFDSSxjQUFBO0FBQ1I7O0FBR0E7RUFDSTtJQUNJLDhCQUFBO0lBQ0EseUJBQUE7RUFBTjtBQUNGO0FBR0E7RUFDSTtJQUNJLHlCQUFBO0VBRE47QUFDRiIsImZpbGUiOiJ1c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxucGYtZHJvcGRvd24ge1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAzcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLS1wZi1kcm9wZG93bi1tZW51LW1pbi13aWR0aDogMjgwcHg7XG59XG5wZi1kcm9wZG93biAuZHJvcGRvd24taXRlbSB7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xufVxucGYtZHJvcGRvd24gLnRleHQtc20ge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxucGYtZHJvcGRvd24gLmRyb3Bkb3duLWRpdmlkZXIge1xuICBtYXJnaW46IDA7XG59XG5cbi51c2VyLWltYWdlLXNtYWxsIHtcbiAgbWFyZ2luOiAwcHggLTRweDtcbiAgLS1wZi1ib3gtc2hhZG93OiAwIDNweCA2cHggIzAwMDAwMDI5LCAwIDNweCA2cHggIzAwMDAwMDNiICFpbXBvcnRhbnQ7XG59XG5cbi51c2VyLWltYWdlLWJpZyB7XG4gIC0tcGYtYm94LXNoYWRvdzogMCAzcHggNnB4ICMwMDAwMDAyOSwgMCAzcHggNnB4ICMwMDAwMDAzYiAhaW1wb3J0YW50O1xuICAtLXBmLWJvcmRlcjogM3B4IHNvbGlkICNmZmYzO1xufVxuXG4udXNlci1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDE3NXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udXNlci1oZWFkZXIgaW1nIHtcbiAgei1pbmRleDogNTtcbiAgaGVpZ2h0OiA5MHB4O1xuICB3aWR0aDogOTBweDtcbiAgYm9yZGVyOiAzcHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xufVxuLnVzZXItaGVhZGVyIHAge1xuICB6LWluZGV4OiA1O1xuICBmb250LXNpemU6IDE3cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4udXNlci1oZWFkZXIgcCBzbWFsbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi51c2VyLWJvZHkge1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDk1MDU3O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcbiAgcGFkZGluZzogMTVweDtcbn1cbi51c2VyLWJvZHk6OmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNsZWFyOiBib3RoO1xuICBjb250ZW50OiBcIlwiO1xufVxuXG4udXNlci1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnVzZXItZm9vdGVyOjphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjbGVhcjogYm90aDtcbiAgY29udGVudDogXCJcIjtcbn1cbi51c2VyLWZvb3RlciAuYnRuLWRlZmF1bHQge1xuICBjb2xvcjogIzZjNzU3ZDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC51c2VyLWJvZHkgYSB7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjNDk1MDU3ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAudXNlci1mb290ZXIgLmJ0bi1kZWZhdWx0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICB9XG59Il19 */\n/*# sourceURL=webpack://./src/app/modules/main/header/user/user.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9tYWluL2hlYWRlci91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0FBQ0o7QUFDSTtFQUNJLG9CQUFBO0FBQ1I7QUFFSTtFQUNJLGdCQUFBO0FBQVI7QUFFSTtFQUNJLFNBQUE7QUFBUjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0Esb0VBQUE7QUFESjs7QUFHQTtFQUNJLG9FQUFBO0VBQ0EsNEJBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUFKO0FBQ0k7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0NBQUE7QUFDUjtBQUNJO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNSO0FBQVE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUVaOztBQUdBO0VBQ0ksK0JBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0FBQUo7QUFDSTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUNSOztBQUdBO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0FBQUo7QUFDSTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUNSO0FBQ0k7RUFDSSxjQUFBO0FBQ1I7O0FBR0E7RUFDSTtJQUNJLDhCQUFBO0lBQ0EseUJBQUE7RUFBTjtBQUNGO0FBR0E7RUFDSTtJQUNJLHlCQUFBO0VBRE47QUFDRjtBQUNBLGdnSEFBZ2dIIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxucGYtZHJvcGRvd24ge1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAzcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLS1wZi1kcm9wZG93bi1tZW51LW1pbi13aWR0aDogMjgwcHg7XG59XG5wZi1kcm9wZG93biAuZHJvcGRvd24taXRlbSB7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xufVxucGYtZHJvcGRvd24gLnRleHQtc20ge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxucGYtZHJvcGRvd24gLmRyb3Bkb3duLWRpdmlkZXIge1xuICBtYXJnaW46IDA7XG59XG5cbi51c2VyLWltYWdlLXNtYWxsIHtcbiAgbWFyZ2luOiAwcHggLTRweDtcbiAgLS1wZi1ib3gtc2hhZG93OiAwIDNweCA2cHggIzAwMDAwMDI5LCAwIDNweCA2cHggIzAwMDAwMDNiICFpbXBvcnRhbnQ7XG59XG5cbi51c2VyLWltYWdlLWJpZyB7XG4gIC0tcGYtYm94LXNoYWRvdzogMCAzcHggNnB4ICMwMDAwMDAyOSwgMCAzcHggNnB4ICMwMDAwMDAzYiAhaW1wb3J0YW50O1xuICAtLXBmLWJvcmRlcjogM3B4IHNvbGlkICNmZmYzO1xufVxuXG4udXNlci1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDE3NXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udXNlci1oZWFkZXIgaW1nIHtcbiAgei1pbmRleDogNTtcbiAgaGVpZ2h0OiA5MHB4O1xuICB3aWR0aDogOTBweDtcbiAgYm9yZGVyOiAzcHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xufVxuLnVzZXItaGVhZGVyIHAge1xuICB6LWluZGV4OiA1O1xuICBmb250LXNpemU6IDE3cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4udXNlci1oZWFkZXIgcCBzbWFsbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi51c2VyLWJvZHkge1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDk1MDU3O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcbiAgcGFkZGluZzogMTVweDtcbn1cbi51c2VyLWJvZHk6OmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNsZWFyOiBib3RoO1xuICBjb250ZW50OiBcIlwiO1xufVxuXG4udXNlci1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnVzZXItZm9vdGVyOjphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjbGVhcjogYm90aDtcbiAgY29udGVudDogXCJcIjtcbn1cbi51c2VyLWZvb3RlciAuYnRuLWRlZmF1bHQge1xuICBjb2xvcjogIzZjNzU3ZDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC51c2VyLWJvZHkgYSB7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjNDk1MDU3ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAudXNlci1mb290ZXIgLmJ0bi1kZWZhdWx0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8187:
/*!************************************************!*\
  !*** ./src/app/modules/main/main.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var _store_ui_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store/ui/actions */ 15728);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _services_SharedData_shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/SharedData/shared-data.service */ 50365);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _modules_main_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/main/header/header.component */ 85718);
/* harmony import */ var _modules_main_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/main/footer/footer.component */ 95044);
/* harmony import */ var _modules_main_menu_sidebar_menu_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/main/menu-sidebar/menu-sidebar.component */ 86008);
/* harmony import */ var _control_sidebar_control_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./control-sidebar/control-sidebar.component */ 7269);
/* harmony import */ var _components_loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/loading/loading/loading.component */ 52353);











class MainComponent {
  constructor(renderer, store, SharedDataService) {
    this.renderer = renderer;
    this.store = store;
    this.SharedDataService = SharedDataService;
    this.class = 'wrapper';
  }
  ngOnInit() {
    this.ui = this.store.select('ui');
    this.renderer.removeClass(document.querySelector('app-root'), 'login-page');
    this.renderer.removeClass(document.querySelector('app-root'), 'register-page');
    this.renderer.addClass(document.querySelector('app-root'), 'layout-fixed');
    this.ui.subscribe(({
      menuSidebarCollapsed,
      controlSidebarCollapsed,
      darkMode
    }) => {
      if (menuSidebarCollapsed) {
        this.renderer.removeClass(document.querySelector('app-root'), 'sidebar-open');
        this.renderer.addClass(document.querySelector('app-root'), 'sidebar-collapse');
      } else {
        this.renderer.removeClass(document.querySelector('app-root'), 'sidebar-collapse');
        this.renderer.addClass(document.querySelector('app-root'), 'sidebar-open');
      }
      if (controlSidebarCollapsed) {
        this.renderer.removeClass(document.querySelector('app-root'), 'control-sidebar-slide-open');
      } else {
        this.renderer.addClass(document.querySelector('app-root'), 'control-sidebar-slide-open');
      }
      if (darkMode) {
        this.renderer.addClass(document.querySelector('app-root'), 'dark-mode');
      } else {
        this.renderer.removeClass(document.querySelector('app-root'), 'dark-mode');
      }
    });
  }
  onToggleMenuSidebar() {
    this.store.dispatch(new _store_ui_actions__WEBPACK_IMPORTED_MODULE_0__.ToggleSidebarMenu());
  }
  static #_ = this.ɵfac = function MainComponent_Factory(t) {
    return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_SharedData_shared_data_service__WEBPACK_IMPORTED_MODULE_1__.SharedDataService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: MainComponent,
    selectors: [["app-main"]],
    hostVars: 2,
    hostBindings: function MainComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx.class);
      }
    },
    decls: 8,
    vars: 0,
    consts: [[1, "sidebar-dark-primary"], [1, "content-wrapper"], ["id", "sidebar-overlay", 3, "click"]],
    template: function MainComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-header")(1, "app-menu-sidebar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "router-outlet")(4, "app-loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "app-footer")(6, "app-control-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MainComponent_Template_div_click_7_listener() {
          return ctx.onToggleMenuSidebar();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterOutlet, _modules_main_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _modules_main_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _modules_main_menu_sidebar_menu_sidebar_component__WEBPACK_IMPORTED_MODULE_4__.MenuSidebarComponent, _control_sidebar_control_sidebar_component__WEBPACK_IMPORTED_MODULE_5__.ControlSidebarComponent, _components_loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__.LoadingComponent],
    styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.content-wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0oiLCJmaWxlIjoibWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jb250ZW50LXdyYXBwZXIgPiAqOmZpcnN0LWNoaWxkIHtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */\n/*# sourceURL=webpack://./src/app/modules/main/main.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9tYWluL21haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7QUFDQSxvWUFBb1kiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY29udGVudC13cmFwcGVyID4gKjpmaXJzdC1jaGlsZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 86008:
/*!*********************************************************************!*\
  !*** ./src/app/modules/main/menu-sidebar/menu-sidebar.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MENU": () => (/* binding */ MENU),
/* harmony export */   "MenuSidebarComponent": () => (/* binding */ MenuSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 23488);


function MenuSidebarComponent_app_menu_item_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu-item", 9);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("menuItem", item_r1);
  }
}
const _c0 = function () {
  return ["/"];
};
const BASE_CLASSES = 'main-sidebar elevation-4';
class MenuSidebarComponent {
  constructor(store) {
    this.store = store;
    this.classes = BASE_CLASSES;
    this.menu = MENU;
    this.AppTitle = "E-FACTURE";
  }
  ngOnInit() {
    this.ui = this.store.select('ui');
    this.ui.subscribe(state => {
      this.classes = `${BASE_CLASSES} ${state.sidebarSkin}`;
    });
    this.user = 'USer';
  }
  static #_ = this.ɵfac = function MenuSidebarComponent_Factory(t) {
    return new (t || MenuSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Store));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MenuSidebarComponent,
    selectors: [["app-menu-sidebar"]],
    hostVars: 2,
    hostBindings: function MenuSidebarComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.classes);
      }
    },
    decls: 11,
    vars: 4,
    consts: [[1, "brand-link", 3, "routerLink"], ["src", "assets/img/logo.png", "alt", "E-Facture", "height", "33", "width", "33", 1, "brand-image", 2, "opacity", "0.8"], [1, "brand-text", "font-weight-light"], [1, "sidebar"], [1, "user-panel", "mt-3", "pb-3", "mb-3", "d-flex"], [1, "form-inline"], [1, "mt-2", 2, "overflow-y", "hidden"], ["data-widget", "treeview", "role", "menu", "data-accordion", "false", 1, "nav", "nav-pills", "nav-sidebar", "flex-column"], [3, "menuItem", 4, "ngFor", "ngForOf"], [3, "menuItem"]],
    template: function MenuSidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "pf-image", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-sidebar-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nav", 6)(9, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MenuSidebarComponent_app_menu_item_10_Template, 1, 1, "app-menu-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.AppTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menu);
      }
    },
    styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.brand-image[_ngcontent-%COMP%] {\n  float: left;\n  line-height: 0.8;\n  margin: -1px 8px 0 6px;\n  opacity: 0.8;\n  --pf-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),\n      0 6px 6px rgba(0, 0, 0, 0.23) !important;\n}\n\n.img-circle[_ngcontent-%COMP%] {\n  --pf-box-shadow: 0 3px 6px #00000029, 0 3px 6px #0000003b !important;\n}\n\n.form-inline[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUtc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBOzhDQUFBO0FBRUo7O0FBRUE7RUFDSSxvRUFBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7QUFDSiIsImZpbGUiOiJtZW51LXNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYnJhbmQtaW1hZ2Uge1xuICBmbG9hdDogbGVmdDtcbiAgbGluZS1oZWlnaHQ6IDAuODtcbiAgbWFyZ2luOiAtMXB4IDhweCAwIDZweDtcbiAgb3BhY2l0eTogMC44O1xuICAtLXBmLWJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xOSksXG4gICAgICAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKSAhaW1wb3J0YW50O1xufVxuXG4uaW1nLWNpcmNsZSB7XG4gIC0tcGYtYm94LXNoYWRvdzogMCAzcHggNnB4ICMwMDAwMDAyOSwgMCAzcHggNnB4ICMwMDAwMDAzYiAhaW1wb3J0YW50O1xufVxuXG4uZm9ybS1pbmxpbmUge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */\n/*# sourceURL=webpack://./src/app/modules/main/menu-sidebar/menu-sidebar.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9tYWluL21lbnUtc2lkZWJhci9tZW51LXNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQTs4Q0FBQTtBQUVKOztBQUVBO0VBQ0ksb0VBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0FBQ0o7QUFDQSw0NEJBQTQ0QiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5icmFuZC1pbWFnZSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBsaW5lLWhlaWdodDogMC44O1xuICBtYXJnaW46IC0xcHggOHB4IDAgNnB4O1xuICBvcGFjaXR5OiAwLjg7XG4gIC0tcGYtYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE5KSxcbiAgICAgIDAgNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpICFpbXBvcnRhbnQ7XG59XG5cbi5pbWctY2lyY2xlIHtcbiAgLS1wZi1ib3gtc2hhZG93OiAwIDNweCA2cHggIzAwMDAwMDI5LCAwIDNweCA2cHggIzAwMDAwMDNiICFpbXBvcnRhbnQ7XG59XG5cbi5mb3JtLWlubGluZSB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}
const MENU = [{
  name: 'Dashboard',
  iconClasses: 'fas fa-tachometer-alt',
  liClass: "nav-link ",
  path: ['/']
}, {
  name: 'Réglages',
  iconClasses: 'fas fa-cog',
  liClass: "nav-link ",
  path: ['/settings']
}, {
  name: 'Gestioner Des Factures',
  iconClasses: 'fas fa-F',
  liClass: "nav-link ",
  children: [{
    name: 'Créer une facture',
    iconClasses: 'fas fa-plus-circle',
    liClass: "nav-link ",
    path: ['/invoices/create']
  }, {
    name: 'Toutes les Factures',
    iconClasses: 'fas fa-file-invoice',
    liClass: "nav-link ",
    path: ['/invoices/list'] // Assuming 1 is a placeholder for invoice ID
  }]
}, {
  name: 'Gestioner Des BL',
  iconClasses: 'fas fa-B',
  liClass: "nav-link ",
  children: [{
    name: 'Créer un BL',
    iconClasses: 'fas fa-plus-circle',
    liClass: "nav-link ",
    path: ['/bl/create']
  }, {
    name: 'Toutes les BL',
    iconClasses: 'fas fa-file-invoice',
    liClass: "nav-link ",
    path: ['/bl/list'] // Assuming 1 is a placeholder for BL ID
  }]
}, {
  name: 'Gestioner Des Devis',
  iconClasses: 'fas fa-D',
  liClass: "nav-link",
  children: [{
    name: 'Créer un Devis',
    iconClasses: 'fas fa-plus-circle',
    liClass: "nav-link ",
    path: ['/devis/create']
  }, {
    name: 'Toutes les Devis',
    iconClasses: 'fas fa-file-invoice',
    liClass: "nav-link ",
    path: ['/devis/list'] // Assuming 1 is a placeholder for Devis ID
  }]
}, {
  name: 'Se déconnecter',
  iconClasses: 'nav-icon fas fa-sign-out-alt ',
  liClass: "nav-link logout",
  path: ['/logout'] // Assuming 1 is a placeholder for Devis ID
}];

/***/ }),

/***/ 43891:
/*!****************************************************************!*\
  !*** ./src/app/modules/registration/registration.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationComponent": () => (/* binding */ RegistrationComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _services_Auth_JWTAuthService_jwt_auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/Auth/JWTAuthService/jwt-auth-service.service */ 95928);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 76328);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ 69906);











const _c0 = function () {
  return ["/login"];
};
class RegistrationComponent {
  constructor(http, formBuilder, jwtAuthService, router, renderer, messageService) {
    this.http = http;
    this.formBuilder = formBuilder;
    this.jwtAuthService = jwtAuthService;
    this.router = router;
    this.renderer = renderer;
    this.messageService = messageService;
    this.class = 'login-box';
    this.registrationForm = this.formBuilder.group({
      username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
    });
    this.api_server = environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_server;
    this.register_path = environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.endpoints.register;
  }
  ngOnInit() {
    this.renderer.addClass(document.querySelector('app-root'), 'login-page');
  }
  onSubmit() {
    if (this.registrationForm.valid) {
      let formData = {
        username: this.registrationForm.get('username')?.value,
        password: this.registrationForm.get('password')?.value,
        email: this.registrationForm.get('password')?.value
      };
      const apiUrl = `${this.api_server}/${this.register_path}`;
      this.http.post(apiUrl, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).subscribe(response => {
        this.router.navigateByUrl('/login');
        this.messageService.add({
          severity: 'success',
          summary: 'Registration Successfull',
          detail: 'Please Login To Continue'
        });
      }, error => {
        try {
          this.messageService.add({
            severity: 'error',
            summary: 'Registration Error',
            detail: error.error.detail.detail
          });
        } catch (err) {
          this.messageService.add({
            severity: 'error',
            summary: 'Server Error',
            detail: "Server Error Please Contact The Administrator"
          });
        }
      });
    }
    if (this.registrationForm.invalid) {
      console.log("Registration Form Invalid");
      this.messageService.add({
        severity: 'error',
        summary: 'Registration Error',
        detail: "Registration Form Invalid"
      });
    }
  }
  get controls() {
    return this.registrationForm.controls;
  }
  ngOnDestroy() {
    this.renderer.removeClass(document.querySelector('app-root'), 'login-page');
  }
  static #_ = this.ɵfac = function RegistrationComponent_Factory(t) {
    return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_Auth_JWTAuthService_jwt_auth_service_service__WEBPACK_IMPORTED_MODULE_1__.JwtAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.MessageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: RegistrationComponent,
    selectors: [["app-registration"]],
    hostVars: 2,
    hostBindings: function RegistrationComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.class);
      }
    },
    decls: 32,
    vars: 3,
    consts: [[1, "login-box"], [1, "login-logo"], [2, "color", "black", "padding", "8px", "background-color", "#ffffff78", "width", "100% !important", "border-top-left-radius", "14px", "border-top-right-radius", "14px", "text-shadow", "1px 1px 2px #0000004d"], [1, "card", 2, "background", "none"], [1, "card-body", "login-card-body", 2, "background-color", "#ffffff78", "border-bottom-right-radius", "14px", "border-bottom-left-radius", "14px"], [2, "text-align", "center", "padding", "10px"], [3, "formGroup", "ngSubmit"], [1, "input-group", "mb-3"], [1, "p-inputgroup"], [1, "p-inputgroup-addon"], [1, "pi", "pi-user"], ["pInputText", "", "placeholder", "Username", "formControlName", "username"], [1, "pi", "pi-box"], ["pInputText", "", "placeholder", "email", "formControlName", "email"], [1, "pi", "pi-lock"], ["pInputText", "", "placeholder", "Password", "formControlName", "password", "type", "password"], [1, "row"], [1, "col-4"], ["type", "submit", "label", "Register", "icon", "pi pi-check", "styleClass", "p-button-secondary"], ["routerLinkActive", "router-link-active", 3, "routerLink"], ["label", "login", "icon", "pi pi-arrow-left", "styleClass", "p-button-success"]],
    template: function RegistrationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p", 2)(3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "E");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "-FACTURE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 3)(7, "div", 4)(8, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Welcome To The Registration Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function RegistrationComponent_Template_form_ngSubmit_10_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 7)(12, "div", 8)(13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 7)(17, "div", 8)(18, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 7)(22, "div", 8)(23, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 16)(27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "p-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 17)(30, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "p-button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.registrationForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c0));
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, primeng_button__WEBPACK_IMPORTED_MODULE_7__.Button, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputText],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceURL=webpack://./src/app/modules/registration/registration.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw0S0FBNEsiLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 50978:
/*!********************************************************************!*\
  !*** ./src/app/modules/reset-password/reset-password.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordComponent": () => (/* binding */ ResetPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _services_Auth_JWTAuthService_jwt_auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/Auth/JWTAuthService/jwt-auth-service.service */ 95928);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 76328);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ 69906);











const _c0 = function () {
  return ["/login"];
};
class ResetPasswordComponent {
  constructor(http, formBuilder, jwtAuthService, router, renderer, messageService) {
    this.http = http;
    this.formBuilder = formBuilder;
    this.jwtAuthService = jwtAuthService;
    this.router = router;
    this.renderer = renderer;
    this.messageService = messageService;
    this.class = 'login-box';
    this.registrationForm = this.formBuilder.group({
      username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
    });
    this.api_server = environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_server;
    this.register_path = environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.endpoints.register;
  }
  ngOnInit() {
    this.renderer.addClass(document.querySelector('app-root'), 'login-page');
  }
  onSubmit() {
    if (this.registrationForm.valid) {
      let formData = {
        username: this.registrationForm.get('username')?.value,
        password: this.registrationForm.get('password')?.value,
        email: this.registrationForm.get('password')?.value
      };
      const apiUrl = `${this.api_server}/${this.register_path}`;
      this.http.post(apiUrl, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).subscribe(response => {
        this.router.navigateByUrl('/login');
        this.messageService.add({
          severity: 'success',
          summary: 'Registration Successfull',
          detail: 'Please Login To Continue'
        });
      }, error => {
        try {
          console.log(error);
          this.messageService.add({
            severity: 'error',
            summary: 'Registration Error',
            detail: error.error.detail
          });
        } catch (err) {
          this.messageService.add({
            severity: 'error',
            summary: 'Server Error',
            detail: "Server Error Please Contact The Administrator"
          });
        }
      });
    }
    if (this.registrationForm.invalid) {
      console.log("Registration Form Invalid");
      this.messageService.add({
        severity: 'error',
        summary: 'Registration Error',
        detail: "Registration Form Invalid"
      });
    }
  }
  get controls() {
    return this.registrationForm.controls;
  }
  ngOnDestroy() {
    this.renderer.removeClass(document.querySelector('app-root'), 'login-page');
  }
  static #_ = this.ɵfac = function ResetPasswordComponent_Factory(t) {
    return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_Auth_JWTAuthService_jwt_auth_service_service__WEBPACK_IMPORTED_MODULE_1__.JwtAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.MessageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ResetPasswordComponent,
    selectors: [["app-reset-password"]],
    hostVars: 2,
    hostBindings: function ResetPasswordComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.class);
      }
    },
    decls: 22,
    vars: 3,
    consts: [[1, "login-box"], [1, "login-logo"], [2, "color", "black", "padding", "8px", "background-color", "#ffffff78", "width", "100% !important", "border-top-left-radius", "14px", "border-top-right-radius", "14px", "text-shadow", "1px 1px 2px #0000004d"], [1, "card", 2, "background", "none"], [1, "card-body", "login-card-body", 2, "background-color", "#ffffff78", "border-bottom-right-radius", "14px", "border-bottom-left-radius", "14px"], [2, "text-align", "center", "padding", "10px"], [3, "formGroup", "ngSubmit"], [1, "input-group", "mb-3"], [1, "p-inputgroup"], [1, "p-inputgroup-addon"], [1, "pi", "pi-box"], ["pInputText", "", "placeholder", "email", "formControlName", "email"], [1, "row"], [1, "col-4"], ["type", "submit", "label", "Reset", "icon", "pi pi-check", "styleClass", "p-button-secondary"], ["routerLinkActive", "router-link-active", 3, "routerLink"], ["label", "login", "icon", "pi pi-arrow-left", "styleClass", "p-button-success"]],
    template: function ResetPasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p", 2)(3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "E");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "-FACTURE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 3)(7, "div", 4)(8, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Enter your email to get a password reset link :");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ResetPasswordComponent_Template_form_ngSubmit_10_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 7)(12, "div", 8)(13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 12)(17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "p-button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 13)(20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "p-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.registrationForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c0));
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, primeng_button__WEBPACK_IMPORTED_MODULE_7__.Button, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputText],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceURL=webpack://./src/app/modules/reset-password/reset-password.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsNEtBQTRLIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 56601:
/*!************************************************!*\
  !*** ./src/app/pages/admin/admin.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminComponent": () => (/* binding */ AdminComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


class AdminComponent {
  constructor() {
    this.user = {
      username: {
        title: 'Hamza'
      }
    };
    this.lengths = {
      len_products: 10,
      len_clients: 20,
      len_users: 30,
      len_templates: 40 // Replace with the actual length
    };
    // Add any necessary initialization logic here
  }
  static #_ = this.ɵfac = function AdminComponent_Factory(t) {
    return new (t || AdminComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AdminComponent,
    selectors: [["app-admin"]],
    decls: 72,
    vars: 5,
    consts: [[1, "content-header"], [1, "container-fluid"], [1, "row", "mb-2"], [1, "col-sm-6"], [1, "content"], [1, "row"], [1, "col-lg-3", "col-6"], [1, "small-box", "bg-setting"], [1, "inner"], [1, "icon"], [1, "fas", "fa-cog"], ["routerLink", "/settings/global", 1, "small-box-footer"], [1, "fas", "fa-arrow-circle-right"], [1, "small-box", "bg-info"], [1, "fas", "fa-shopping-basket"], ["routerLink", "/settings/products", 1, "small-box-footer"], [1, "small-box", "bg-success"], [1, "fas", "fa-handshake"], ["routerLink", "/settings/clients", 1, "small-box-footer"], [1, "small-box", "bg-warning"], [1, "fas", "fa-users"], ["routerLink", "/settings/users", 1, "small-box-footer"], [1, "small-box", "bg-danger"], [1, "fas", "fa-paint-roller"], ["href", "#", 1, "small-box-footer"]],
    template: function AdminComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "E-Facture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " admin page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 4)(10, "div", 1)(11, "div", 5)(12, "div", 6)(13, "div", 7)(14, "div", 8)(15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Global Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Manage ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6)(25, "div", 13)(26, "div", 8)(27, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Manage your products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Manage ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6)(37, "div", 16)(38, "div", 8)(39, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Manage your clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Manage ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 6)(49, "div", 19)(50, "div", 8)(51, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Manage your users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Manage ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 6)(61, "div", 22)(62, "div", 8)(63, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Choose an invoice template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Manage ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.user.username.title, " welcome to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lengths.len_products);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lengths.len_clients);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lengths.len_users);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lengths.len_templates);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: [".bg-warning[_ngcontent-%COMP%], .bg-warning[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n}\n\n.small-box.bg-setting[_ngcontent-%COMP%] {\n  background-color: #11626f;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJhZG1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy13YXJuaW5nLFxuLmJnLXdhcm5pbmcgPiBhIHtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cblxuLnNtYWxsLWJveC5iZy1zZXR0aW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExNjI2ZjtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */\n/*# sourceURL=webpack://./src/app/pages/admin/admin.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUkseUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQ0EsZ2VBQWdlIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLXdhcm5pbmcsXG4uYmctd2FybmluZyA+IGEge1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuXG4uc21hbGwtYm94LmJnLXNldHRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTE2MjZmO1xuICBjb2xvcjogd2hpdGU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 26546:
/*!****************************************************!*\
  !*** ./src/app/pages/clients/clients.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientsComponent": () => (/* binding */ ClientsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _services_fetch_doc_fetch_doc_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/fetch-doc/fetch-doc.service */ 79697);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _components_add_client_modal_add_client_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/add-client-modal/add-client-modal.component */ 58071);
/* harmony import */ var _components_delete_delete_item_delete_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/delete/delete-item/delete-item.component */ 43189);
/* harmony import */ var _components_edit_client_modal_edit_client_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/edit-client-modal/edit-client-modal.component */ 22434);









function ClientsComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " List of Customers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function ClientsComponent_ng_template_11_Template_input_input_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](10);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.filterGlobal($event.target.value, "contains"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 14)(6, "app-add-client-modal", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("clients", function ClientsComponent_ng_template_11_Template_app_add_client_modal_clients_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.handleClientDataEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function ClientsComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th", 18)(2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Client Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "p-sortIcon", 20)(5, "p-columnFilter", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "th", 22)(7, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " ICE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "p-sortIcon", 23)(10, "p-columnFilter", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th", 25)(12, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " City ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "p-sortIcon", 26)(15, "p-columnFilter", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function ClientsComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 29)(1, "td")(2, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Client Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td")(7, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Client Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td")(12, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Client City");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "td", 32)(17, "app-delete-item", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("data", function ClientsComponent_ng_template_13_Template_app_delete_item_data_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.handleClientDeletion($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "app-edit-client-modal", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const clients_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](clients_r8.client_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](clients_r8.client_ICE);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](clients_r8.client_city);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("Item_ID", clients_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("Item_ID", clients_r8.id);
  }
}
function ClientsComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "No clients found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
const _c0 = function () {
  return [10, 25, 50];
};
const _c1 = function () {
  return ["name", "country.name", "representative.name", "status"];
};
class ClientsComponent {
  constructor(http, FetchDocService) {
    this.http = http;
    this.FetchDocService = FetchDocService;
    this.User = {
      username: "Hamza"
    };
  }
  ngOnInit() {
    this.FetchDocService.getAllClient().subscribe(response => {
      this.clients = response;
    }, error => {
      console.error(error);
    });
  }
  handleClientDataEvent(data) {
    console.log(data);
    this.clients = data['clientData'];
  }
  handleClientDeletion(data) {
    console.log("mn 3andk khokom walid o a7san walid :", data);
    this.clients = data;
  }
  static #_ = this.ɵfac = function ClientsComponent_Factory(t) {
    return new (t || ClientsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_fetch_doc_fetch_doc_service__WEBPACK_IMPORTED_MODULE_0__.FetchDocService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ClientsComponent,
    selectors: [["app-clients"]],
    decls: 15,
    vars: 11,
    consts: [[1, "content-header"], [1, "container-fluid"], [1, "row", "mb-2"], [1, "col-sm-6"], [1, "content"], [1, "card"], [1, "card-body"], ["dataKey", "id", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "value", "rowHover", "rows", "showCurrentPageReport", "rowsPerPageOptions", "paginator", "filterDelay", "globalFilterFields"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "table-header"], [1, "p-input-icon-left"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Global Search", 3, "input"], [3, "clients"], ["pSortableColumn", "client_name", 2, "min-width", "14rem"], [1, "flex", "justify-content-between", "align-items-center"], ["field", "client_name"], ["type", "text", "field", "client_name", "display", "menu", 1, "ml-auto"], ["pSortableColumn", "client_ICE", 2, "min-width", "5rem"], ["field", "client_ICE"], ["type", "text", "field", "client_ICE", "display", "menu", 1, "ml-auto"], ["pSortableColumn", "client_city", 2, "min-width", "5rem"], ["field", "client_city"], ["type", "text", "field", "client_city", "display", "menu", 1, "ml-auto"], [2, "width", "10rem"], [1, "p-selectable-row"], [1, "p-column-title"], [1, "ml-1", "vertical-align-middle"], [2, "text-align", "center"], ["URL", "http://127.0.0.1:8000/api/clients/delete/", 3, "Item_ID", "data"], ["URL", "http://127.0.0.1:8000/api/clients/update/", 3, "Item_ID"], ["colspan", "8"]],
    template: function ClientsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "section", 4)(7, "div", 5)(8, "div", 6)(9, "p-table", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, ClientsComponent_ng_template_11_Template, 7, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ClientsComponent_ng_template_12_Template, 18, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, ClientsComponent_ng_template_13_Template, 19, 5, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, ClientsComponent_ng_template_14_Template, 3, 0, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx.User.username, " welcome to the Customer Management page");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.clients)("rowHover", true)("rows", 10)("showCurrentPageReport", true)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](9, _c0))("paginator", true)("filterDelay", 0)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](10, _c1));
      }
    },
    dependencies: [primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, primeng_table__WEBPACK_IMPORTED_MODULE_8__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_8__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_8__.SortIcon, primeng_table__WEBPACK_IMPORTED_MODULE_8__.ColumnFilter, _components_add_client_modal_add_client_modal_component__WEBPACK_IMPORTED_MODULE_1__.AddClientModalComponent, _components_delete_delete_item_delete_item_component__WEBPACK_IMPORTED_MODULE_2__.DeleteItemComponent, _components_edit_client_modal_edit_client_modal_component__WEBPACK_IMPORTED_MODULE_3__.EditClientModalComponent],
    styles: ["[_nghost-%COMP%]     {\n  \n}\n[_nghost-%COMP%]     .p-paginator .p-paginator-current {\n  margin-left: auto;\n}\n[_nghost-%COMP%]     .p-progressbar {\n  height: 0.5rem;\n  background-color: #D8DADC;\n}\n[_nghost-%COMP%]     .p-progressbar .p-progressbar-value {\n  background-color: #607D8B;\n}\n[_nghost-%COMP%]     .table-header {\n  display: flex;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]     .p-calendar .p-datepicker {\n  min-width: 25rem;\n}\n[_nghost-%COMP%]     .p-calendar .p-datepicker td {\n  font-weight: 400;\n}\n[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-header {\n  padding: 1rem;\n  text-align: left;\n  font-size: 1.5rem;\n}\n[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-paginator {\n  padding: 1rem;\n}\n[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-thead > tr > th {\n  text-align: left;\n}\n[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td {\n  cursor: auto;\n}\n[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-dropdown-label:not(.p-placeholder) {\n  text-transform: uppercase;\n}\n[_nghost-%COMP%]     .p-w-100 {\n  width: 100%;\n}\n[_nghost-%COMP%]     .p-datatable-customers .p-datatable-tbody > tr > td .p-column-title {\n  display: none;\n}\n\n@media screen and (max-width: 960px) {\n  [_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-thead > tr > th, [_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tfoot > tr > td {\n    display: none !important;\n  }\n  [_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tbody > tr {\n    border-bottom: 1px solid var(--layer-2);\n  }\n  [_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td {\n    text-align: left;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    border: 0 none;\n  }\n  [_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td .p-column-title {\n    min-width: 30%;\n    display: inline-block;\n    font-weight: bold;\n  }\n  [_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td p-progressbar {\n    width: 100%;\n  }\n  [_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td:last-child {\n    border-bottom: 1px solid var(--surface-d);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUF5REksZUFBQTtBQXZESjtBQUFRO0VBQ0ksaUJBQUE7QUFFWjtBQUVJO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0FBQVI7QUFFUTtFQUNJLHlCQUFBO0FBQVo7QUFJSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUZSO0FBS0k7RUFDSSxnQkFBQTtBQUhSO0FBS1E7RUFDSSxnQkFBQTtBQUhaO0FBUVE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQU5aO0FBU1E7RUFDSSxhQUFBO0FBUFo7QUFVUTtFQUNJLGdCQUFBO0FBUlo7QUFXUTtFQUNJLFlBQUE7QUFUWjtBQVlRO0VBQ0kseUJBQUE7QUFWWjtBQWNJO0VBQ0ksV0FBQTtBQVpSO0FBZ0JJO0VBQ0ksYUFBQTtBQWRSOztBQWtCQTtFQUtnQjs7SUFFSSx3QkFBQTtFQW5CbEI7RUFzQmM7SUFDSSx1Q0FBQTtFQXBCbEI7RUFzQmtCO0lBQ0ksZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsY0FBQTtFQXBCdEI7RUFzQnNCO0lBQ0ksY0FBQTtJQUNBLHFCQUFBO0lBQ0EsaUJBQUE7RUFwQjFCO0VBdUJzQjtJQUNJLFdBQUE7RUFyQjFCO0VBd0JzQjtJQUNJLHlDQUFBO0VBdEIxQjtBQUNGIiwiZmlsZSI6ImNsaWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAge1xuICAvKiBSZXNwb25zaXZlICovXG59XG46aG9zdCA6Om5nLWRlZXAgLnAtcGFnaW5hdG9yIC5wLXBhZ2luYXRvci1jdXJyZW50IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG46aG9zdCA6Om5nLWRlZXAgLnAtcHJvZ3Jlc3NiYXIge1xuICBoZWlnaHQ6IDAuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q4REFEQztcbn1cbjpob3N0IDo6bmctZGVlcCAucC1wcm9ncmVzc2JhciAucC1wcm9ncmVzc2Jhci12YWx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7XG59XG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbjpob3N0IDo6bmctZGVlcCAucC1jYWxlbmRhciAucC1kYXRlcGlja2VyIHtcbiAgbWluLXdpZHRoOiAyNXJlbTtcbn1cbjpob3N0IDo6bmctZGVlcCAucC1jYWxlbmRhciAucC1kYXRlcGlja2VyIHRkIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbjpob3N0IDo6bmctZGVlcCAucC1kYXRhdGFibGUucC1kYXRhdGFibGUtY3VzdG9tZXJzIC5wLWRhdGF0YWJsZS1oZWFkZXIge1xuICBwYWRkaW5nOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbjpob3N0IDo6bmctZGVlcCAucC1kYXRhdGFibGUucC1kYXRhdGFibGUtY3VzdG9tZXJzIC5wLXBhZ2luYXRvciB7XG4gIHBhZGRpbmc6IDFyZW07XG59XG46aG9zdCA6Om5nLWRlZXAgLnAtZGF0YXRhYmxlLnAtZGF0YXRhYmxlLWN1c3RvbWVycyAucC1kYXRhdGFibGUtdGhlYWQgPiB0ciA+IHRoIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbjpob3N0IDo6bmctZGVlcCAucC1kYXRhdGFibGUucC1kYXRhdGFibGUtY3VzdG9tZXJzIC5wLWRhdGF0YWJsZS10Ym9keSA+IHRyID4gdGQge1xuICBjdXJzb3I6IGF1dG87XG59XG46aG9zdCA6Om5nLWRlZXAgLnAtZGF0YXRhYmxlLnAtZGF0YXRhYmxlLWN1c3RvbWVycyAucC1kcm9wZG93bi1sYWJlbDpub3QoLnAtcGxhY2Vob2xkZXIpIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbjpob3N0IDo6bmctZGVlcCAucC13LTEwMCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5wLWRhdGF0YWJsZS1jdXN0b21lcnMgLnAtZGF0YXRhYmxlLXRib2R5ID4gdHIgPiB0ZCAucC1jb2x1bW4tdGl0bGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICA6aG9zdCA6Om5nLWRlZXAgLnAtZGF0YXRhYmxlLnAtZGF0YXRhYmxlLWN1c3RvbWVycyAucC1kYXRhdGFibGUtdGhlYWQgPiB0ciA+IHRoLFxuICA6aG9zdCA6Om5nLWRlZXAgLnAtZGF0YXRhYmxlLnAtZGF0YXRhYmxlLWN1c3RvbWVycyAucC1kYXRhdGFibGUtdGZvb3QgPiB0ciA+IHRkIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgOmhvc3QgOjpuZy1kZWVwIC5wLWRhdGF0YWJsZS5wLWRhdGF0YWJsZS1jdXN0b21lcnMgLnAtZGF0YXRhYmxlLXRib2R5ID4gdHIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1sYXllci0yKTtcbiAgfVxuICA6aG9zdCA6Om5nLWRlZXAgLnAtZGF0YXRhYmxlLnAtZGF0YXRhYmxlLWN1c3RvbWVycyAucC1kYXRhdGFibGUtdGJvZHkgPiB0ciA+IHRkIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXI6IDAgbm9uZTtcbiAgfVxuICA6aG9zdCA6Om5nLWRlZXAgLnAtZGF0YXRhYmxlLnAtZGF0YXRhYmxlLWN1c3RvbWVycyAucC1kYXRhdGFibGUtdGJvZHkgPiB0ciA+IHRkIC5wLWNvbHVtbi10aXRsZSB7XG4gICAgbWluLXdpZHRoOiAzMCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIDpob3N0IDo6bmctZGVlcCAucC1kYXRhdGFibGUucC1kYXRhdGFibGUtY3VzdG9tZXJzIC5wLWRhdGF0YWJsZS10Ym9keSA+IHRyID4gdGQgcC1wcm9ncmVzc2JhciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgOmhvc3QgOjpuZy1kZWVwIC5wLWRhdGF0YWJsZS5wLWRhdGF0YWJsZS1jdXN0b21lcnMgLnAtZGF0YXRhYmxlLXRib2R5ID4gdHIgPiB0ZDpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS1kKTtcbiAgfVxufSJdfQ== */\n/*# sourceURL=webpack://./src/app/pages/clients/clients.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY2xpZW50cy9jbGllbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBeURJLGVBQUE7QUF2REo7QUFBUTtFQUNJLGlCQUFBO0FBRVo7QUFFSTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtBQUFSO0FBRVE7RUFDSSx5QkFBQTtBQUFaO0FBSUk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFGUjtBQUtJO0VBQ0ksZ0JBQUE7QUFIUjtBQUtRO0VBQ0ksZ0JBQUE7QUFIWjtBQVFRO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFOWjtBQVNRO0VBQ0ksYUFBQTtBQVBaO0FBVVE7RUFDSSxnQkFBQTtBQVJaO0FBV1E7RUFDSSxZQUFBO0FBVFo7QUFZUTtFQUNJLHlCQUFBO0FBVlo7QUFjSTtFQUNJLFdBQUE7QUFaUjtBQWdCSTtFQUNJLGFBQUE7QUFkUjs7QUFrQkE7RUFLZ0I7O0lBRUksd0JBQUE7RUFuQmxCO0VBc0JjO0lBQ0ksdUNBQUE7RUFwQmxCO0VBc0JrQjtJQUNJLGdCQUFBO0lBQ0EsV0FBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLGNBQUE7RUFwQnRCO0VBc0JzQjtJQUNJLGNBQUE7SUFDQSxxQkFBQTtJQUNBLGlCQUFBO0VBcEIxQjtFQXVCc0I7SUFDSSxXQUFBO0VBckIxQjtFQXdCc0I7SUFDSSx5Q0FBQTtFQXRCMUI7QUFDRjtBQUNBLG81SEFBbzVIIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIHtcbiAgLyogUmVzcG9uc2l2ZSAqL1xufVxuOmhvc3QgOjpuZy1kZWVwIC5wLXBhZ2luYXRvciAucC1wYWdpbmF0b3ItY3VycmVudCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5wLXByb2dyZXNzYmFyIHtcbiAgaGVpZ2h0OiAwLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNEOERBREM7XG59XG46aG9zdCA6Om5nLWRlZXAgLnAtcHJvZ3Jlc3NiYXIgLnAtcHJvZ3Jlc3NiYXItdmFsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3RDhCO1xufVxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG46aG9zdCA6Om5nLWRlZXAgLnAtY2FsZW5kYXIgLnAtZGF0ZXBpY2tlciB7XG4gIG1pbi13aWR0aDogMjVyZW07XG59XG46aG9zdCA6Om5nLWRlZXAgLnAtY2FsZW5kYXIgLnAtZGF0ZXBpY2tlciB0ZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG46aG9zdCA6Om5nLWRlZXAgLnAtZGF0YXRhYmxlLnAtZGF0YXRhYmxlLWN1c3RvbWVycyAucC1kYXRhdGFibGUtaGVhZGVyIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG46aG9zdCA6Om5nLWRlZXAgLnAtZGF0YXRhYmxlLnAtZGF0YXRhYmxlLWN1c3RvbWVycyAucC1wYWdpbmF0b3Ige1xuICBwYWRkaW5nOiAxcmVtO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5wLWRhdGF0YWJsZS5wLWRhdGF0YWJsZS1jdXN0b21lcnMgLnAtZGF0YXRhYmxlLXRoZWFkID4gdHIgPiB0aCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLnAtZGF0YXRhYmxlLnAtZGF0YXRhYmxlLWN1c3RvbWVycyAucC1kYXRhdGFibGUtdGJvZHkgPiB0ciA+IHRkIHtcbiAgY3Vyc29yOiBhdXRvO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5wLWRhdGF0YWJsZS5wLWRhdGF0YWJsZS1jdXN0b21lcnMgLnAtZHJvcGRvd24tbGFiZWw6bm90KC5wLXBsYWNlaG9sZGVyKSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG46aG9zdCA6Om5nLWRlZXAgLnAtdy0xMDAge1xuICB3aWR0aDogMTAwJTtcbn1cbjpob3N0IDo6bmctZGVlcCAucC1kYXRhdGFibGUtY3VzdG9tZXJzIC5wLWRhdGF0YWJsZS10Ym9keSA+IHRyID4gdGQgLnAtY29sdW1uLXRpdGxlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgOmhvc3QgOjpuZy1kZWVwIC5wLWRhdGF0YWJsZS5wLWRhdGF0YWJsZS1jdXN0b21lcnMgLnAtZGF0YXRhYmxlLXRoZWFkID4gdHIgPiB0aCxcbiAgOmhvc3QgOjpuZy1kZWVwIC5wLWRhdGF0YWJsZS5wLWRhdGF0YWJsZS1jdXN0b21lcnMgLnAtZGF0YXRhYmxlLXRmb290ID4gdHIgPiB0ZCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIDpob3N0IDo6bmctZGVlcCAucC1kYXRhdGFibGUucC1kYXRhdGFibGUtY3VzdG9tZXJzIC5wLWRhdGF0YWJsZS10Ym9keSA+IHRyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbGF5ZXItMik7XG4gIH1cbiAgOmhvc3QgOjpuZy1kZWVwIC5wLWRhdGF0YWJsZS5wLWRhdGF0YWJsZS1jdXN0b21lcnMgLnAtZGF0YXRhYmxlLXRib2R5ID4gdHIgPiB0ZCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAwIG5vbmU7XG4gIH1cbiAgOmhvc3QgOjpuZy1kZWVwIC5wLWRhdGF0YWJsZS5wLWRhdGF0YWJsZS1jdXN0b21lcnMgLnAtZGF0YXRhYmxlLXRib2R5ID4gdHIgPiB0ZCAucC1jb2x1bW4tdGl0bGUge1xuICAgIG1pbi13aWR0aDogMzAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICA6aG9zdCA6Om5nLWRlZXAgLnAtZGF0YXRhYmxlLnAtZGF0YXRhYmxlLWN1c3RvbWVycyAucC1kYXRhdGFibGUtdGJvZHkgPiB0ciA+IHRkIHAtcHJvZ3Jlc3NiYXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIDpob3N0IDo6bmctZGVlcCAucC1kYXRhdGFibGUucC1kYXRhdGFibGUtY3VzdG9tZXJzIC5wLWRhdGF0YWJsZS10Ym9keSA+IHRyID4gdGQ6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtZCk7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 34246:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/create-document/create-billing-form/create-billing-form.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateBillingFormComponent": () => (/* binding */ CreateBillingFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_save_to_cookie_save_to_cookie_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/save-to-cookie/save-to-cookie.service */ 59306);
/* harmony import */ var _services_fetch_doc_fetch_doc_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/fetch-doc/fetch-doc.service */ 79697);
/* harmony import */ var _services_SharedData_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/SharedData/shared-data.service */ 50365);
/* harmony import */ var _services_Http_submit_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/Http/submit-form.service */ 9810);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_pdf_generator_pdf_generator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/pdf-generator/pdf-generator.service */ 17927);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _components_add_client_modal_add_client_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/add-client-modal/add-client-modal.component */ 58071);












function CreateBillingFormComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " This Field is Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateBillingFormComponent_option_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const client_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", client_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](client_r6.client_name);
  }
}
function CreateBillingFormComponent_span_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Date Field Is Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateBillingFormComponent_div_28_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " This Field is Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateBillingFormComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25)(1, "div", 7)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Avance (*): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, CreateBillingFormComponent_div_28_span_4_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r3.BillingForm.get("deposit").invalid || ctx_r3.submitted) && (ctx_r3.BillingForm.get("deposit").errors == null ? null : ctx_r3.BillingForm.get("deposit").errors.required));
  }
}
function CreateBillingFormComponent_div_29_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " This Field is Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateBillingFormComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 15)(1, "div", 7)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "M\u00E9thode de paiement (*): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, CreateBillingFormComponent_div_29_span_4_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "select", 27)(6, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Choose a paiment method");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Cheque");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Lettre De Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Bank Tansfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r4.BillingForm.get("document_payment_method").invalid || ctx_r4.submitted) && (ctx_r4.BillingForm.get("document_payment_method").errors == null ? null : ctx_r4.BillingForm.get("document_payment_method").errors.invalidClientName));
  }
}
function CreateBillingFormComponent_div_30_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " This Field is Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateBillingFormComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 15)(1, "div", 7)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "TTC ou HT (*): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, CreateBillingFormComponent_div_30_span_4_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "select", 33)(6, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "HT");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "TTC");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r5.BillingForm.get("ttc_or_ht").invalid || ctx_r5.submitted) && (ctx_r5.BillingForm.get("ttc_or_ht").errors == null ? null : ctx_r5.BillingForm.get("ttc_or_ht").errors.required));
  }
}
class CreateBillingFormComponent {
  constructor(SaveToCookieService,
  // Service for saving data to cookies
  FetchDocService,
  // Service for fetching document data
  SharedDataService,
  // Service for shared data
  SubmitFormService,
  // Service for shared data
  fb,
  // Form builder for creating forms
  route, pdfService, messageService, router) {
    this.SaveToCookieService = SaveToCookieService;
    this.FetchDocService = FetchDocService;
    this.SharedDataService = SharedDataService;
    this.SubmitFormService = SubmitFormService;
    this.fb = fb;
    this.route = route;
    this.pdfService = pdfService;
    this.messageService = messageService;
    this.router = router;
    this.submitted = false;
    // Example data
    this.user = {
      username: 'JohnDoe'
    };
    this.todayDate = '2023-10-12';
  }
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.TYPE = params.type;
      this.SetupCookies();
      this.FetchDocService.getAllClient().subscribe(response => {
        this.clients = response;
      }, error => {
        console.log("a7san error", error);
        this.clients = [];
      });
    });
  }
  SetupCookies() {
    // SetupCookies : Create a temporary data cookie with the fetched data ID
    let temp_data = JSON.parse(localStorage.getItem(this.TYPE)); // check if Cookies are setuped if not setup it
    if (temp_data == null) {
      // if cookies not setuped
      this.SaveToCookieService.setupCookies(this.TYPE); // setuping cookies
    } else if (temp_data !== null) {
      // if cookies are setuped
      temp_data = temp_data['billing_data'];
      let temp_data_length = Object.values(temp_data).length;
      // Check if there is data saved in cookies
      if (temp_data_length > 0) {
        // Data found in table, load data
        if (this.TYPE == "invoices") {
          this.BillingForm = this.fb.group({
            document_client: [temp_data.document_client, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, this.validateClientName]],
            document_date: [temp_data.document_date, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            deposit: [temp_data.deposit, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            document_payment_method: [temp_data.document_payment_method, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, this.validateClientName]],
            ttc_or_ht: [temp_data.ttc_or_ht, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required] // Initialize ttc_or_ht field with default value 'TTC'
          });
        } else {
          this.BillingForm = this.fb.group({
            document_client: [temp_data.document_client, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, this.validateClientName]],
            document_date: [temp_data.document_date, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required] // Initialize invoice date field
          });
        }
      } else if (temp_data_length == 0) {
        // No data found in cookies, loading empty form
        console.log('[+] app-billing-items: Data Not Found in cookies, loading empty billing form...');
        if (this.TYPE == "invoices") {
          this.BillingForm = this.fb.group({
            document_client: ["-", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, this.validateClientName]],
            document_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            deposit: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            document_payment_method: ['-', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, this.validateClientName]],
            ttc_or_ht: ['TTC', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required] // Initialize ttc_or_ht field with default value 'TTC'
          });
        } else {
          this.BillingForm = this.fb.group({
            document_client: ['-', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, this.validateClientName]],
            document_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required] // Initialize invoice date field
          });
        }
      }
    }
  }

  validateClientName(control) {
    if (control.value !== '-') {
      return null; // Validation passed
    } else {
      return {
        invalidClientName: true
      }; // Validation failed
    }
  }

  handleClientDataEvent(data) {
    this.clients = data['clientData'];
    this.BillingForm.patchValue({
      "document_client": data['selectedClient']
    }); // select new created client
  }
  // Function to clear cache (delete cookies with the same ID as the current invoice ID)
  ClearCache() {
    this.SaveToCookieService.ClearCache(this.TYPE);
    location.reload();
  }
  // Function called when form changes
  onFormChange() {
    console.log('Form Changes');
    let data = this.BillingForm.getRawValue();
    console.log(data);
    this.SaveToCookieService.save(this.TYPE, data, "billing");
  }
  onSubmit() {
    this.submitted = true;
    let table_data = this.SaveToCookieService.getData(this.TYPE, null);
    let isNotEmpty = Object.keys(table_data['table_data']).length > 0; // check data in the table
    const isvalid = this.isValid(table_data);
    // stop here if form is invalid
    if (this.BillingForm.invalid || isNotEmpty == false || isvalid == false) {
      this.messageService.add({
        severity: 'error',
        summary: 'Form not complete please to check that all required field are filled'
      });
    } else {
      let formated_data = {};
      formated_data = table_data['billing_data'];
      formated_data['document_items'] = table_data['table_data'];
      this.SubmitFormService.CreateDocument(this.TYPE).subscribe(response => {
        // display form values on success
        this.messageService.add({
          severity: 'info',
          summary: 'Document Has Been Created ' + response.document_number
        });
        this.pdfService.generateInvoice(response);
        this.SaveToCookieService.ClearCache(this.TYPE);
        this.router.navigateByUrl(`/${this.TYPE}/list`);
      }, error => {
        this.messageService.add({
          severity: 'error',
          summary: 'JSON.stringify(error.error)'
        });
      });
    }
  }
  isValid(table_data) {
    let valid = false;
    table_data['table_data'].forEach(element => {
      let id = element.id.toString().trim();
      let name = element.name.toString().trim();
      let quantity = element.quantity.toString().trim();
      let unity_total = element.unity_total.toString().trim();
      let total = element.total.toString().trim();
      if (id != '' && name != '' && quantity != '' && unity_total != '' && total != '') {
        valid = true;
      } else {
        valid = false;
      }
    });
    return valid;
  }
  static #_ = this.ɵfac = function CreateBillingFormComponent_Factory(t) {
    return new (t || CreateBillingFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_save_to_cookie_save_to_cookie_service__WEBPACK_IMPORTED_MODULE_0__.SaveToCookieService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_fetch_doc_fetch_doc_service__WEBPACK_IMPORTED_MODULE_1__.FetchDocService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_SharedData_shared_data_service__WEBPACK_IMPORTED_MODULE_2__.SharedDataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_Http_submit_form_service__WEBPACK_IMPORTED_MODULE_3__.SubmitFormService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_pdf_generator_pdf_generator_service__WEBPACK_IMPORTED_MODULE_4__.PdfGeneratorService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_9__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: CreateBillingFormComponent,
    selectors: [["app-create-billing-form"]],
    decls: 37,
    vars: 7,
    consts: [[1, "card", "card-default"], [1, "card-header"], [1, "card-title"], [1, "btn", "btn-info", "add-new", 2, "background-color", "red !important", "background-image", "none", 3, "click"], [1, "card-body"], ["id", "Form", 3, "formGroup", "change", "ngSubmit"], ["type", "hidden", "name", "datatable", "id", "tableinput", "value", "", "required", ""], [1, "form-group"], ["class", "text-danger", 4, "ngIf"], [2, "display", "flex"], ["id", "document_client", "formControlName", "document_client", 1, "p-inputtext", "p-component", "p-element", "ng-pristine", "ng-valid", "ng-touched", 2, "margin-right", "10px", "width", "100%"], ["value", "-", "selected", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "clients"], [1, "row"], [1, "col-sm-6"], ["type", "date", "id", "Date", "autocomplete", "off", "formControlName", "document_date", "value", "", "placeholder", "...", "required", "", 1, "form-control"], ["id", "avance", "class", "col-sm-6", 4, "ngIf"], ["class", "col-sm-6", 4, "ngIf"], [1, "ButtnEnregister"], ["id", "savebttn", "type", "submit", 1, "btn", "btn-default", "btn-info"], ["id", "IconPlus", 1, "fas", "fa-plus"], ["id", "IconSpin", 1, "spinner-border", "spinner-border-sm", 2, "display", "none"], [1, "text-danger"], [3, "value"], ["id", "avance", 1, "col-sm-6"], ["type", "number", "formControlName", "deposit", "value", "0", 1, "form-control"], ["id", "paiementmethod", "formControlName", "document_payment_method", 1, "form-control"], ["value", "-", "disabled", "", "selected", ""], ["value", "Cash"], ["value", "Cheque"], ["value", "Lettre"], ["value", "Bank_Transfer"], ["id", "ttc_or_ht", "formControlName", "ttc_or_ht", 1, "form-control"]],
    template: function CreateBillingFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Enter Billing Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateBillingFormComponent_Template_button_click_4_listener() {
          return ctx.ClearCache();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 4)(7, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function CreateBillingFormComponent_Template_form_change_7_listener() {
          return ctx.onFormChange();
        })("ngSubmit", function CreateBillingFormComponent_Template_form_ngSubmit_7_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 7)(10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Client Name (*) : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, CreateBillingFormComponent_span_12_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 9)(14, "select", 10)(15, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Select a Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, CreateBillingFormComponent_option_17_Template, 2, 2, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "app-add-client-modal", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("clients", function CreateBillingFormComponent_Template_app_add_client_modal_clients_18_listener($event) {
          return ctx.handleClientDataEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 14)(20, "div", 15)(21, "div", 7)(22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Date (*):");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, CreateBillingFormComponent_span_24_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, CreateBillingFormComponent_div_28_Template, 6, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, CreateBillingFormComponent_div_29_Template, 16, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, CreateBillingFormComponent_div_30_Template, 10, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 19)(32, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "i", 21)(34, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "SAVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.BillingForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.BillingForm.get("document_client").invalid || ctx.submitted) && (ctx.BillingForm.get("document_client").errors == null ? null : ctx.BillingForm.get("document_client").errors.invalidClientName));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.clients);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.BillingForm.get("document_date").invalid || ctx.submitted) && (ctx.BillingForm.get("document_date").errors == null ? null : ctx.BillingForm.get("document_date").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.TYPE === "invoices");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.TYPE === "invoices");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.TYPE === "invoices");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _components_add_client_modal_add_client_modal_component__WEBPACK_IMPORTED_MODULE_5__.AddClientModalComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtYmlsbGluZy1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceURL=webpack://./src/app/pages/create-document/create-billing-form/create-billing-form.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY3JlYXRlLWRvY3VtZW50L2NyZWF0ZS1iaWxsaW5nLWZvcm0vY3JlYXRlLWJpbGxpbmctZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esb0xBQW9MIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 61503:
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/create-document/create-document-table-items/create-document-table-items.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateDocumentTableItemsComponent": () => (/* binding */ CreateDocumentTableItemsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_save_to_cookie_save_to_cookie_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/save-to-cookie/save-to-cookie.service */ 59306);
/* harmony import */ var _services_SharedData_shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/SharedData/shared-data.service */ 50365);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 76328);








function CreateDocumentTableItemsComponent_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td")(2, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CreateDocumentTableItemsComponent_tr_21_Template_input_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const item_r5 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](item_r5.quantity = $event);
    })("input", function CreateDocumentTableItemsComponent_tr_21_Template_input_input_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const item_r5 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.RowDataSave(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td")(4, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CreateDocumentTableItemsComponent_tr_21_Template_input_ngModelChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const item_r5 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](item_r5.name = $event);
    })("input", function CreateDocumentTableItemsComponent_tr_21_Template_input_input_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const item_r5 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.RowDataSave(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td")(6, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CreateDocumentTableItemsComponent_tr_21_Template_input_ngModelChange_6_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const item_r5 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](item_r5.unity_total = $event);
    })("input", function CreateDocumentTableItemsComponent_tr_21_Template_input_input_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const item_r5 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r13.RowDataSave(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td")(8, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CreateDocumentTableItemsComponent_tr_21_Template_input_ngModelChange_8_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const item_r5 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](item_r5.total = $event);
    })("change", function CreateDocumentTableItemsComponent_tr_21_Template_input_change_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const item_r5 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.RowDataSave(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td")(10, "p-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateDocumentTableItemsComponent_tr_21_Template_p_button_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const i_r6 = restoredCtx.index;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r16.deleteRow(i_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", item_r5.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", item_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", item_r5.unity_total);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", item_r5.total);
  }
}
function CreateDocumentTableItemsComponent_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 19)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "TOTAL HT");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.TOTAL_HT);
  }
}
function CreateDocumentTableItemsComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 20)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "TOTAL HT");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.TOTAL_HT);
  }
}
function CreateDocumentTableItemsComponent_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 21)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "TOTAL TTC");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 21)(9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "TVA");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.TOTAL_TTC);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.TVA);
  }
}
class CreateDocumentTableItemsComponent {
  constructor(SaveToCookieService, SharedDataService, route) {
    this.SaveToCookieService = SaveToCookieService;
    this.SharedDataService = SharedDataService;
    this.route = route;
    this.N_ELEMENT = 0;
    this.TOTAL_HT = 0;
    this.TOTAL_TTC = 0;
    this.TVA = 0;
    this.tableData = [];
  }
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.TYPE = params.type;
      // Get saved data from cookies based on Doc_ID
      const temp_data = this.SaveToCookieService.getData(this.TYPE, 'table');
      // Log the retrieved temp_data
      console.log("[+] app-table-items: Getting Saved Table Data =>", temp_data);
      // Check if there is data saved in cookies
      if (temp_data.length > 0) {
        // Data found in table, load data
        console.log('[+] app-table-items: Data found in cookies, loading data...');
        // Set tableData to the retrieved data
        this.tableData = temp_data;
        // Calculate total values based on the loaded data
        this.calculateTotalValues();
      } else if (temp_data.length == 0) {
        // No data found in cookies, loading empty table
        console.log('[+] app-table-items: Data Not Found in cookies, loading empty table...');
      }
    });
  }
  // Function to calculate values
  calculateTotalValues() {
    // Get the number of elements in the tableData array
    this.N_ELEMENT = this.tableData.length;
    let total = 0;
    // Iterate through tableData to calculate the total
    for (let i = 0; i < this.tableData.length; i++) {
      total += this.tableData[i].total || 0;
    }
    // Set total before tax (HT)
    this.TOTAL_HT = total;
    // Set TVA (Value Added Tax)
    this.TVA = 20;
    // Calculate total including tax (TTC)
    this.TOTAL_TTC = this.TOTAL_HT + this.TOTAL_HT * this.TVA / 100;
  }
  // Function to add a new row to the tableData
  addRow() {
    console.log(this.tableData);
    // Add a new row with default values
    this.tableData.push({
      id: this.tableData.length + 1,
      name: '',
      quantity: 0,
      unity_total: 0,
      total: 0
    });
    // Increment the number of elements
    this.N_ELEMENT = this.N_ELEMENT + 1;
    // Save the updated tableData to cookies
    this.SaveToCookieService.save(this.TYPE, this.tableData, 'table');
  }
  // Function to clean a row by ensuring quantity and unity_total are non-negative
  CleanRow(item) {
    if (item.quantity < 0 || item.unity_total < 0) {
      item.quantity = Math.abs(item.quantity);
      item.unity_total = Math.abs(item.unity_total);
    }
    // Calculate the total for the row
    item.total = item.quantity * item.unity_total;
  }
  // Function to save row data after cleaning
  RowDataSave(item) {
    // Clean the row
    this.CleanRow(item);
    // Recalculate total values
    this.calculateTotalValues();
    // Save the updated tableData to cookies
    this.SaveToCookieService.save(this.TYPE, this.tableData, 'table');
  }
  // Function to delete a row from tableData
  deleteRow(index) {
    // Remove the row at the specified index
    this.tableData.splice(index, 1);
    // Recalculate total values
    this.calculateTotalValues();
    // Save the updated tableData to cookies
    this.SaveToCookieService.save(this.TYPE, this.tableData, 'table');
  }
  static #_ = this.ɵfac = function CreateDocumentTableItemsComponent_Factory(t) {
    return new (t || CreateDocumentTableItemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_save_to_cookie_save_to_cookie_service__WEBPACK_IMPORTED_MODULE_0__.SaveToCookieService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_SharedData_shared_data_service__WEBPACK_IMPORTED_MODULE_1__.SharedDataService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: CreateDocumentTableItemsComponent,
    selectors: [["app-create-document-table-items"]],
    decls: 33,
    vars: 6,
    consts: [[1, "card", "card-default"], [1, "card-header"], [1, "card-title"], [1, "btn", "btn-info", "add-new", 3, "click"], [1, "card-body", "table-responsive", "p-0", 2, "height", "552px"], [1, "table", "table-head-fixed", "text-nowrap", 3, "id"], ["id", "smallth"], ["id", "designationth"], [4, "ngFor", "ngForOf"], [1, "card-header", 2, "text-align", "center", "background", "#0d899a", "color", "white"], [1, "text-left", 2, "float", "left"], ["id", "price"], [4, "ngIf", "ngIfElse"], ["notInvoice", ""], [4, "ngIf"], ["type", "number", "min", "0", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], ["required", "", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], ["type", "number", "min", "0", "disabled", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["icon", "pi pi-times", "styleClass", "p-button-rounded p-button-sm p-button-danger p-button-text p-button-raised", 3, "click"], [1, "text-center"], [1, "text-left", "float-right"], [1, "text-right", 2, "float", "right"]],
    template: function CreateDocumentTableItemsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Table of Invoice Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateDocumentTableItemsComponent_Template_button_click_4_listener() {
          return ctx.addRow();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Add Row");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "table", 5)(8, "thead")(9, "tr")(10, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Qs");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "DESIGNATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "P.U");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "P.T");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, CreateDocumentTableItemsComponent_tr_21_Template, 11, 4, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 9)(23, "span", 10)(24, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "N");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, CreateDocumentTableItemsComponent_ng_container_29_Template, 7, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, CreateDocumentTableItemsComponent_ng_template_30_Template, 6, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, CreateDocumentTableItemsComponent_ng_container_32_Template, 14, 2, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("id", ctx.TYPE);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.tableData);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.N_ELEMENT);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.TYPE === "invoices")("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.TYPE === "invoices");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, primeng_button__WEBPACK_IMPORTED_MODULE_6__.Button],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtZG9jdW1lbnQtdGFibGUtaXRlbXMuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceURL=webpack://./src/app/pages/create-document/create-document-table-items/create-document-table-items.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY3JlYXRlLWRvY3VtZW50L2NyZWF0ZS1kb2N1bWVudC10YWJsZS1pdGVtcy9jcmVhdGUtZG9jdW1lbnQtdGFibGUtaXRlbXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdNQUFnTSIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 29603:
/*!************************************************************************************!*\
  !*** ./src/app/pages/create-document/create-document/create-document.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateDocumentComponent": () => (/* binding */ CreateDocumentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_fetch_doc_fetch_doc_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/fetch-doc/fetch-doc.service */ 79697);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_SharedData_shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/SharedData/shared-data.service */ 50365);
/* harmony import */ var _services_Auth_JWTAuthService_jwt_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/Auth/JWTAuthService/jwt-auth-service.service */ 95928);
/* harmony import */ var _create_billing_form_create_billing_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../create-billing-form/create-billing-form.component */ 34246);
/* harmony import */ var _create_document_table_items_create_document_table_items_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../create-document-table-items/create-document-table-items.component */ 61503);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);









class CreateDocumentComponent {
  constructor(FetchDocService, route, SharedDataService,
  // Service for shared data
  jwtHelper) {
    this.FetchDocService = FetchDocService;
    this.route = route;
    this.SharedDataService = SharedDataService;
    this.jwtHelper = jwtHelper;
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.TYPE = params['type'];
      this.User = this.jwtHelper.getUser().username;
    });
  }
  static #_ = this.ɵfac = function CreateDocumentComponent_Factory(t) {
    return new (t || CreateDocumentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_fetch_doc_fetch_doc_service__WEBPACK_IMPORTED_MODULE_0__.FetchDocService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_SharedData_shared_data_service__WEBPACK_IMPORTED_MODULE_1__.SharedDataService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_Auth_JWTAuthService_jwt_auth_service_service__WEBPACK_IMPORTED_MODULE_2__.JwtAuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: CreateDocumentComponent,
    selectors: [["app-create-document"]],
    decls: 19,
    vars: 6,
    consts: [[1, "content-header"], [1, "container-fluid"], [1, "row", "mb-2"], [1, "col-sm-6"], [2, "font-weight", "bold"], [1, "content"], [1, "row"], [1, "col-md-6"]],
    template: function CreateDocumentComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1")(5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Welcome to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, " creation page");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "section", 5)(14, "div", 6)(15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "app-create-billing-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "app-create-document-table-items");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 2, ctx.User));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 4, ctx.TYPE));
      }
    },
    dependencies: [_create_billing_form_create_billing_form_component__WEBPACK_IMPORTED_MODULE_3__.CreateBillingFormComponent, _create_document_table_items_create_document_table_items_component__WEBPACK_IMPORTED_MODULE_4__.CreateDocumentTableItemsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.TitleCasePipe],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtZG9jdW1lbnQuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceURL=webpack://./src/app/pages/create-document/create-document/create-document.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY3JlYXRlLWRvY3VtZW50L2NyZWF0ZS1kb2N1bWVudC9jcmVhdGUtZG9jdW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdMQUFnTCIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 51649:
/*!**************************************************************!*\
  !*** ./src/app/pages/dashboard/chartjs/chartjs.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartjsComponent": () => (/* binding */ ChartjsComponent)
/* harmony export */ });
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js/auto */ 60670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class ChartjsComponent {
  ngOnInit() {
    this.createChart();
  }
  createChart() {
    var areaChartData = {
      labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
      datasets: [{
        label: 'les Factures Payées',
        backgroundColor: 'rgba(60,141,188,0.9)',
        borderColor: 'rgba(60,141,188,0.8)',
        pointRadius: false,
        pointColor: '#3b8bba',
        pointStrokeColor: 'rgba(60,141,188,1)',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(60,141,188,1)',
        data: [/* Add your data for 'les Factures Payées' */]
      }, {
        label: 'les Factures non Payées',
        backgroundColor: 'rgba(210, 214, 222, 1)',
        borderColor: 'rgba(210, 214, 222, 1)',
        pointRadius: false,
        pointColor: 'rgba(210, 214, 222, 1)',
        pointStrokeColor: '#c1c7d1',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data: [/* Add your data for 'les Factures non Payées' */]
      }]
    };
    var areaChartOptions = {
      maintainAspectRatio: false,
      responsive: true,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          gridLines: {
            display: false
          }
        }],
        yAxes: [{
          gridLines: {
            display: false
          }
        }]
      }
    };
    var barChartCanvas = document.getElementById('barChart');
    var barChartData = JSON.parse(JSON.stringify(areaChartData));
    var temp0 = areaChartData.datasets[0];
    var temp1 = areaChartData.datasets[1];
    barChartData.datasets[0] = temp1;
    barChartData.datasets[1] = temp0;
    var barChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      datasetFill: false
    };
    var barChart = new chart_js_auto__WEBPACK_IMPORTED_MODULE_0__["default"](barChartCanvas, {
      type: 'bar',
      data: barChartData,
      options: barChartOptions
    });
  }
  static #_ = this.ɵfac = function ChartjsComponent_Factory(t) {
    return new (t || ChartjsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ChartjsComponent,
    selectors: [["app-chartjs"]],
    decls: 1,
    vars: 0,
    consts: [["id", "barChart", "width", "764", "height", "230", 2, "height", "230px", "min-height", "230px", "display", "block", "width", "764px"]],
    template: function ChartjsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "canvas", 0);
      }
    },
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFydGpzLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceURL=webpack://./src/app/pages/dashboard/chartjs/chartjs.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2NoYXJ0anMvY2hhcnRqcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esb0tBQW9LIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 24789:
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var _services_fetch_doc_fetch_doc_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/fetch-doc/fetch-doc.service */ 79697);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _pages_dashboard_chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pages/dashboard/chartjs/chartjs.component */ 51649);






class DashboardComponent {
  constructor(http, messageService, FetchDocService) {
    this.http = http;
    this.messageService = messageService;
    this.FetchDocService = FetchDocService;
    this.Lenghts = {
      len_factures: 0,
      len_devis: 0,
      len_bl: 0,
      len_products: 0,
      len_clients: 0
    };
    this.HT = 1000;
    this.HT_BL = 1000;
    this.TTC = 1200;
    this.TVA_taux = 20;
  }
  ngOnInit() {
    this.FetchDocService.getDashboardData().subscribe(response => {
      this.Lenghts = {
        len_factures: response['total_invoices'],
        len_devis: response['total_devis'],
        len_bl: response['total_bl'],
        len_products: 0,
        len_clients: response['total_clients']
      };
    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: 'Request Error',
        detail: "Server Request Error, Please Contact The Administrator"
      });
    });
  }
  static #_ = this.ɵfac = function DashboardComponent_Factory(t) {
    return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_fetch_doc_fetch_doc_service__WEBPACK_IMPORTED_MODULE_0__.FetchDocService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: DashboardComponent,
    selectors: [["app-dashboard"]],
    decls: 76,
    vars: 5,
    consts: [[1, "content-header"], [1, "container-fluid"], [1, "row", "mb-2"], [1, "col-sm-6"], [1, "content"], [1, "row"], [1, "col-lg-3", "col-6"], [1, "small-box", "bg-info"], [1, "inner"], [1, "icon"], [1, "fas", "fa-file-invoice"], ["routerLink", "/invoices/list", 1, "small-box-footer"], [1, "fas", "fa-arrow-circle-right"], [1, "small-box", "bg-info", 2, "background", "linear-gradient( 311deg , rgb(12 24 33) -36%, rgb(14 108 123) 91%, rgb(24 117 132) 100%)"], ["routerLink", "/devis/list", 1, "small-box-footer"], [1, "small-box", "bg-info", 2, "background", "linear-gradient( 311deg , rgb(57 210 150) 41%, rgb(77 170 175) 91%, rgb(67 169 164) 100%)"], ["routerLink", "/bl/list", 1, "small-box-footer"], [1, "small-box", "bg-warning"], [1, "fas", "fa-shopping-basket"], ["href", "/settings/manage-products", 1, "small-box-footer"], [1, "small-box", "bg-success"], [1, "fas", "fa-handshake"], ["routerLink", "/settings/clients", 1, "small-box-footer"], [1, "card", "card-info"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "chart"]],
    template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "section", 4)(7, "div", 1)(8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Toutes les factures");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Afficher ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 6)(22, "div", 13)(23, "div", 8)(24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Touts les Devis");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " Afficher ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 6)(34, "div", 15)(35, "div", 8)(36, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Touts les Bon De Livraison");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, " Afficher ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 6)(46, "div", 17)(47, "div", 8)(48, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "G\u00E9rez vos produits");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, " G\u00E9rer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 6)(58, "div", 20)(59, "div", 8)(60, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "G\u00E9rez vos Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, " G\u00E9rer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 23)(70, "div", 24)(71, "h3", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "Statistiques des factures :");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 26)(74, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "app-chartjs");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.Lenghts.len_factures);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.Lenghts.len_devis);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.Lenghts.len_bl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.Lenghts.len_products);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.Lenghts.len_clients);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _pages_dashboard_chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_1__.ChartjsComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceURL=webpack://./src/app/pages/dashboard/dashboard.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0tBQXdLIiwic291cmNlUm9vdCI6IiJ9 */", ".btn-secondary[_ngcontent-%COMP%] {\n        background-color: #4b555fde;\n    }\n\n    .card-title[_ngcontent-%COMP%] {\n        margin-bottom: .75rem;\n        width: 83%;\n    }\n\n    span.badge.badge-warning.float-right[_ngcontent-%COMP%] {\n        font-size: 15px;\n    }\n\n    .bg-warning[_ngcontent-%COMP%], .bg-warning[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\n        color: #ffffff !important;\n    }\n\n    .small-box.bg-setting[_ngcontent-%COMP%] {\n        background-color: #11626f;\n        color: white;\n    }\n\n    .card-body.p-0[_ngcontent-%COMP%] {\n        max-height: 300px;\n        overflow-x: scroll;\n        overflow-y: scroll;\n    }\n\n    .card[_ngcontent-%COMP%] {\n        height: 400px;\n    }"]
  });
}

/***/ }),

/***/ 88695:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/edit-document/edit-billing-form/edit-billing-form.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditBillingFormComponent": () => (/* binding */ EditBillingFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_save_to_db_save_to_db_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/save-to-db/save-to-db.service */ 85868);
/* harmony import */ var _services_fetch_doc_fetch_doc_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/fetch-doc/fetch-doc.service */ 79697);
/* harmony import */ var _services_SharedData_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/SharedData/shared-data.service */ 50365);
/* harmony import */ var _services_Http_submit_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/Http/submit-form.service */ 9810);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_pdf_generator_pdf_generator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/pdf-generator/pdf-generator.service */ 17927);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/toast */ 29129);
/* harmony import */ var _components_add_client_modal_add_client_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/add-client-modal/add-client-modal.component */ 58071);













function EditBillingFormComponent_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " This Field is Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function EditBillingFormComponent_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const client_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", client_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](client_r6.client_name);
  }
}
function EditBillingFormComponent_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Date Field Is Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function EditBillingFormComponent_div_26_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " This Field is Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function EditBillingFormComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 23)(1, "div", 5)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Avance (*): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, EditBillingFormComponent_div_26_span_4_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r3.BillingForm.get("deposit").invalid || ctx_r3.submitted) && (ctx_r3.BillingForm.get("deposit").errors == null ? null : ctx_r3.BillingForm.get("deposit").errors.required));
  }
}
function EditBillingFormComponent_div_27_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " This Field is Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function EditBillingFormComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 13)(1, "div", 5)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "M\u00E9thode de paiement (*): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, EditBillingFormComponent_div_27_span_4_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "select", 25)(6, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Choose a paiment method");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Cheque");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Lettre De Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Bank Tansfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r4.BillingForm.get("document_payment_method").invalid || ctx_r4.submitted) && (ctx_r4.BillingForm.get("document_payment_method").errors == null ? null : ctx_r4.BillingForm.get("document_payment_method").errors.invalidClientName));
  }
}
function EditBillingFormComponent_div_28_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " This Field is Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function EditBillingFormComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 13)(1, "div", 5)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "TTC ou HT (*): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, EditBillingFormComponent_div_28_span_4_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "select", 31)(6, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "HT");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "TTC");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r5.BillingForm.get("ttc_or_ht").invalid || ctx_r5.submitted) && (ctx_r5.BillingForm.get("ttc_or_ht").errors == null ? null : ctx_r5.BillingForm.get("ttc_or_ht").errors.required));
  }
}
class EditBillingFormComponent {
  constructor(SaveToDbService,
  // Service for saving data to db
  FetchDocService,
  // Service for fetching document data
  SharedDataService,
  // Service for shared data
  SubmitFormService,
  // Service for shared data
  fb,
  // Form builder for creating forms
  route, pdfService) {
    this.SaveToDbService = SaveToDbService;
    this.FetchDocService = FetchDocService;
    this.SharedDataService = SharedDataService;
    this.SubmitFormService = SubmitFormService;
    this.fb = fb;
    this.route = route;
    this.pdfService = pdfService;
    this.submitted = false;
    // Example data
    this.user = {
      username: 'JohnDoe'
    };
    this.todayDate = '2023-10-12';
  }
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {
    console.log(this.document_data);
    this.route.params.subscribe(params => {
      this.FetchDocService.getAllClient().subscribe(response => {
        this.SharedDataService.setClients(response);
        this.clients = response;
      }, error => {
        console.error(error);
      });
      this.TYPE = params.type;
      this.ID = params.id;
      console.log('[+] app-billing-form: TYPE=', params.type);
      console.log('[+] app-billing-items: Data Not Found in cookies, loading empty billing form...');
      if (this.TYPE == "invoices") {
        this.BillingForm = this.fb.group({
          document_client: [this.document_data.document_client.id, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, this.validateClientName]],
          document_date: [this.document_data.document_date, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
          deposit: [this.document_data.deposit, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
          document_payment_method: [this.document_data.document_payment_method, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, this.validateClientName]],
          ttc_or_ht: [this.document_data.ttc_or_ht, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required] // Initialize ttc_or_ht field with default value 'TTC'
        });
      } else {
        this.BillingForm = this.fb.group({
          document_client: [this.document_data.document_client.id, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, this.validateClientName]],
          document_date: [this.document_data.document_date, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required] // Initialize invoice date field
        });
      }
    });
  }

  validateClientName(control) {
    if (control.value !== '-') {
      return null; // Validation passed
    } else {
      return {
        invalidClientName: true
      }; // Validation failed
    }
  }

  handleClientDataEvent(data) {
    this.clients = data['clientData'];
    this.BillingForm.patchValue({
      "document_client": data['selectedClient']
    }); // select new created client
    let form_data = this.BillingForm.getRawValue();
    this.SaveToDbService.AutoSave(this.ID, form_data, this.TYPE);
  }
  // Function called when form changes
  onFormChange() {
    let form_data = this.BillingForm.getRawValue();
    this.SaveToDbService.AutoSave(this.ID, form_data, this.TYPE);
  }
  PrintPDF() {
    let data = this.FetchDocService.getDocumentData(this.ID, this.TYPE).subscribe(respond => {
      this.pdfService.generateInvoice(respond);
      console.log(respond);
    }, error => {
      console.log(error);
    });
  }
  static #_ = this.ɵfac = function EditBillingFormComponent_Factory(t) {
    return new (t || EditBillingFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_save_to_db_save_to_db_service__WEBPACK_IMPORTED_MODULE_0__.SaveToDbService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_fetch_doc_fetch_doc_service__WEBPACK_IMPORTED_MODULE_1__.FetchDocService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_SharedData_shared_data_service__WEBPACK_IMPORTED_MODULE_2__.SharedDataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_Http_submit_form_service__WEBPACK_IMPORTED_MODULE_3__.SubmitFormService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_pdf_generator_pdf_generator_service__WEBPACK_IMPORTED_MODULE_4__.PdfGeneratorService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: EditBillingFormComponent,
    selectors: [["app-edit-billing-form"]],
    inputs: {
      document_data: "document_data"
    },
    decls: 35,
    vars: 7,
    consts: [[1, "card", "card-default"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["id", "Form", 3, "formGroup", "change"], [1, "form-group"], ["class", "text-danger", 4, "ngIf"], [2, "display", "flex"], ["id", "document_client", "formControlName", "document_client", 1, "p-inputtext", "p-component", "p-element", "ng-pristine", "ng-valid", "ng-touched", 2, "margin-right", "10px", "width", "100%"], ["value", "-", "selected", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "clients"], [1, "row"], [1, "col-sm-6"], ["type", "date", "id", "Date", "autocomplete", "off", "formControlName", "document_date", "value", "", "placeholder", "...", "required", "", 1, "form-control"], ["id", "avance", "class", "col-sm-6", 4, "ngIf"], ["class", "col-sm-6", 4, "ngIf"], [1, "ButtnEnregister"], ["id", "savebttn", "type", "button", 1, "btn", "btn-default", "btn-success", "add-new", 3, "click"], ["id", "IconPlus", 1, "fas", "fa-plus"], ["id", "IconSpin", 1, "spinner-border", "spinner-border-sm", 2, "display", "none"], [1, "text-danger"], [3, "value"], ["id", "avance", 1, "col-sm-6"], ["type", "number", "formControlName", "deposit", "value", "0", 1, "form-control"], ["id", "paiementmethod", "formControlName", "document_payment_method", 1, "form-control"], ["value", "-", "disabled", "", "selected", ""], ["value", "Cash"], ["value", "Cheque"], ["value", "Lettre"], ["value", "Bank_Transfer"], ["id", "ttc_or_ht", "formControlName", "ttc_or_ht", 1, "form-control"]],
    template: function EditBillingFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Edit Billing Information (Auto Saving)");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 3)(6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function EditBillingFormComponent_Template_form_change_6_listener() {
          return ctx.onFormChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 5)(8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Client Name (*) : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, EditBillingFormComponent_span_10_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 7)(12, "select", 8)(13, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Select a Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, EditBillingFormComponent_option_15_Template, 2, 2, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "app-add-client-modal", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("clients", function EditBillingFormComponent_Template_app_add_client_modal_clients_16_listener($event) {
          return ctx.handleClientDataEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 12)(18, "div", 13)(19, "div", 5)(20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Date (*):");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, EditBillingFormComponent_span_22_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, EditBillingFormComponent_div_26_Template, 6, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, EditBillingFormComponent_div_27_Template, 16, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, EditBillingFormComponent_div_28_Template, 10, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 17)(30, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EditBillingFormComponent_Template_button_click_30_listener() {
          return ctx.PrintPDF();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "i", 19)(32, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.BillingForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.BillingForm.get("document_client").invalid || ctx.submitted) && (ctx.BillingForm.get("document_client").errors == null ? null : ctx.BillingForm.get("document_client").errors.invalidClientName));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.clients);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.BillingForm.get("document_date").invalid || ctx.submitted) && (ctx.BillingForm.get("document_date").errors == null ? null : ctx.BillingForm.get("document_date").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.TYPE === "invoices");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.TYPE === "invoices");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.TYPE === "invoices");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, primeng_toast__WEBPACK_IMPORTED_MODULE_10__.Toast, _components_add_client_modal_add_client_modal_component__WEBPACK_IMPORTED_MODULE_5__.AddClientModalComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWJpbGxpbmctZm9ybS5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceURL=webpack://./src/app/pages/edit-document/edit-billing-form/edit-billing-form.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZWRpdC1kb2N1bWVudC9lZGl0LWJpbGxpbmctZm9ybS9lZGl0LWJpbGxpbmctZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0xBQWdMIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 5519:
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/edit-document/edit-document-table-items/edit-document-table-items.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditDocumentTableItemsComponent": () => (/* binding */ EditDocumentTableItemsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_save_to_db_save_to_db_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/save-to-db/save-to-db.service */ 85868);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 76328);







function EditDocumentTableItemsComponent_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td")(2, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditDocumentTableItemsComponent_tr_21_Template_input_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const item_r5 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](item_r5.quantity = $event);
    })("change", function EditDocumentTableItemsComponent_tr_21_Template_input_change_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const item_r5 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.RowDataSave(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td")(4, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditDocumentTableItemsComponent_tr_21_Template_input_ngModelChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const item_r5 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](item_r5.name = $event);
    })("change", function EditDocumentTableItemsComponent_tr_21_Template_input_change_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const item_r5 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.RowDataSave(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td")(6, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditDocumentTableItemsComponent_tr_21_Template_input_ngModelChange_6_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const item_r5 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](item_r5.unity_total = $event);
    })("change", function EditDocumentTableItemsComponent_tr_21_Template_input_change_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const item_r5 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.RowDataSave(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td")(8, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditDocumentTableItemsComponent_tr_21_Template_input_ngModelChange_8_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const item_r5 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](item_r5.total = $event);
    })("change", function EditDocumentTableItemsComponent_tr_21_Template_input_change_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const item_r5 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r15.RowDataSave(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td")(10, "p-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditDocumentTableItemsComponent_tr_21_Template_p_button_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const i_r6 = restoredCtx.index;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.deleteRow(i_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", item_r5.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", item_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", item_r5.unity_total);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", item_r5.total);
  }
}
function EditDocumentTableItemsComponent_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 19)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "TOTAL HT");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.TOTAL_HT);
  }
}
function EditDocumentTableItemsComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 20)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "TOTAL HT");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.TOTAL_HT);
  }
}
function EditDocumentTableItemsComponent_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 21)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "TOTAL TTC");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 21)(9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "TVA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.TOTAL_TTC);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.TVA);
  }
}
class EditDocumentTableItemsComponent {
  constructor(SaveToDbService, route) {
    this.SaveToDbService = SaveToDbService;
    this.route = route;
    this.N_ELEMENT = 0;
    this.TOTAL_HT = 0;
    this.TOTAL_TTC = 0;
    this.TVA = 0;
    this.tableData = [];
  }
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.TYPE = params.type;
      this.ID = params.id;
      // Get saved data from DB based on Doc_ID
      const temp_data = this.document_data.document_items;
      // Log the retrieved temp_data
      console.log("[+] app-table-items: Getting Saved Table Data =>", temp_data);
      // Check if there is data saved in DB
      if (temp_data.length > 0) {
        // Data found in table, load data
        console.log('[+] app-table-items: Data found in DB, loading data...');
        // Set tableData to the retrieved data
        this.tableData = temp_data;
        // Calculate total values based on the loaded data
        this.calculateTotalValues();
      } else if (temp_data.length == 0) {
        // No data found in DB, loading empty table
        console.log('[+] app-table-items: Data Not Found in DB, loading empty table...');
      }
    });
  }
  // Function to calculate values
  calculateTotalValues() {
    // Get the number of elements in the tableData array
    this.N_ELEMENT = this.tableData.length;
    let total = 0;
    // Iterate through tableData to calculate the total
    for (let i = 0; i < this.tableData.length; i++) {
      total += this.tableData[i].total || 0;
    }
    // Set total before tax (HT)
    this.TOTAL_HT = total;
    // Set TVA (Value Added Tax)
    this.TVA = 20;
    // Calculate total including tax (TTC)
    this.TOTAL_TTC = this.TOTAL_HT + this.TOTAL_HT * this.TVA / 100;
  }
  // Function to add a new row to the tableData
  addRow() {
    console.log(this.tableData);
    // Add a new row with default values
    this.tableData.push({
      id: this.tableData.length + 1,
      name: '',
      quantity: 0,
      unity_total: 0,
      total: 0
    });
    // Increment the number of elements
    this.N_ELEMENT = this.N_ELEMENT + 1;
    let document_items = {
      'document_items': this.tableData
    };
    // Save the updated tableData to DB
    this.SaveToDbService.AutoSave(this.ID, document_items, this.TYPE);
  }
  // Function to clean a row by ensuring quantity and unity_total are non-negative
  CleanRow(item) {
    if (item.quantity < 0 || item.unity_total < 0) {
      item.quantity = Math.abs(item.quantity);
      item.unity_total = Math.abs(item.unity_total);
    }
    // Calculate the total for the row
    item.total = item.quantity * item.unity_total;
  }
  // Function to save row data after cleaning
  RowDataSave(item) {
    // Clean the row
    this.CleanRow(item);
    // Recalculate total values
    this.calculateTotalValues();
    // Save the updated tableData to DB
    // this.SaveToCookieService.save(this.TYPE, this.tableData, 'table');
    let document_items = {
      'document_items': this.tableData
    };
    // Save the updated tableData to DB
    this.SaveToDbService.AutoSave(this.ID, document_items, this.TYPE);
  }
  // Function to delete a row from tableData
  deleteRow(index) {
    // Remove the row at the specified index
    this.tableData.splice(index, 1);
    // Recalculate total values
    this.calculateTotalValues();
    let document_items = {
      'document_items': this.tableData
    };
    // Save the updated tableData to DB
    this.SaveToDbService.AutoSave(this.ID, document_items, this.TYPE);
  }
  static #_ = this.ɵfac = function EditDocumentTableItemsComponent_Factory(t) {
    return new (t || EditDocumentTableItemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_save_to_db_save_to_db_service__WEBPACK_IMPORTED_MODULE_0__.SaveToDbService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: EditDocumentTableItemsComponent,
    selectors: [["app-edit-document-table-items"]],
    inputs: {
      document_data: "document_data"
    },
    decls: 33,
    vars: 6,
    consts: [[1, "card", "card-default"], [1, "card-header"], [1, "card-title"], [1, "btn", "btn-info", "add-new", 3, "click"], [1, "card-body", "table-responsive", "p-0", 2, "height", "552px"], [1, "table", "table-head-fixed", "text-nowrap", 3, "id"], ["id", "smallth"], ["id", "designationth"], [4, "ngFor", "ngForOf"], [1, "card-header", 2, "text-align", "center", "background", "#0d899a", "color", "white"], [1, "text-left", 2, "float", "left"], ["id", "price"], [4, "ngIf", "ngIfElse"], ["notInvoice", ""], [4, "ngIf"], ["type", "number", "min", "0", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["required", "", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["type", "number", "min", "0", "disabled", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["icon", "pi pi-times", "styleClass", "p-button-rounded p-button-sm p-button-danger p-button-text p-button-raised", 3, "click"], [1, "text-center"], [1, "text-left", "float-right"], [1, "text-right", 2, "float", "right"]],
    template: function EditDocumentTableItemsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Table of Invoice Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditDocumentTableItemsComponent_Template_button_click_4_listener() {
          return ctx.addRow();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Add Row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4)(7, "table", 5)(8, "thead")(9, "tr")(10, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Qs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "DESIGNATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "P.U");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "P.T");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, EditDocumentTableItemsComponent_tr_21_Template, 11, 4, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 9)(23, "span", 10)(24, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "N");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, EditDocumentTableItemsComponent_ng_container_29_Template, 7, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, EditDocumentTableItemsComponent_ng_template_30_Template, 6, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, EditDocumentTableItemsComponent_ng_container_32_Template, 14, 2, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", ctx.TYPE);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tableData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.N_ELEMENT);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.TYPE === "invoices")("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.TYPE === "invoices");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, primeng_button__WEBPACK_IMPORTED_MODULE_5__.Button],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWRvY3VtZW50LXRhYmxlLWl0ZW1zLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceURL=webpack://./src/app/pages/edit-document/edit-document-table-items/edit-document-table-items.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZWRpdC1kb2N1bWVudC9lZGl0LWRvY3VtZW50LXRhYmxlLWl0ZW1zL2VkaXQtZG9jdW1lbnQtdGFibGUtaXRlbXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDRMQUE0TCIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 66031:
/*!******************************************************************************!*\
  !*** ./src/app/pages/edit-document/edit-document/edit-document.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditDocumentComponent": () => (/* binding */ EditDocumentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_fetch_doc_fetch_doc_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/fetch-doc/fetch-doc.service */ 79697);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_SharedData_shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/SharedData/shared-data.service */ 50365);
/* harmony import */ var _services_Auth_JWTAuthService_jwt_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/Auth/JWTAuthService/jwt-auth-service.service */ 95928);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _edit_billing_form_edit_billing_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../edit-billing-form/edit-billing-form.component */ 88695);
/* harmony import */ var _edit_document_table_items_edit_document_table_items_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../edit-document-table-items/edit-document-table-items.component */ 5519);









function EditDocumentComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-edit-billing-form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("document_data", ctx_r0.document_data);
  }
}
function EditDocumentComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-edit-document-table-items", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("document_data", ctx_r1.document_data);
  }
}
class EditDocumentComponent {
  constructor(FetchDocService, route, SharedDataService, jwtHelper) {
    this.FetchDocService = FetchDocService;
    this.route = route;
    this.SharedDataService = SharedDataService;
    this.jwtHelper = jwtHelper;
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.TYPE = params['type'];
      this.Doc_ID = params['id'];
      this.User = this.jwtHelper.getUser().username;
      this.FetchDocService.getDocumentData(this.Doc_ID, this.TYPE).subscribe(respond => {
        this.document_data = respond;
        this.doc_number = this.document_data.document_number;
      }, error => {
        console.log(error.error);
      });
      // this.SharedDataService.setDoc_Data(this.document_data)
    });
  }
  static #_ = this.ɵfac = function EditDocumentComponent_Factory(t) {
    return new (t || EditDocumentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_fetch_doc_fetch_doc_service__WEBPACK_IMPORTED_MODULE_0__.FetchDocService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_SharedData_shared_data_service__WEBPACK_IMPORTED_MODULE_1__.SharedDataService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_Auth_JWTAuthService_jwt_auth_service_service__WEBPACK_IMPORTED_MODULE_2__.JwtAuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: EditDocumentComponent,
    selectors: [["app-edit-document"]],
    decls: 16,
    vars: 6,
    consts: [[1, "content-header"], [1, "container-fluid"], [1, "row", "mb-2"], [1, "col-sm-6"], [2, "font-weight", "bold"], [1, "content"], [1, "row"], ["class", "col-md-6", 4, "ngIf"], [1, "col-md-6"], [3, "document_data"]],
    template: function EditDocumentComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1")(5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Welcome to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " edit page");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "section", 5)(13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, EditDocumentComponent_div_14_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, EditDocumentComponent_div_15_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 4, ctx.User), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.doc_number);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.document_data);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.document_data);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _edit_billing_form_edit_billing_form_component__WEBPACK_IMPORTED_MODULE_3__.EditBillingFormComponent, _edit_document_table_items_edit_document_table_items_component__WEBPACK_IMPORTED_MODULE_4__.EditDocumentTableItemsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.TitleCasePipe],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWRvY3VtZW50LmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceURL=webpack://./src/app/pages/edit-document/edit-document/edit-document.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZWRpdC1kb2N1bWVudC9lZGl0LWRvY3VtZW50L2VkaXQtZG9jdW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDRLQUE0SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 42917:
/*!********************************************************!*\
  !*** ./src/app/pages/main-menu/main-menu.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainMenuComponent": () => (/* binding */ MainMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class MainMenuComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function MainMenuComponent_Factory(t) {
    return new (t || MainMenuComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MainMenuComponent,
    selectors: [["app-main-menu"]],
    decls: 28,
    vars: 0,
    consts: [[1, "content-header"], [1, "container-fluid"], [1, "row", "mb-2"], [1, "col-sm-6"], [1, "breadcrumb", "float-sm-right"], [1, "breadcrumb-item"], ["href", "#"], [1, "breadcrumb-item", "active"], [1, "content"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-tools"], ["type", "button", "data-widget", "collapse", "data-toggle", "tooltip", "title", "Collapse", 1, "btn", "btn-tool"], [1, "fa", "fa-minus"], ["type", "button", "data-widget", "remove", "data-toggle", "tooltip", "title", "Remove", 1, "btn", "btn-tool"], [1, "fa", "fa-times"], [1, "card-body"], [1, "card-footer"]],
    template: function MainMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Main Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3)(7, "ol", 4)(8, "li", 5)(9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Blank Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 8)(14, "div", 1)(15, "div", 9)(16, "div", 10)(17, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12)(20, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Start creating your amazing application! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
    },
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLW1lbnUuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceURL=webpack://./src/app/pages/main-menu/main-menu.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbWFpbi1tZW51L21haW4tbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0tBQXdLIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 63895:
/*!****************************************************************!*\
  !*** ./src/app/pages/main-menu/sub-menu/sub-menu.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubMenuComponent": () => (/* binding */ SubMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class SubMenuComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function SubMenuComponent_Factory(t) {
    return new (t || SubMenuComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SubMenuComponent,
    selectors: [["app-sub-menu"]],
    decls: 28,
    vars: 0,
    consts: [[1, "content-header"], [1, "container-fluid"], [1, "row", "mb-2"], [1, "col-sm-6"], [1, "breadcrumb", "float-sm-right"], [1, "breadcrumb-item"], ["href", "#"], [1, "breadcrumb-item", "active"], [1, "content"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-tools"], ["type", "button", "data-widget", "collapse", "data-toggle", "tooltip", "title", "Collapse", 1, "btn", "btn-tool"], [1, "fa", "fa-minus"], ["type", "button", "data-widget", "remove", "data-toggle", "tooltip", "title", "Remove", 1, "btn", "btn-tool"], [1, "fa", "fa-times"], [1, "card-body"], [1, "card-footer"]],
    template: function SubMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sub Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3)(7, "ol", 4)(8, "li", 5)(9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Blank Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 8)(14, "div", 1)(15, "div", 9)(16, "div", 10)(17, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12)(20, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Start creating your amazing application! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
    },
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWItbWVudS5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceURL=webpack://./src/app/pages/main-menu/sub-menu/sub-menu.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbWFpbi1tZW51L3N1Yi1tZW51L3N1Yi1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxvS0FBb0siLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 97539:
/*!******************************************************!*\
  !*** ./src/app/pages/products/products.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsComponent": () => (/* binding */ ProductsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _services_fetch_doc_fetch_doc_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/fetch-doc/fetch-doc.service */ 79697);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ 17485);
/* harmony import */ var _components_add_client_modal_add_client_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/add-client-modal/add-client-modal.component */ 58071);
/* harmony import */ var _components_delete_delete_item_delete_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/delete/delete-item/delete-item.component */ 43189);
/* harmony import */ var _components_edit_client_modal_edit_client_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/edit-client-modal/edit-client-modal.component */ 22434);









function ProductsComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " List of Products ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function ProductsComponent_ng_template_11_Template_input_input_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](10);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.filterGlobal($event.target.value, "contains"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 14)(6, "app-add-client-modal", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("products", function ProductsComponent_ng_template_11_Template_app_add_client_modal_products_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.handleClientDataEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function ProductsComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th", 18)(2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Client Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "p-sortIcon", 20)(5, "p-columnFilter", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "th", 22)(7, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " ICE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "p-sortIcon", 23)(10, "p-columnFilter", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th", 25)(12, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " City ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "p-sortIcon", 26)(15, "p-columnFilter", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function ProductsComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 29)(1, "td")(2, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Client Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td")(7, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Client Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td")(12, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Client City");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "td", 32)(17, "app-delete-item", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("data", function ProductsComponent_ng_template_13_Template_app_delete_item_data_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.handleClientDeletion($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "app-edit-client-modal", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const products_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](products_r8.client_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](products_r8.client_ICE);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](products_r8.client_city);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("Item_ID", products_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("Item_ID", products_r8.id);
  }
}
function ProductsComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "No products found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
const _c0 = function () {
  return [10, 25, 50];
};
const _c1 = function () {
  return ["name", "country.name", "representative.name", "status"];
};
class ProductsComponent {
  constructor(http, FetchDocService) {
    this.http = http;
    this.FetchDocService = FetchDocService;
    this.User = {
      username: "Hamza"
    };
  }
  ngOnInit() {
    this.FetchDocService.getAllClient().subscribe(response => {
      this.products = response;
    }, error => {
      console.error(error);
    });
  }
  handleClientDataEvent(data) {
    console.log(data);
    this.products = data['clientData'];
  }
  handleClientDeletion(data) {
    console.log("mn 3andk khokom walid o a7san walid :", data);
    this.products = data;
  }
  static #_ = this.ɵfac = function ProductsComponent_Factory(t) {
    return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_fetch_doc_fetch_doc_service__WEBPACK_IMPORTED_MODULE_0__.FetchDocService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ProductsComponent,
    selectors: [["app-products"]],
    decls: 15,
    vars: 11,
    consts: [[1, "content-header"], [1, "container-fluid"], [1, "row", "mb-2"], [1, "col-sm-6"], [1, "content"], [1, "card"], [1, "card-body"], ["dataKey", "id", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "value", "rowHover", "rows", "showCurrentPageReport", "rowsPerPageOptions", "paginator", "filterDelay", "globalFilterFields"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "table-header"], [1, "p-input-icon-left"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Global Search", 3, "input"], [3, "products"], ["pSortableColumn", "client_name", 2, "min-width", "14rem"], [1, "flex", "justify-content-between", "align-items-center"], ["field", "client_name"], ["type", "text", "field", "client_name", "display", "menu", 1, "ml-auto"], ["pSortableColumn", "client_ICE", 2, "min-width", "5rem"], ["field", "client_ICE"], ["type", "text", "field", "client_ICE", "display", "menu", 1, "ml-auto"], ["pSortableColumn", "client_city", 2, "min-width", "5rem"], ["field", "client_city"], ["type", "text", "field", "client_city", "display", "menu", 1, "ml-auto"], [2, "width", "10rem"], [1, "p-selectable-row"], [1, "p-column-title"], [1, "ml-1", "vertical-align-middle"], [2, "text-align", "center"], ["URL", "http://127.0.0.1:8000/api/products/delete/", 3, "Item_ID", "data"], ["URL", "http://127.0.0.1:8000/api/products/update/", 3, "Item_ID"], ["colspan", "8"]],
    template: function ProductsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "section", 4)(7, "div", 5)(8, "div", 6)(9, "p-table", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, ProductsComponent_ng_template_11_Template, 7, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ProductsComponent_ng_template_12_Template, 18, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, ProductsComponent_ng_template_13_Template, 19, 5, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, ProductsComponent_ng_template_14_Template, 3, 0, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx.User.username, " welcome to the Products Management page");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.products)("rowHover", true)("rows", 10)("showCurrentPageReport", true)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](9, _c0))("paginator", true)("filterDelay", 0)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](10, _c1));
      }
    },
    dependencies: [primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, primeng_table__WEBPACK_IMPORTED_MODULE_8__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_8__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_8__.SortIcon, primeng_table__WEBPACK_IMPORTED_MODULE_8__.ColumnFilter, _components_add_client_modal_add_client_modal_component__WEBPACK_IMPORTED_MODULE_1__.AddClientModalComponent, _components_delete_delete_item_delete_item_component__WEBPACK_IMPORTED_MODULE_2__.DeleteItemComponent, _components_edit_client_modal_edit_client_modal_component__WEBPACK_IMPORTED_MODULE_3__.EditClientModalComponent],
    styles: ["[_nghost-%COMP%]     {\n  \n}\n[_nghost-%COMP%]     .p-paginator .p-paginator-current {\n  margin-left: auto;\n}\n[_nghost-%COMP%]     .p-progressbar {\n  height: 0.5rem;\n  background-color: #D8DADC;\n}\n[_nghost-%COMP%]     .p-progressbar .p-progressbar-value {\n  background-color: #607D8B;\n}\n[_nghost-%COMP%]     .table-header {\n  display: flex;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]     .p-calendar .p-datepicker {\n  min-width: 25rem;\n}\n[_nghost-%COMP%]     .p-calendar .p-datepicker td {\n  font-weight: 400;\n}\n[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-header {\n  padding: 1rem;\n  text-align: left;\n  font-size: 1.5rem;\n}\n[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-paginator {\n  padding: 1rem;\n}\n[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-thead > tr > th {\n  text-align: left;\n}\n[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td {\n  cursor: auto;\n}\n[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-dropdown-label:not(.p-placeholder) {\n  text-transform: uppercase;\n}\n[_nghost-%COMP%]     .p-w-100 {\n  width: 100%;\n}\n[_nghost-%COMP%]     .p-datatable-customers .p-datatable-tbody > tr > td .p-column-title {\n  display: none;\n}\n\n@media screen and (max-width: 960px) {\n  [_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-thead > tr > th, [_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tfoot > tr > td {\n    display: none !important;\n  }\n  [_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tbody > tr {\n    border-bottom: 1px solid var(--layer-2);\n  }\n  [_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td {\n    text-align: left;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    border: 0 none;\n  }\n  [_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td .p-column-title {\n    min-width: 30%;\n    display: inline-block;\n    font-weight: bold;\n  }\n  [_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td p-progressbar {\n    width: 100%;\n  }\n  [_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td:last-child {\n    border-bottom: 1px solid var(--surface-d);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBeURJLGVBQUE7QUF2REo7QUFBUTtFQUNJLGlCQUFBO0FBRVo7QUFFSTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtBQUFSO0FBRVE7RUFDSSx5QkFBQTtBQUFaO0FBSUk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFGUjtBQUtJO0VBQ0ksZ0JBQUE7QUFIUjtBQUtRO0VBQ0ksZ0JBQUE7QUFIWjtBQVFRO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFOWjtBQVNRO0VBQ0ksYUFBQTtBQVBaO0FBVVE7RUFDSSxnQkFBQTtBQVJaO0FBV1E7RUFDSSxZQUFBO0FBVFo7QUFZUTtFQUNJLHlCQUFBO0FBVlo7QUFjSTtFQUNJLFdBQUE7QUFaUjtBQWdCSTtFQUNJLGFBQUE7QUFkUjs7QUFrQkE7RUFLZ0I7O0lBRUksd0JBQUE7RUFuQmxCO0VBc0JjO0lBQ0ksdUNBQUE7RUFwQmxCO0VBc0JrQjtJQUNJLGdCQUFBO0lBQ0EsV0FBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLGNBQUE7RUFwQnRCO0VBc0JzQjtJQUNJLGNBQUE7SUFDQSxxQkFBQTtJQUNBLGlCQUFBO0VBcEIxQjtFQXVCc0I7SUFDSSxXQUFBO0VBckIxQjtFQXdCc0I7SUFDSSx5Q0FBQTtFQXRCMUI7QUFDRiIsImZpbGUiOiJwcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCB7XG4gIC8qIFJlc3BvbnNpdmUgKi9cbn1cbjpob3N0IDo6bmctZGVlcCAucC1wYWdpbmF0b3IgLnAtcGFnaW5hdG9yLWN1cnJlbnQge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbjpob3N0IDo6bmctZGVlcCAucC1wcm9ncmVzc2JhciB7XG4gIGhlaWdodDogMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDhEQURDO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5wLXByb2dyZXNzYmFyIC5wLXByb2dyZXNzYmFyLXZhbHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwN0Q4Qjtcbn1cbjpob3N0IDo6bmctZGVlcCAudGFibGUtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5wLWNhbGVuZGFyIC5wLWRhdGVwaWNrZXIge1xuICBtaW4td2lkdGg6IDI1cmVtO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5wLWNhbGVuZGFyIC5wLWRhdGVwaWNrZXIgdGQge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5wLWRhdGF0YWJsZS5wLWRhdGF0YWJsZS1jdXN0b21lcnMgLnAtZGF0YXRhYmxlLWhlYWRlciB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5wLWRhdGF0YWJsZS5wLWRhdGF0YWJsZS1jdXN0b21lcnMgLnAtcGFnaW5hdG9yIHtcbiAgcGFkZGluZzogMXJlbTtcbn1cbjpob3N0IDo6bmctZGVlcCAucC1kYXRhdGFibGUucC1kYXRhdGFibGUtY3VzdG9tZXJzIC5wLWRhdGF0YWJsZS10aGVhZCA+IHRyID4gdGgge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5wLWRhdGF0YWJsZS5wLWRhdGF0YWJsZS1jdXN0b21lcnMgLnAtZGF0YXRhYmxlLXRib2R5ID4gdHIgPiB0ZCB7XG4gIGN1cnNvcjogYXV0bztcbn1cbjpob3N0IDo6bmctZGVlcCAucC1kYXRhdGFibGUucC1kYXRhdGFibGUtY3VzdG9tZXJzIC5wLWRyb3Bkb3duLWxhYmVsOm5vdCgucC1wbGFjZWhvbGRlcikge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5wLXctMTAwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCA6Om5nLWRlZXAgLnAtZGF0YXRhYmxlLWN1c3RvbWVycyAucC1kYXRhdGFibGUtdGJvZHkgPiB0ciA+IHRkIC5wLWNvbHVtbi10aXRsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gIDpob3N0IDo6bmctZGVlcCAucC1kYXRhdGFibGUucC1kYXRhdGFibGUtY3VzdG9tZXJzIC5wLWRhdGF0YWJsZS10aGVhZCA+IHRyID4gdGgsXG4gIDpob3N0IDo6bmctZGVlcCAucC1kYXRhdGFibGUucC1kYXRhdGFibGUtY3VzdG9tZXJzIC5wLWRhdGF0YWJsZS10Zm9vdCA+IHRyID4gdGQge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuICA6aG9zdCA6Om5nLWRlZXAgLnAtZGF0YXRhYmxlLnAtZGF0YXRhYmxlLWN1c3RvbWVycyAucC1kYXRhdGFibGUtdGJvZHkgPiB0ciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWxheWVyLTIpO1xuICB9XG4gIDpob3N0IDo6bmctZGVlcCAucC1kYXRhdGFibGUucC1kYXRhdGFibGUtY3VzdG9tZXJzIC5wLWRhdGF0YWJsZS10Ym9keSA+IHRyID4gdGQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlcjogMCBub25lO1xuICB9XG4gIDpob3N0IDo6bmctZGVlcCAucC1kYXRhdGFibGUucC1kYXRhdGFibGUtY3VzdG9tZXJzIC5wLWRhdGF0YWJsZS10Ym9keSA+IHRyID4gdGQgLnAtY29sdW1uLXRpdGxlIHtcbiAgICBtaW4td2lkdGg6IDMwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgOmhvc3QgOjpuZy1kZWVwIC5wLWRhdGF0YWJsZS5wLWRhdGF0YWJsZS1jdXN0b21lcnMgLnAtZGF0YXRhYmxlLXRib2R5ID4gdHIgPiB0ZCBwLXByb2dyZXNzYmFyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICA6aG9zdCA6Om5nLWRlZXAgLnAtZGF0YXRhYmxlLnAtZGF0YXRhYmxlLWN1c3RvbWVycyAucC1kYXRhdGFibGUtdGJvZHkgPiB0ciA+IHRkOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWQpO1xuICB9XG59Il19 */\n/*# sourceURL=webpack://./src/app/pages/products/products.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUF5REksZUFBQTtBQXZESjtBQUFRO0VBQ0ksaUJBQUE7QUFFWjtBQUVJO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0FBQVI7QUFFUTtFQUNJLHlCQUFBO0FBQVo7QUFJSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUZSO0FBS0k7RUFDSSxnQkFBQTtBQUhSO0FBS1E7RUFDSSxnQkFBQTtBQUhaO0FBUVE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQU5aO0FBU1E7RUFDSSxhQUFBO0FBUFo7QUFVUTtFQUNJLGdCQUFBO0FBUlo7QUFXUTtFQUNJLFlBQUE7QUFUWjtBQVlRO0VBQ0kseUJBQUE7QUFWWjtBQWNJO0VBQ0ksV0FBQTtBQVpSO0FBZ0JJO0VBQ0ksYUFBQTtBQWRSOztBQWtCQTtFQUtnQjs7SUFFSSx3QkFBQTtFQW5CbEI7RUFzQmM7SUFDSSx1Q0FBQTtFQXBCbEI7RUFzQmtCO0lBQ0ksZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsY0FBQTtFQXBCdEI7RUFzQnNCO0lBQ0ksY0FBQTtJQUNBLHFCQUFBO0lBQ0EsaUJBQUE7RUFwQjFCO0VBdUJzQjtJQUNJLFdBQUE7RUFyQjFCO0VBd0JzQjtJQUNJLHlDQUFBO0VBdEIxQjtBQUNGO0FBQ0EsbzVIQUFvNUgiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAge1xuICAvKiBSZXNwb25zaXZlICovXG59XG46aG9zdCA6Om5nLWRlZXAgLnAtcGFnaW5hdG9yIC5wLXBhZ2luYXRvci1jdXJyZW50IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG46aG9zdCA6Om5nLWRlZXAgLnAtcHJvZ3Jlc3NiYXIge1xuICBoZWlnaHQ6IDAuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q4REFEQztcbn1cbjpob3N0IDo6bmctZGVlcCAucC1wcm9ncmVzc2JhciAucC1wcm9ncmVzc2Jhci12YWx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7XG59XG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbjpob3N0IDo6bmctZGVlcCAucC1jYWxlbmRhciAucC1kYXRlcGlja2VyIHtcbiAgbWluLXdpZHRoOiAyNXJlbTtcbn1cbjpob3N0IDo6bmctZGVlcCAucC1jYWxlbmRhciAucC1kYXRlcGlja2VyIHRkIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbjpob3N0IDo6bmctZGVlcCAucC1kYXRhdGFibGUucC1kYXRhdGFibGUtY3VzdG9tZXJzIC5wLWRhdGF0YWJsZS1oZWFkZXIge1xuICBwYWRkaW5nOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbjpob3N0IDo6bmctZGVlcCAucC1kYXRhdGFibGUucC1kYXRhdGFibGUtY3VzdG9tZXJzIC5wLXBhZ2luYXRvciB7XG4gIHBhZGRpbmc6IDFyZW07XG59XG46aG9zdCA6Om5nLWRlZXAgLnAtZGF0YXRhYmxlLnAtZGF0YXRhYmxlLWN1c3RvbWVycyAucC1kYXRhdGFibGUtdGhlYWQgPiB0ciA+IHRoIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbjpob3N0IDo6bmctZGVlcCAucC1kYXRhdGFibGUucC1kYXRhdGFibGUtY3VzdG9tZXJzIC5wLWRhdGF0YWJsZS10Ym9keSA+IHRyID4gdGQge1xuICBjdXJzb3I6IGF1dG87XG59XG46aG9zdCA6Om5nLWRlZXAgLnAtZGF0YXRhYmxlLnAtZGF0YXRhYmxlLWN1c3RvbWVycyAucC1kcm9wZG93bi1sYWJlbDpub3QoLnAtcGxhY2Vob2xkZXIpIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbjpob3N0IDo6bmctZGVlcCAucC13LTEwMCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5wLWRhdGF0YWJsZS1jdXN0b21lcnMgLnAtZGF0YXRhYmxlLXRib2R5ID4gdHIgPiB0ZCAucC1jb2x1bW4tdGl0bGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICA6aG9zdCA6Om5nLWRlZXAgLnAtZGF0YXRhYmxlLnAtZGF0YXRhYmxlLWN1c3RvbWVycyAucC1kYXRhdGFibGUtdGhlYWQgPiB0ciA+IHRoLFxuICA6aG9zdCA6Om5nLWRlZXAgLnAtZGF0YXRhYmxlLnAtZGF0YXRhYmxlLWN1c3RvbWVycyAucC1kYXRhdGFibGUtdGZvb3QgPiB0ciA+IHRkIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgOmhvc3QgOjpuZy1kZWVwIC5wLWRhdGF0YWJsZS5wLWRhdGF0YWJsZS1jdXN0b21lcnMgLnAtZGF0YXRhYmxlLXRib2R5ID4gdHIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1sYXllci0yKTtcbiAgfVxuICA6aG9zdCA6Om5nLWRlZXAgLnAtZGF0YXRhYmxlLnAtZGF0YXRhYmxlLWN1c3RvbWVycyAucC1kYXRhdGFibGUtdGJvZHkgPiB0ciA+IHRkIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXI6IDAgbm9uZTtcbiAgfVxuICA6aG9zdCA6Om5nLWRlZXAgLnAtZGF0YXRhYmxlLnAtZGF0YXRhYmxlLWN1c3RvbWVycyAucC1kYXRhdGFibGUtdGJvZHkgPiB0ciA+IHRkIC5wLWNvbHVtbi10aXRsZSB7XG4gICAgbWluLXdpZHRoOiAzMCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIDpob3N0IDo6bmctZGVlcCAucC1kYXRhdGFibGUucC1kYXRhdGFibGUtY3VzdG9tZXJzIC5wLWRhdGF0YWJsZS10Ym9keSA+IHRyID4gdGQgcC1wcm9ncmVzc2JhciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgOmhvc3QgOjpuZy1kZWVwIC5wLWRhdGF0YWJsZS5wLWRhdGF0YWJsZS1jdXN0b21lcnMgLnAtZGF0YXRhYmxlLXRib2R5ID4gdHIgPiB0ZDpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS1kKTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 65814:
/*!******************************************************!*\
  !*** ./src/app/pages/settings/settings.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsComponent": () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ 14356);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/inputtext */ 69906);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/tabview */ 79504);




function SettingsComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Billing Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function SettingsComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Document Template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class SettingsComponent {
  constructor() {
    this.settings = {
      Company_ICE: 'XXXXXXXXXXXXXX',
      Company_TVATAUX: 20,
      Company_Place: 'Tangier',
      APP_lang: 'fr',
      Invoice_Color: '#ffffff'
    };
    this.messages = [];
  }
  onSubmit() {
    // Handle form submission logic here
  }
  static #_ = this.ɵfac = function SettingsComponent_Factory(t) {
    return new (t || SettingsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SettingsComponent,
    selectors: [["app-settings"]],
    decls: 29,
    vars: 0,
    consts: [[1, "content-header"], [1, "container-fluid"], [1, "row", "mb-2"], [1, "col-sm-6"], ["styleClass", "tabview-custom"], ["pTemplate", "header"], [1, "flex", "flex-inline", 2, "max-width", "500px"], [1, "p-inputgroup"], [1, "p-inputgroup-addon"], [1, "pi", "pi-user"], ["pInputText", "", "placeholder", "Username"], ["type", "text", "pInputText", "", "placeholder", "Price"], ["type", "text", "pInputText", "", "placeholder", "Website"], ["header", "Header II"], [1, "pi", "pi-calendar"]],
    template: function SettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "G\u00E9rez les param\u00E8tres de votre application :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 0)(7, "p-tabView", 4)(8, "p-tabPanel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SettingsComponent_ng_template_9_Template, 3, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7)(16, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7)(22, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "www");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p-tabPanel", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, SettingsComponent_ng_template_26_Template, 3, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
    },
    dependencies: [primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeTemplate, primeng_inputtext__WEBPACK_IMPORTED_MODULE_2__.InputText, primeng_tabview__WEBPACK_IMPORTED_MODULE_3__.TabView, primeng_tabview__WEBPACK_IMPORTED_MODULE_3__.TabPanel],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceURL=webpack://./src/app/pages/settings/settings.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG9LQUFvSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 31524:
/*!************************************************!*\
  !*** ./src/app/pages/users/users.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersComponent": () => (/* binding */ UsersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);


class UsersComponent {
  constructor() {
    this.User = {
      username: "Hamza",
      id: "1",
      permission: "Admin",
      status: "Active"
    };
  }
  addUser() {}
  static #_ = this.ɵfac = function UsersComponent_Factory(t) {
    return new (t || UsersComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: UsersComponent,
    selectors: [["app-users"]],
    decls: 46,
    vars: 1,
    consts: [[1, "content-header"], [1, "container-fluid"], [1, "row", "mb-2"], [1, "col-sm-6"], [1, "content"], [1, "row"], [1, "col-md-6"], [1, "card", "card-default"], [1, "card-header"], [1, "card-title"], [1, "card-body", "table-responsive", "p-0", 2, "height", "552px"], [1, "table", "table-head-fixed", "text-nowrap"], ["id", "MainAddNewUserForm", 3, "submit"], [1, "card-body"], [1, "input-group", "mb-3"], ["type", "text", "autocomplete", "off", "placeholder", "Username", "required", "", 1, "form-control"], [1, "input-group-append"], [1, "input-group-text"], [1, "fas", "fa-user"], [1, "col-4"], ["type", "submit", "id", "submitbttn", 1, "btn", "btn-primary", "btn-block"], [1, "far", "fa-plus-square"]],
    template: function UsersComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 4)(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Created Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10)(14, "table", 11)(15, "thead")(16, "tr")(17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Permission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6)(30, "div", 7)(31, "div", 8)(32, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Create a New User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function UsersComponent_Template_form_submit_34_listener() {
          return ctx.addUser();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13)(36, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16)(39, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 5)(42, "div", 19)(43, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.User.username, " welcome to the User Management Page ");
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2Vycy5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceURL=webpack://./src/app/pages/users/users.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdXNlcnMvdXNlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdLQUFnSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 86343:
/*!*******************************************************************************!*\
  !*** ./src/app/services/Auth/AuthInterceptor/auth-interceptor.interceptor.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptorInterceptor": () => (/* binding */ AuthInterceptorInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_Auth_JWTAuthService_jwt_auth_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/Auth/JWTAuthService/jwt-auth-service.service */ 95928);



class AuthInterceptorInterceptor {
  constructor(JWTauthService) {
    this.JWTauthService = JWTauthService;
  }
  intercept(request, next) {
    const accessToken = this.JWTauthService.getToken();
    // Exclude login requests from token addition
    if (request.url.endsWith('/login') && request.method === 'POST') {
      return next.handle(request);
    }
    // If the access token is available, add the Authorization header
    if (accessToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`
        }
      });
    }
    return next.handle(request);
  }
  static #_ = this.ɵfac = function AuthInterceptorInterceptor_Factory(t) {
    return new (t || AuthInterceptorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_Auth_JWTAuthService_jwt_auth_service_service__WEBPACK_IMPORTED_MODULE_0__.JwtAuthService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AuthInterceptorInterceptor,
    factory: AuthInterceptorInterceptor.ɵfac
  });
}

/***/ }),

/***/ 95928:
/*!**************************************************************************!*\
  !*** ./src/app/services/Auth/JWTAuthService/jwt-auth-service.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtAuthService": () => (/* binding */ JwtAuthService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/angular-jwt */ 4467);


class JwtAuthService {
  constructor(jwtHelper) {
    this.jwtHelper = jwtHelper;
    this.TOKEN_KEY = 'token';
  }
  getToken() {
    const token = localStorage.getItem('token');
    return token;
  }
  getUser() {
    const token = localStorage.getItem('token');
    let username = this.jwtHelper.decodeToken(token).username;
    let userID = this.jwtHelper.decodeToken(token).user_id;
    return {
      username: username,
      userID: userID
    };
  }
  isAuthenticated() {
    const token = this.getToken();
    console.log('[+] JwtAuthService : token =>', token);
    var isLoggedIn = false;
    var isExpired = true;
    // Check whether the token is expired and return
    // true or false
    if (token != null) {
      isExpired = this.jwtHelper.isTokenExpired(token);
      if (isExpired == false) {
        isLoggedIn = true;
        console.log('[+] JwtAuthService : token valid');
      } else {
        isLoggedIn = false;
        console.log('[+] JwtAuthService : token expired');
      }
    } else {
      isLoggedIn = false; // if not token find so it's expired
      console.log("[+] JwtAuthService : null" + isExpired);
    }
    console.log("[+] JwtAuthService : Is User Logged In", isLoggedIn);
    return isLoggedIn;
  }
  // Function to set the token in localStorage
  setToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }
  // Function to remove the token from localStorage
  removeToken() {
    localStorage.removeItem(this.TOKEN_KEY);
  }
  static #_ = this.ɵfac = function JwtAuthService_Factory(t) {
    return new (t || JwtAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__.JwtHelperService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: JwtAuthService,
    factory: JwtAuthService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 78467:
/*!********************************************************************!*\
  !*** ./src/app/services/Auth/LoginCanActivate/auth-guard.guard.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginAuthGuard": () => (/* binding */ LoginAuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_Auth_JWTAuthService_jwt_auth_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/Auth/JWTAuthService/jwt-auth-service.service */ 95928);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);




// 
class LoginAuthGuard {
  constructor(JWTauthService, router) {
    this.JWTauthService = JWTauthService;
    this.router = router;
  }
  canActivate(route, state) {
    if (this.JWTauthService.isAuthenticated()) {
      return this.router.parseUrl('/'); // redirect to home page if logged in
    } else {
      return true; // Redirect to if user is not logged in
    }
  }
  static #_ = this.ɵfac = function LoginAuthGuard_Factory(t) {
    return new (t || LoginAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_Auth_JWTAuthService_jwt_auth_service_service__WEBPACK_IMPORTED_MODULE_0__.JwtAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: LoginAuthGuard,
    factory: LoginAuthGuard.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 31154:
/*!***************************************************!*\
  !*** ./src/app/services/Auth/auth-guard.guard.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_Auth_JWTAuthService_jwt_auth_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/Auth/JWTAuthService/jwt-auth-service.service */ 95928);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);




class AuthGuard {
  constructor(JWTauthService, router) {
    this.JWTauthService = JWTauthService;
    this.router = router;
  }
  canActivate(next, state) {
    // Check if the user is logged in
    if (this.JWTauthService.isAuthenticated()) {
      return true; // Continue with activation if user is logged in
    } else {
      return this.router.parseUrl('/login'); // Redirect to login if user is not logged in
    }
  }

  canActivateChild(next, state) {
    // This method will be called for child routes
    return this.canActivate(next, state); // Reuse the logic from canActivate
  }
  static #_ = this.ɵfac = function AuthGuard_Factory(t) {
    return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_Auth_JWTAuthService_jwt_auth_service_service__WEBPACK_IMPORTED_MODULE_0__.JwtAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AuthGuard,
    factory: AuthGuard.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 9810:
/*!******************************************************!*\
  !*** ./src/app/services/Http/submit-form.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubmitFormService": () => (/* binding */ SubmitFormService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_save_to_cookie_save_to_cookie_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/save-to-cookie/save-to-cookie.service */ 59306);
/* harmony import */ var _services_Validators_validators_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/Validators/validators.service */ 24239);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ 4467);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 14356);







class SubmitFormService {
  constructor(SaveToCookieService, ValidatorsService, http, jwtHelper, messageService) {
    this.SaveToCookieService = SaveToCookieService;
    this.ValidatorsService = ValidatorsService;
    this.http = http;
    this.jwtHelper = jwtHelper;
    this.messageService = messageService;
  }
  CreateDocument(TYPE) {
    let data = this.SaveToCookieService.getData(TYPE, null);
    const url = "http://127.0.0.1:8000/api/documents/create/";
    // formating data for the api serializer 
    let formated_data = {};
    formated_data = data['billing_data'];
    formated_data['document_items'] = data['table_data'];
    formated_data['document_created_by'] = this.jwtHelper.decodeToken().id;
    formated_data['document_type'] = TYPE;
    return this.http.post(url, formated_data);
  }
  static #_ = this.ɵfac = function SubmitFormService_Factory(t) {
    return new (t || SubmitFormService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_save_to_cookie_save_to_cookie_service__WEBPACK_IMPORTED_MODULE_0__.SaveToCookieService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_Validators_validators_service__WEBPACK_IMPORTED_MODULE_1__.ValidatorsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__.JwtHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.MessageService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: SubmitFormService,
    factory: SubmitFormService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 50365:
/*!************************************************************!*\
  !*** ./src/app/services/SharedData/shared-data.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedDataService": () => (/* binding */ SharedDataService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class SharedDataService {
  constructor() {
    this.loading = true;
    this.document_data = '';
  }
  setClients(data) {
    console.log('[+] Client Data Has Been Shared');
    this.clients = data;
  }
  getClients() {
    return this.clients;
  }
  setLoadingStatus(status) {
    this.loading = status;
  }
  getLoadingStatus() {
    return this.loading;
  }
  setDoc_Data(data) {
    this.document_data = data;
    return true;
  }
  getDoc_Data() {
    return this.document_data;
  }
  static #_ = this.ɵfac = function SharedDataService_Factory(t) {
    return new (t || SharedDataService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: SharedDataService,
    factory: SharedDataService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 24239:
/*!***********************************************************!*\
  !*** ./src/app/services/Validators/validators.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidatorsService": () => (/* binding */ ValidatorsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class ValidatorsService {
  constructor() {}
  validateDocumentForm(data) {}
  static #_ = this.ɵfac = function ValidatorsService_Factory(t) {
    return new (t || ValidatorsService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ValidatorsService,
    factory: ValidatorsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 79697:
/*!*********************************************************!*\
  !*** ./src/app/services/fetch-doc/fetch-doc.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FetchDocService": () => (/* binding */ FetchDocService)
/* harmony export */ });
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class FetchDocService {
  constructor(http) {
    this.http = http;
    this.api_server = environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_server;
    this.clientsURL = environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.endpoints.clientsList;
    this.documentsURL = environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.endpoints.documentList;
    this.documentDetailURL = environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.endpoints.documentDetail;
    this.dashboardURL = environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.endpoints.dashboard;
  }
  getAllClient() {
    let url = this.api_server + "/" + this.clientsURL;
    return this.http.get(url);
  }
  getAllProduct() {
    let url = "http://127.0.0.1:8000/api/products/";
    return this.http.get(url);
  }
  getDocumentData(id, TYPE) {
    let url = `${this.api_server}/${this.documentDetailURL}/${TYPE.trim()}/${id}`;
    return this.http.get(url);
  }
  getAllDocs(TYPE) {
    let url = `${this.api_server}/${this.documentsURL}/${TYPE.trim()}`;
    return this.http.get(url);
  }
  getDashboardData() {
    let url = `${this.api_server}/${this.dashboardURL}`;
    return this.http.get(url);
  }
  static #_ = this.ɵfac = function FetchDocService_Factory(t) {
    return new (t || FetchDocService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: FetchDocService,
    factory: FetchDocService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 98982:
/*!*****************************************************!*\
  !*** ./src/app/services/loading/loading.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingService": () => (/* binding */ LoadingService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class LoadingService {
  constructor() {
    this.loading = false;
  }
  setLoading(loading) {
    this.loading = loading;
  }
  getLoading() {
    return this.loading;
  }
  static #_ = this.ɵfac = function LoadingService_Factory(t) {
    return new (t || LoadingService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: LoadingService,
    factory: LoadingService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 17927:
/*!*****************************************************************!*\
  !*** ./src/app/services/pdf-generator/pdf-generator.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PdfGeneratorService": () => (/* binding */ PdfGeneratorService)
/* harmony export */ });
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jspdf */ 84177);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf-autotable */ 43015);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



class PdfGeneratorService {
  constructor() {}
  generateInvoice(DocumentData) {
    const client_name = DocumentData.document_client.client_name;
    const client_address = DocumentData.document_client.client_city;
    const ICE = DocumentData.document_client.client_ICE;
    const document_number = DocumentData.document_number;
    const document_date = DocumentData.document_date;
    const document_items = DocumentData.document_items;
    let document_items_arry = [];
    let document_Total = 0;
    let document_TVA = 20;
    let max_row_table = 20;
    document_items.forEach(element => {
      document_items_arry.push([element.name, element.quantity, element.unity_total, element.total]);
      document_Total = document_Total + element.total;
    });
    console.log(document_items_arry.length);
    if (document_items_arry.length < max_row_table) {
      let empty_rows = max_row_table - document_items_arry.length;
      for (let index = 0; index < empty_rows; index++) {
        document_items_arry.push(['', "", "", ""]);
      }
    }
    let document_TVAadd = document_Total * document_TVA / 100;
    let document_TotalTVA = document_TVAadd + document_Total;
    const doc = new jspdf__WEBPACK_IMPORTED_MODULE_0__["default"]();
    // Add background image
    const backgroundImage = new Image();
    backgroundImage.src = 'assets/img/invoice-bg.png'; // Keeping the image path unchanged
    backgroundImage.onload = () => {
      doc.addImage(backgroundImage, 'JPEG', 0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight());
      doc.setFont("Helvetica", "bold");
      // Move down to avoid overlapping with the header
      const headerHeight = 20; // Adjusted value based on your header height
      // Draw Billed to: rectangle
      const borderRadius = 2;
      const cellWidth = 60; // Adjusted width
      const cellHeight = 17; // Adjusted height
      const xBilledTo = 14;
      const yBilledTo = headerHeight + 20; // Use the current Y position after moving down
      doc.setFillColor(255, 172, 28); // Background color #FFAC1C
      doc.setTextColor(255, 255, 255); // Text color white
      doc.setDrawColor(255, 172, 28); // Border color black
      doc.setLineWidth(0.1); // Border width
      // Draw the rounded rectangle with adjusted padding and border radius for Billed to:
      doc.roundedRect(xBilledTo, yBilledTo, cellWidth, cellHeight, borderRadius, borderRadius, 'FD');
      // Set a smaller font size for the text
      doc.setFontSize(10);
      // Draw the text with adjusted padding for Billed to:
      const textXBilledTo = xBilledTo + 5; // Adjusted padding on the left
      const textYBilledTo = yBilledTo + 5; // Adjusted padding on the top
      doc.text('Billed to: ' + client_name, textXBilledTo, textYBilledTo);
      doc.text('Address : ' + client_address, textXBilledTo, textYBilledTo + 5);
      doc.text('ICE : ' + ICE, textXBilledTo, textYBilledTo + 10);
      // Draw Number: rectangle on the right side
      const xNumber = doc.internal.pageSize.getWidth() - 75; // Adjusted X position for Number:
      const yNumber = yBilledTo; // Same Y position as Billed to:
      doc.setFillColor(255, 172, 28); // Background color #FFAC1C
      doc.setTextColor(255, 255, 255); // Text color white
      doc.setDrawColor(255, 172, 28); // Border color black
      doc.setLineWidth(0.25); // Border width
      // Draw the rounded rectangle with adjusted padding and border radius for Number:
      doc.roundedRect(xNumber, yNumber, cellWidth, cellHeight, borderRadius, borderRadius, 'FD');
      // Draw the text with adjusted padding for Number:
      const textXNumber = xNumber + 5; // Adjusted padding on the left
      const textYNumber = yNumber + 5; // Adjusted padding on the top
      doc.text(`Number: ${document_number}`, textXNumber, textYNumber);
      doc.text(`Date: ${document_date}`, textXNumber, textYNumber + 5);
      // Reset font size for subsequent text
      doc.setFontSize(12);
      // Calculate startY based on the maximum Y position of the Billed to and Number rectangles
      const spaceBetween = 10; // Adjust the space between the rectangles and the table
      const startY = Math.max(yBilledTo, yNumber) + cellHeight + spaceBetween;
      // Calculate the remaining height for the invoice table considering the footer height
      const footerHeight = 10; // Adjusted value based on your footer height
      const availableHeight = doc.internal.pageSize.getHeight() - startY - footerHeight;
      // Draw the invoice table
      jspdf_autotable__WEBPACK_IMPORTED_MODULE_1___default()(doc, {
        startY,
        head: [['Items', 'Quantity', 'Price', 'Amount']],
        body: document_items_arry,
        theme: 'striped',
        headStyles: {
          fillColor: '#FFAC1C'
        }
      });
      jspdf_autotable__WEBPACK_IMPORTED_MODULE_1___default()(doc, {
        body: [[{
          content: 'HT :',
          styles: {
            halign: 'left'
          }
        }, {
          content: document_Total,
          styles: {
            halign: 'right'
          }
        }], [{
          content: 'TVA :',
          styles: {
            halign: 'left'
          }
        }, {
          content: document_TVA,
          styles: {
            halign: 'right'
          }
        }], [{
          content: 'TTC :',
          styles: {
            halign: 'left'
          }
        }, {
          content: document_TVAadd,
          styles: {
            halign: 'right'
          }
        }], [{
          content: 'Total :',
          styles: {
            halign: 'left'
          }
        }, {
          content: document_TotalTVA,
          styles: {
            halign: 'right'
          }
        }]],
        theme: 'striped',
        styles: {
          cellWidth: 25,
          halign: 'right' // Aligned to the right
        },

        margin: {
          top: 10,
          right: 10,
          bottom: 10,
          left: 146
        }
      });
      // Save the PDF
      const pdfBlob = doc.output('blob');
      const pdfUrl = URL.createObjectURL(pdfBlob);
      window.open(pdfUrl, '_blank');
    };
  }
  static #_ = this.ɵfac = function PdfGeneratorService_Factory(t) {
    return new (t || PdfGeneratorService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: PdfGeneratorService,
    factory: PdfGeneratorService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 59306:
/*!*******************************************************************!*\
  !*** ./src/app/services/save-to-cookie/save-to-cookie.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaveToCookieService": () => (/* binding */ SaveToCookieService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class SaveToCookieService {
  constructor() {}
  // Function to save data in cookies
  saveInCookies(temp_data, DOC_TYPE) {
    localStorage.setItem(DOC_TYPE, JSON.stringify(temp_data));
  }
  // Function to save data based on type (table or billing)
  save(DOC_TYPE, data, type) {
    // Retrieve existing data for Doc_ID from cookies
    let temp_data = JSON.parse(localStorage.getItem(DOC_TYPE));
    // If no data found, set up new cookies
    if (temp_data == null) {
      this.setupCookies(DOC_TYPE);
    }
    // If data already exists, update it
    else if (temp_data !== null) {
      if (type == 'table') {
        temp_data['table_data'] = data;
        console.log("[+] SaveToCookieService: temp_table_data =>", temp_data);
        console.log("[+] SaveToCookieService : New Table Change Detected Saving To Cookies");
        localStorage.setItem(DOC_TYPE, JSON.stringify(temp_data));
      } else if (type == "billing") {
        temp_data['billing_data'] = data;
        console.log("[+] SaveToCookieService: temp_billing_data =>", temp_data);
        console.log("[+] SaveToCookieService : New billing Change Detected Saving To Cookies");
        localStorage.setItem(DOC_TYPE, JSON.stringify(temp_data));
      }
    }
  }
  // Function to get table data from cookies
  getData(Doc_TYPE, type) {
    if (type == 'table') {
      return JSON.parse(localStorage.getItem(Doc_TYPE))['table_data'];
    } else if (type == 'billing') {
      return JSON.parse(localStorage.getItem(Doc_TYPE))['billing_data'];
    } else if (type == null) {
      return JSON.parse(localStorage.getItem(Doc_TYPE));
    }
  }
  // Function to set up cookies with initial data
  setupCookies(Doc_TYPE) {
    let ttl = new Date().getTime() + 86400000; // 24H is time to live
    let temp_data_to_save = {};
    let temp_data = {
      billing_data: {},
      table_data: [],
      expiry: ttl //recheck maybe no correct calculation
    };
    // Save initial data in cookies
    this.saveInCookies(temp_data, Doc_TYPE);
    console.log("[+] SaveToCookieService : Cookies have been set up...", temp_data_to_save);
  }
  ClearCache(TYPE) {
    localStorage.removeItem(TYPE); // remove current document cookie
    this.setupCookies(TYPE); // setup  new  empty temp_data cookie
    // location.reload() // reload page to refresh the view
  }
  static #_ = this.ɵfac = function SaveToCookieService_Factory(t) {
    return new (t || SaveToCookieService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: SaveToCookieService,
    factory: SaveToCookieService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 85868:
/*!***********************************************************!*\
  !*** ./src/app/services/save-to-db/save-to-db.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaveToDbService": () => (/* binding */ SaveToDbService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 14356);



class SaveToDbService {
  constructor(http, messageService) {
    this.http = http;
    this.messageService = messageService;
  }
  AutoSave(doc_id, doc_data, doc_type) {
    const url = 'http://127.0.0.1:8000/api/documents/update/' + doc_id;
    this.http.put(url, doc_data).subscribe(respond => {
      console.log(respond);
      this.messageService.add({
        severity: 'info',
        summary: 'Data Saved',
        detail: 'Changes has been saved'
      });
    }, error => {
      console.log(error);
    });
  }
  static #_ = this.ɵfac = function SaveToDbService_Factory(t) {
    return new (t || SaveToDbService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__.MessageService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: SaveToDbService,
    factory: SaveToDbService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 68330:
/*!***************************************!*\
  !*** ./src/app/store/auth/actions.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOAD_USER": () => (/* binding */ LOAD_USER),
/* harmony export */   "LOGIN_USER": () => (/* binding */ LOGIN_USER),
/* harmony export */   "LOGOUT_USER": () => (/* binding */ LOGOUT_USER),
/* harmony export */   "LoginUser": () => (/* binding */ LoginUser)
/* harmony export */ });
const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';
const LOAD_USER = 'LOAD_USER';
class LoginUser {
  constructor() {
    this.type = LOAD_USER;
  }
}

/***/ }),

/***/ 7590:
/*!***************************************!*\
  !*** ./src/app/store/auth/reducer.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authReducer": () => (/* binding */ authReducer)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ 68330);

const initialState = {
  isLoggedIn: !!localStorage.getItem('token'),
  token: localStorage.getItem('token'),
  currentUser: {
    email: 'mail@example.com',
    picture: null
  }
};
function authReducer(state = initialState, action) {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__.LOGIN_USER:
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload
      };
      break;
    case _actions__WEBPACK_IMPORTED_MODULE_0__.LOGOUT_USER:
      break;
    case _actions__WEBPACK_IMPORTED_MODULE_0__.LOAD_USER:
      break;
    default:
      return state;
  }
}

/***/ }),

/***/ 15728:
/*!*************************************!*\
  !*** ./src/app/store/ui/actions.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SET_NAVBAR_VARIANT": () => (/* binding */ SET_NAVBAR_VARIANT),
/* harmony export */   "SET_SIDEBAR_SKIN": () => (/* binding */ SET_SIDEBAR_SKIN),
/* harmony export */   "SET_WINDOWS_SIZE": () => (/* binding */ SET_WINDOWS_SIZE),
/* harmony export */   "SetNavbarVariant": () => (/* binding */ SetNavbarVariant),
/* harmony export */   "SetSidebarSkin": () => (/* binding */ SetSidebarSkin),
/* harmony export */   "SetWindowSize": () => (/* binding */ SetWindowSize),
/* harmony export */   "TOGGLE_CONTROL_SIDEBAR": () => (/* binding */ TOGGLE_CONTROL_SIDEBAR),
/* harmony export */   "TOGGLE_DARK_MODE": () => (/* binding */ TOGGLE_DARK_MODE),
/* harmony export */   "TOGGLE_SIDEBAR_MENU": () => (/* binding */ TOGGLE_SIDEBAR_MENU),
/* harmony export */   "ToggleControlSidebar": () => (/* binding */ ToggleControlSidebar),
/* harmony export */   "ToggleDarkMode": () => (/* binding */ ToggleDarkMode),
/* harmony export */   "ToggleSidebarMenu": () => (/* binding */ ToggleSidebarMenu)
/* harmony export */ });
const TOGGLE_SIDEBAR_MENU = 'TOGGLE_SIDEBAR_MENU';
const TOGGLE_CONTROL_SIDEBAR = 'TOGGLE_CONTROL_SIDEBAR';
const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE';
const SET_NAVBAR_VARIANT = 'SET_NAVBAR_VARIANT';
const SET_SIDEBAR_SKIN = 'SET_SIDEBAR_SKIN';
const SET_WINDOWS_SIZE = 'SET_WINDOWS_SIZE';
class ToggleSidebarMenu {
  constructor(payload) {
    this.payload = payload;
    this.type = TOGGLE_SIDEBAR_MENU;
  }
}
class ToggleControlSidebar {
  constructor(payload) {
    this.payload = payload;
    this.type = TOGGLE_CONTROL_SIDEBAR;
  }
}
class ToggleDarkMode {
  constructor(payload) {
    this.payload = payload;
    this.type = TOGGLE_DARK_MODE;
  }
}
class SetNavbarVariant {
  constructor(payload) {
    this.payload = payload;
    this.type = SET_NAVBAR_VARIANT;
  }
}
class SetSidebarSkin {
  constructor(payload) {
    this.payload = payload;
    this.type = SET_SIDEBAR_SKIN;
  }
}
class SetWindowSize {
  constructor(payload) {
    this.payload = payload;
    this.type = SET_WINDOWS_SIZE;
  }
}

/***/ }),

/***/ 36555:
/*!*************************************!*\
  !*** ./src/app/store/ui/reducer.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uiReducer": () => (/* binding */ uiReducer)
/* harmony export */ });
/* harmony import */ var _utils_themes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/themes */ 57558);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ 15728);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ 40187);



function uiReducer(state = _state__WEBPACK_IMPORTED_MODULE_2__["default"], action) {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__.TOGGLE_SIDEBAR_MENU:
      return {
        ...state,
        menuSidebarCollapsed: !state.menuSidebarCollapsed
      };
    case _actions__WEBPACK_IMPORTED_MODULE_1__.TOGGLE_CONTROL_SIDEBAR:
      return {
        ...state,
        controlSidebarCollapsed: !state.controlSidebarCollapsed
      };
    case _actions__WEBPACK_IMPORTED_MODULE_1__.TOGGLE_DARK_MODE:
      let variant;
      let skin;
      if (state.darkMode) {
        variant = _utils_themes__WEBPACK_IMPORTED_MODULE_0__.NAVBAR_LIGHT_VARIANTS[0].value;
        skin = _utils_themes__WEBPACK_IMPORTED_MODULE_0__.SIDEBAR_LIGHT_SKINS[0].value;
      } else {
        variant = _utils_themes__WEBPACK_IMPORTED_MODULE_0__.NAVBAR_DARK_VARIANTS[0].value;
        skin = _utils_themes__WEBPACK_IMPORTED_MODULE_0__.SIDEBAR_DARK_SKINS[0].value;
      }
      return {
        ...state,
        navbarVariant: variant,
        sidebarSkin: skin,
        darkMode: !state.darkMode
      };
    case _actions__WEBPACK_IMPORTED_MODULE_1__.SET_NAVBAR_VARIANT:
      let navbarVariant;
      if (state.darkMode) {
        navbarVariant = action.payload || _utils_themes__WEBPACK_IMPORTED_MODULE_0__.NAVBAR_DARK_VARIANTS[0].value;
      } else {
        navbarVariant = action.payload || _utils_themes__WEBPACK_IMPORTED_MODULE_0__.NAVBAR_LIGHT_VARIANTS[0].value;
      }
      return {
        ...state,
        navbarVariant
      };
    case _actions__WEBPACK_IMPORTED_MODULE_1__.SET_SIDEBAR_SKIN:
      let sidebarSkin;
      if (state.darkMode) {
        sidebarSkin = action.payload || _utils_themes__WEBPACK_IMPORTED_MODULE_0__.SIDEBAR_DARK_SKINS[0].value;
      } else {
        sidebarSkin = action.payload || _utils_themes__WEBPACK_IMPORTED_MODULE_0__.SIDEBAR_LIGHT_SKINS[0].value;
      }
      return {
        ...state,
        sidebarSkin
      };
    default:
      return state;
  }
}

/***/ }),

/***/ 40187:
/*!***********************************!*\
  !*** ./src/app/store/ui/state.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  darkMode: false,
  navbarVariant: 'navbar-light',
  sidebarSkin: 'sidebar-dark-primary',
  menuSidebarCollapsed: false,
  controlSidebarCollapsed: true
  // screenSize: calculateWindowSize(window.innerWidth)
});

/***/ }),

/***/ 57558:
/*!*********************************!*\
  !*** ./src/app/utils/themes.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NAVBAR_DARK_VARIANTS": () => (/* binding */ NAVBAR_DARK_VARIANTS),
/* harmony export */   "NAVBAR_LIGHT_VARIANTS": () => (/* binding */ NAVBAR_LIGHT_VARIANTS),
/* harmony export */   "SIDEBAR_DARK_SKINS": () => (/* binding */ SIDEBAR_DARK_SKINS),
/* harmony export */   "SIDEBAR_LIGHT_SKINS": () => (/* binding */ SIDEBAR_LIGHT_SKINS)
/* harmony export */ });
const NAVBAR_LIGHT_VARIANTS = [{
  value: 'navbar-light',
  label: 'Light'
}, {
  value: 'navbar-warning navbar-light',
  label: 'Warning'
}, {
  value: 'navbar-white navbar-light',
  label: 'White'
}, {
  value: 'navbar-orange navbar-light',
  label: 'Orange'
}];
const NAVBAR_DARK_VARIANTS = [{
  value: 'navbar-dark',
  label: 'Dark'
}, {
  value: 'navbar-primary navbar-dark',
  label: 'Primary'
}, {
  value: 'navbar-secondary navbar-dark',
  label: 'Secondary'
}, {
  value: 'navbar-info navbar-dark',
  label: 'Info'
}, {
  value: 'navbar-success navbar-dark',
  label: 'Success'
}, {
  value: 'navbar-danger navbar-dark',
  label: 'Danger'
}, {
  value: 'navbar-indigo navbar-dark',
  label: 'Indigo'
}, {
  value: 'navbar-purple navbar-dark',
  label: 'Purple'
}, {
  value: 'navbar-pink navbar-dark',
  label: 'Pink'
}, {
  value: 'navbar-navy navbar-dark',
  label: 'Navy'
}, {
  value: 'navbar-lightblue navbar-dark',
  label: 'Light Blue'
}, {
  value: 'navbar-teal navbar-dark',
  label: 'Teal'
}, {
  value: 'navbar-cyan navbar-dark',
  label: 'Cyan'
}, {
  value: 'navbar-gray-dark navbar-dark',
  label: 'Gray Dark'
}, {
  value: 'navbar-gray navbar-dark',
  label: 'Gray'
}];
const SIDEBAR_DARK_SKINS = [{
  value: 'sidebar-dark-primary',
  label: 'Primary'
}, {
  value: 'sidebar-dark-warning',
  label: 'Warning'
}, {
  value: 'sidebar-dark-info',
  label: 'Info'
}, {
  value: 'sidebar-dark-danger',
  label: 'Danger'
}, {
  value: 'sidebar-dark-success',
  label: 'Success'
}, {
  value: 'sidebar-dark-indigo',
  label: 'Indigo'
}, {
  value: 'sidebar-dark-lightblue',
  label: 'Lightblue'
}, {
  value: 'sidebar-dark-navy',
  label: 'Navy'
}, {
  value: 'sidebar-dark-purple',
  label: 'Purple'
}, {
  value: 'sidebar-dark-fuchsia',
  label: 'Fuchsia'
}, {
  value: 'sidebar-dark-pink',
  label: 'Pink'
}, {
  value: 'sidebar-dark-maroon',
  label: 'Maroon'
}, {
  value: 'sidebar-dark-orange',
  label: 'Orange'
}, {
  value: 'sidebar-dark-lime',
  label: 'Lime'
}, {
  value: 'sidebar-dark-teal',
  label: 'Teal'
}, {
  value: 'sidebar-dark-olive',
  label: 'Olive'
}];
const SIDEBAR_LIGHT_SKINS = [{
  value: 'sidebar-light-primary',
  label: 'Primary'
}, {
  value: 'sidebar-light-warning',
  label: 'Warning'
}, {
  value: 'sidebar-light-info',
  label: 'Info'
}, {
  value: 'sidebar-light-danger',
  label: 'Danger'
}, {
  value: 'sidebar-light-success',
  label: 'Success'
}, {
  value: 'sidebar-light-indigo',
  label: 'Indigo'
}, {
  value: 'sidebar-light-lightblue',
  label: 'Lightblue'
}, {
  value: 'sidebar-light-navy',
  label: 'Navy'
}, {
  value: 'sidebar-light-purple',
  label: 'Purple'
}, {
  value: 'sidebar-light-fuchsia',
  label: 'Fuchsia'
}, {
  value: 'sidebar-light-pink',
  label: 'Pink'
}, {
  value: 'sidebar-light-maroon',
  label: 'Maroon'
}, {
  value: 'sidebar-light-orange',
  label: 'Orange'
}, {
  value: 'sidebar-light-lime',
  label: 'Lime'
}, {
  value: 'sidebar-light-teal',
  label: 'Teal'
}, {
  value: 'sidebar-light-olive',
  label: 'Olive'
}];

/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: true,
  api_server: "http://172.25.242.100:8080",
  endpoints: {
    register: 'api/auth/register',
    login: 'api/auth/login',
    user: 'api/auth/user',
    documentList: 'api/documents',
    documentCreate: 'api/documents/create/',
    documentDetail: 'api/document',
    documentEdit: 'api/documents/update/<pk>',
    documentDelete: 'api/documents/delete/<pk>',
    clientsList: 'api/clients/',
    clientCreate: 'api/clients/create/',
    clientDetail: 'api/clients/<pk>/',
    clientEdit: 'api/clients/update/<pk>',
    clientDelete: 'api/clients/delete/<pk>',
    dashboard: 'api/dashboard/'
  }
};

/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
window.PF = {
  config: {
    mode: 'bs4'
  }
};
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 23376:
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/@profabric/web-components/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \********************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./pf-button_6.entry.js": [
		92983,
		"node_modules_profabric_web-components_dist_esm_pf-button_6_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 23376;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 4147:
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"E-Facture","version":"0.1.0","private":true,"type":"module","scripts":{"prepare":"husky install","start":"ng serve","build":"ng build --configuration production","test":"ng test","lint":"ng lint","e2e":"ng e2e","update":"ng update --force @angular/cli @angular/core","postinstall":"ngcc"},"lint-staged":{"src/**/*.{ts,tsx}":["prettier --write"]},"husky":{"hooks":{"pre-commit":"pretty-quick --staged && ng lint && lint-staged"}},"dependencies":{"@angular-devkit/core":"^16.2.7","@angular/animations":"^15.0.1","@angular/cdk":"^15.2.9","@angular/common":"15.0.1","@angular/compiler":"15.0.1","@angular/core":"15.0.1","@angular/forms":"15.0.1","@angular/localize":"15.0.1","@angular/platform-browser":"15.0.1","@angular/platform-browser-dynamic":"15.0.1","@angular/router":"15.0.1","@auth0/angular-jwt":"^5.1.2","@ng-bootstrap/ng-bootstrap":"^14.2.0","@ngrx/store":"14.3.0","@popperjs/core":"^2.11.6","@profabric/angular-components":"0.1.7","bootstrap":"4.6.1","chart.js":"^4.4.0","core-js":"3.25.0","gatekeeper-client-sdk":"0.4.2","jspdf":"^2.5.1","jspdf-autotable":"^3.7.1","jspdf-invoice-template":"^1.4.3","jspdf-invoice-template-nodejs":"^1.4.30","luxon":"3.0.3","ngx-toastr":"16.0.1","primeicons":"^6.0.1","primeng":"^15.0.0","process":"0.11.10","rxjs":"7.5.6","summernote":"./summernote","tslib":"2.4.0","uuid":"8.3.2","zone.js":"~0.11.8"},"devDependencies":{"@angular-devkit/build-angular":"15.0.1","@angular-eslint/builder":"14.0.3","@angular-eslint/eslint-plugin":"14.0.3","@angular-eslint/eslint-plugin-template":"14.0.3","@angular-eslint/schematics":"14.0.3","@angular-eslint/template-parser":"14.0.3","@angular/cli":"15.0.1","@angular/compiler-cli":"15.0.1","@angular/language-service":"15.0.1","@types/jasmine":"~4.3.0","@types/jasminewd2":"2.0.10","@types/node":"18.7.14","@typescript-eslint/eslint-plugin":"5.36.1","@typescript-eslint/parser":"5.36.1","admin-lte":"3.2.0","eslint":"8.23.0","fs-web":"1.0.1","husky":"8.0.1","jasmine-core":"~4.4.0","jasmine-spec-reporter":"~7.0.0","karma":"6.4.0","karma-chrome-launcher":"~3.1.1","karma-coverage-istanbul-reporter":"3.0.3","karma-jasmine":"~5.1.0","karma-jasmine-html-reporter":"2.0.0","lint-staged":"13.0.3","os-browserify":"0.3.0","path-browserify":"1.0.1","prettier":"2.7.1","pretty-quick":"3.1.3","protractor":"7.0.0","ts-node":"10.9.1","tslint-config-prettier":"1.18.0","tslint-plugin-prettier":"2.3.0","typescript":"4.8.2"}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(96344), __webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map