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
    var EventComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            EventComponent = (function () {
                function EventComponent() {
                }
                EventComponent = __decorate([
                    core_1.Component({
                        selector: 'event',
                    }),
                    core_1.View({
                        directives: [router_1.RouterLink],
                        templateUrl: '../views/event.ejs'
                    }), 
                    __metadata('design:paramtypes', [])
                ], EventComponent);
                return EventComponent;
            })();
            exports_1("EventComponent", EventComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJFdmVudENvbXBvbmVudCIsIkV2ZW50Q29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQTtnQkFBQUE7Z0JBYUFDLENBQUNBO2dCQWJERDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNSQSxRQUFRQSxFQUFFQSxPQUFPQTtxQkFFbkJBLENBQUNBO29CQUNEQSxXQUFJQSxDQUFDQTt3QkFDTEEsVUFBVUEsRUFBRUEsQ0FBQ0EsbUJBQVVBLENBQUNBO3dCQUN4QkEsV0FBV0EsRUFBRUEsb0JBQW9CQTtxQkFDakNBLENBQUNBOzttQ0FNREE7Z0JBQURBLHFCQUFDQTtZQUFEQSxDQWJBLEFBYUNBLElBQUE7WUFiRCwyQ0FhQyxDQUFBIiwiZmlsZSI6ImV2ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VmlldywgQ29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVMsUm91dGVyTGlua30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICBzZWxlY3RvcjogJ2V2ZW50JyxcclxuICAgXHJcbn0pXHJcbkBWaWV3KHtcclxuXHRkaXJlY3RpdmVzOiBbUm91dGVyTGlua10sXHJcblx0dGVtcGxhdGVVcmw6ICcuLi92aWV3cy9ldmVudC5lanMnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRXZlbnRDb21wb25lbnQge1xyXG5cclxuXHRcclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
