System.register(['angular2/core', 'angular2/router', 'angular2/http', './event', './event.service'], function(exports_1, context_1) {
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
    var core_1, router_1, router_2, http_1, event_1, event_service_1;
    var CreateEventComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (event_1_1) {
                event_1 = event_1_1;
            },
            function (event_service_1_1) {
                event_service_1 = event_service_1_1;
            }],
        execute: function() {
            CreateEventComponent = (function () {
                function CreateEventComponent(_EventService, router) {
                    this._EventService = _EventService;
                    this.router = router;
                    this.model = new event_1.Event('', '', '', '', '', '', '', '');
                }
                CreateEventComponent.prototype.create = function (model) {
                    var _this = this;
                    this._EventService.create(this.model)
                        .subscribe(function (events) { return _this.event.push(events); }, function (error) { return _this.handleError; });
                    this.router.navigate(['Event']);
                };
                CreateEventComponent.prototype.handleError = function () {
                    console.log("error");
                };
                CreateEventComponent = __decorate([
                    core_1.Component({
                        selector: 'event',
                        providers: [http_1.HTTP_PROVIDERS, event_service_1.EventService]
                    }),
                    core_1.View({
                        directives: [router_1.RouterLink],
                        templateUrl: '../views/event/new.ejs'
                    }), 
                    __metadata('design:paramtypes', [event_service_1.EventService, router_2.Router])
                ], CreateEventComponent);
                return CreateEventComponent;
            }());
            exports_1("CreateEventComponent", CreateEventComponent);
        }
    }
});
//# sourceMappingURL=createEvent.component.js.map