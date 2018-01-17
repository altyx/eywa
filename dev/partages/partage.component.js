System.register(['angular2/core', 'angular2/router', 'angular2/http', './partage.service', './partage'], function(exports_1, context_1) {
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
    var core_1, router_1, http_1, partage_service_1, partage_1;
    var PartageComponent;
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
            function (partage_service_1_1) {
                partage_service_1 = partage_service_1_1;
            },
            function (partage_1_1) {
                partage_1 = partage_1_1;
            }],
        execute: function() {
            PartageComponent = (function () {
                function PartageComponent(_PartageService) {
                    this._PartageService = _PartageService;
                    this.model = new partage_1.Partage(null, null, null, null, null);
                    this.errorMessage = "Une erreur est survenue lors de la récupération des partages :/ ";
                }
                PartageComponent.prototype.ngOnInit = function () { this.getPartages(); };
                PartageComponent.prototype.create = function (model) {
                    //this.model.user_id = 1;
                    var _this = this;
                    this.model.dateCreation = new Date();
                    this._PartageService.create(this.model)
                        .subscribe(function (partages) { return _this.Partages.push(partages); }, function (error) { return _this.handleError; });
                    //this.model.content = null;
                };
                PartageComponent.prototype.handleError = function () {
                    console.log("error");
                };
                PartageComponent.prototype.getPartages = function () {
                    var _this = this;
                    this._PartageService.getPartages()
                        .subscribe(function (partage) { return _this.Partages = partage; }, function (error) { return _this.errorMessage = error; });
                };
                PartageComponent = __decorate([
                    core_1.Component({
                        selector: 'index',
                        providers: [http_1.HTTP_PROVIDERS, partage_service_1.PartageService]
                    }),
                    core_1.View({
                        directives: [router_1.RouterLink],
                        templateUrl: '../views/homepage.ejs'
                    }), 
                    __metadata('design:paramtypes', [partage_service_1.PartageService])
                ], PartageComponent);
                return PartageComponent;
            }());
            exports_1("PartageComponent", PartageComponent);
        }
    }
});
//# sourceMappingURL=partage.component.js.map