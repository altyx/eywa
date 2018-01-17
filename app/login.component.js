System.register(['angular2/core', 'angular2/router', './login'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, login_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent() {
                    this.model = new login_1.Login('', '');
                }
                LoginComponent.prototype.onSubmit = function () {
                    console.log(btoa(this.model.password));
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                    }),
                    core_1.View({
                        directives: [router_1.RouterLink],
                        templateUrl: '../views/login.ejs'
                    }), 
                    __metadata('design:paramtypes', [])
                ], LoginComponent);
                return LoginComponent;
            })();
            exports_1("LoginComponent", LoginComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJMb2dpbkNvbXBvbmVudCIsIkxvZ2luQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiTG9naW5Db21wb25lbnQub25TdWJtaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBO2dCQUFBQTtvQkFXQ0MsVUFBS0EsR0FBR0EsSUFBSUEsYUFBS0EsQ0FBRUEsRUFBRUEsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7Z0JBTTVCQSxDQUFDQTtnQkFKQUQsaUNBQVFBLEdBQVJBO29CQUNDRSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDeENBLENBQUNBO2dCQWZGRjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNWQSxRQUFRQSxFQUFFQSxPQUFPQTtxQkFFakJBLENBQUNBO29CQUNEQSxXQUFJQSxDQUFDQTt3QkFDTEEsVUFBVUEsRUFBRUEsQ0FBQ0EsbUJBQVVBLENBQUNBO3dCQUN4QkEsV0FBV0EsRUFBRUEsb0JBQW9CQTtxQkFDakNBLENBQUNBOzttQ0FVREE7Z0JBQURBLHFCQUFDQTtZQUFEQSxDQWpCQSxBQWlCQ0EsSUFBQTtZQWpCRCwyQ0FpQkMsQ0FBQSIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1ZpZXcsIENvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Um91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTLFJvdXRlckxpbmt9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcbmltcG9ydCB7TmdGb3JtfSAgICBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xyXG5pbXBvcnQgeyBMb2dpbiB9ICAgIGZyb20gJy4vbG9naW4nO1xyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2xvZ2luJyxcclxuXHJcbn0pXHJcbkBWaWV3KHtcclxuXHRkaXJlY3RpdmVzOiBbUm91dGVyTGlua10sXHJcblx0dGVtcGxhdGVVcmw6ICcuLi92aWV3cy9sb2dpbi5lanMnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xyXG5cclxuXHRtb2RlbCA9IG5ldyBMb2dpbiggJycsICcnKTtcclxuXHJcblx0b25TdWJtaXQoKSB7IFxyXG5cdFx0Y29uc29sZS5sb2coYnRvYSh0aGlzLm1vZGVsLnBhc3N3b3JkKSk7XHJcblx0fVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
