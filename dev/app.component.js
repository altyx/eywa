System.register(['angular2/core', 'angular2/router', './users/account.component', './users/login.component', './partages/partage.component', './events/event.component', './events/createEvent.component', './users/signup.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, account_component_1, login_component_1, partage_component_1, event_component_1, createEvent_component_1, signup_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (account_component_1_1) {
                account_component_1 = account_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (partage_component_1_1) {
                partage_component_1 = partage_component_1_1;
            },
            function (event_component_1_1) {
                event_component_1 = event_component_1_1;
            },
            function (createEvent_component_1_1) {
                createEvent_component_1 = createEvent_component_1_1;
            },
            function (signup_component_1_1) {
                signup_component_1 = signup_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<div class=\"col-sm-3 menu\">\n                <div class=\"sidebar-nav\">\n                  <div class=\"navbar navbar-default\" role=\"navigation\">\n                    <div class=\"navbar-header\">\n                      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".sidebar-navbar-collapse\">\n                        <span class=\"sr-only\">Toggle navigation</span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                      </button>\n                      <span class=\"visible-xs navbar-brand\">Sidebar menu</span>\n                    </div>\n                    <div class=\"navbar-collapse collapse sidebar-navbar-collapse\">\n                      <ul class=\"nav navbar-nav\">\n                        <li class=\"profileContainer\">\n                            <div class=\"col-sm-3\">\n                                <div class=\"avatar\" style=\"background-image:url(https://cdn3.iconfinder.com/data/icons/rcons-user-action/32/boy-512.png)\">\n                                </div>\n                            </div>\n                            <div class=\"col-sm-9 actions\">\n                                <ul class=\"list-unstyled\">\n                                    <li> Mon compte </li>\n                                    <li> D\u00E9connexion </li>\n                                </ul>\n                            </div>\n                        </li>\n                        <li class=\"menuList active\"><a [routerLink]=\"['Partage']\">Accueil</a></li>\n                        <li class=\"menuList\"><a [routerLink]=\"['Event']\">Ev\u00E8nements</a></li>\n                        <li class=\"menuList\"><a href=\"#\">Petits d\u00E9jeuner</a></li>\n                        <li class=\"menuList\"><a href=\"#\">Sondage</a></li>\n                        <li class=\"menuList\"><a href=\"#\">D\u00E9connexion</a></li>\n                      </ul>\n                    </div><!--/.nav-collapse -->\n                  </div>\n                </div>\n              </div><router-outlet></router-outlet>",
                        directives: [router_1.ROUTER_DIRECTIVES, router_1.RouterLink]
                    }),
                    router_1.RouteConfig([
                        { path: '/account', name: 'Account', component: account_component_1.AccountComponent },
                        { path: '/login', name: 'Login', component: login_component_1.LoginComponent },
                        { path: '/signup', name: 'Signup', component: signup_component_1.SignupComponent },
                        { path: '/', name: 'Partage', component: partage_component_1.PartageComponent },
                        { path: '/event', name: 'Event', component: event_component_1.EventComponent },
                        { path: '/newEvent', name: 'CreateEvent', component: createEvent_component_1.CreateEventComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map