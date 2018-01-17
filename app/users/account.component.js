System.register(['angular2/core', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var AccountComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AccountComponent = (function () {
                function AccountComponent() {
                }
                AccountComponent = __decorate([
                    core_1.Component({
                        selector: 'account',
                    }),
                    core_1.View({
                        directives: [router_1.RouterLink],
                        templateUrl: '../views/user/account.ejs'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AccountComponent);
                return AccountComponent;
            })();
            exports_1("AccountComponent", AccountComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzL2FjY291bnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkFjY291bnRDb21wb25lbnQiLCJBY2NvdW50Q29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQTtnQkFBQUE7Z0JBV0FDLENBQUNBO2dCQVhERDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNSQSxRQUFRQSxFQUFFQSxTQUFTQTtxQkFFckJBLENBQUNBO29CQUNEQSxXQUFJQSxDQUFDQTt3QkFDTEEsVUFBVUEsRUFBRUEsQ0FBQ0EsbUJBQVVBLENBQUNBO3dCQUN4QkEsV0FBV0EsRUFBRUEsMkJBQTJCQTtxQkFDeENBLENBQUNBOztxQ0FJREE7Z0JBQURBLHVCQUFDQTtZQUFEQSxDQVhBLEFBV0NBLElBQUE7WUFYRCwrQ0FXQyxDQUFBIiwiZmlsZSI6InVzZXJzL2FjY291bnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtWaWV3LCBDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFUyxSb3V0ZXJMaW5rfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgIHNlbGVjdG9yOiAnYWNjb3VudCcsXHJcbiAgIFxyXG59KVxyXG5AVmlldyh7XHJcblx0ZGlyZWN0aXZlczogW1JvdXRlckxpbmtdLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi4vdmlld3MvdXNlci9hY2NvdW50LmVqcydcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBY2NvdW50Q29tcG9uZW50IHtcclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
