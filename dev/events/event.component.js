System.register(['angular2/core', 'angular2/router', 'angular2/http', './event.service'], function(exports_1, context_1) {
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
    var core_1, router_1, http_1, event_service_1;
    var EventComponent;
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
            function (event_service_1_1) {
                event_service_1 = event_service_1_1;
            }],
        execute: function() {
            EventComponent = (function () {
                function EventComponent(_EventService) {
                    this._EventService = _EventService;
                    this.errorMessage = "une erreur";
                }
                EventComponent.prototype.ngOnInit = function () { this.getEvent(); };
                EventComponent.prototype.getEvent = function () {
                    var _this = this;
                    this._EventService.getEvent()
                        .subscribe(function (Event) { return _this.Events = Event; }, function (error) { return _this.errorMessage = error; });
                };
                EventComponent = __decorate([
                    core_1.Component({
                        selector: 'event',
                        providers: [http_1.HTTP_PROVIDERS, event_service_1.EventService]
                    }),
                    core_1.View({
                        directives: [router_1.RouterLink],
                        templateUrl: '../views/event/event.ejs'
                    }), 
                    __metadata('design:paramtypes', [event_service_1.EventService])
                ], EventComponent);
                return EventComponent;
            }());
            exports_1("EventComponent", EventComponent);
        }
    }
});
//# sourceMappingURL=event.component.js.map