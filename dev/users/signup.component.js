System.register(['angular2/core', 'angular2/router', 'angular2/http', './login', './user.service'], function(exports_1, context_1) {
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
    var core_1, router_1, http_1, login_1, user_service_1;
    var SignupComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            SignupComponent = (function () {
                function SignupComponent(_userService) {
                    this._userService = _userService;
                    this.model = new login_1.Login('', '', '', '', '', '');
                }
                /*
                
                    onSubmit() {
                        //console.log(btoa(this.model.password));
                        this._userService.getUser()
                            .subscribe(
                                data => this.user,
                                error => alert(error),
                                () => console.log("fini le onSubmit")
                            );
                    }
                */
                SignupComponent.prototype.inscription = function (lastName, firstName, email, password, phone, mobile) {
                    var _this = this;
                    this._userService.inscription(this.model.lastName, this.model.firstName, this.model.email, btoa(this.model.password), this.model.phone, this.model.mobile)
                        .subscribe(function (users) { return _this.user.push(users); }, function (error) { return _this.handleError; });
                };
                SignupComponent.prototype.handleError = function () {
                    console.log("error serveur");
                };
                SignupComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        providers: [http_1.HTTP_PROVIDERS, user_service_1.UserService]
                    }),
                    core_1.View({
                        directives: [router_1.RouterLink],
                        templateUrl: '../views/user/signup.ejs'
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], SignupComponent);
                return SignupComponent;
            }());
            exports_1("SignupComponent", SignupComponent);
        }
    }
});
//# sourceMappingURL=signup.component.js.map