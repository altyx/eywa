System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', "rxjs/add/operator/map", 'rxjs/Rx'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1;
    var EventService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            EventService = (function () {
                function EventService(http) {
                    this.http = http;
                    this._eventURL = '/apiCreateEvent';
                    this._userEventUrl = '/apiInscriptionEvent';
                }
                EventService.prototype.create = function (model) {
                    var body = JSON.stringify(model);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(this._eventURL, body, options)
                        .map(function (res) { return res.json().data; });
                };
                EventService.prototype.inscription = function (userEvent) {
                    var body = JSON.stringify(userEvent);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(this._userEventUrl, body, options)
                        .map(function (res) { return res.json().data; });
                };
                EventService.prototype.getEvent = function () {
                    return this.http.get('/apiGetEvents')
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                EventService.prototype.handleError = function (error) {
                    // in a real world app, we may send the error to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                EventService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], EventService);
                return EventService;
            })();
            exports_1("EventService", EventService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy9ldmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIkV2ZW50U2VydmljZSIsIkV2ZW50U2VydmljZS5jb25zdHJ1Y3RvciIsIkV2ZW50U2VydmljZS5jcmVhdGUiLCJFdmVudFNlcnZpY2UuaW5zY3JpcHRpb24iLCJFdmVudFNlcnZpY2UuZ2V0RXZlbnQiLCJFdmVudFNlcnZpY2UuaGFuZGxlRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBR0NBLHNCQUFxQkEsSUFBVUE7b0JBQVZDLFNBQUlBLEdBQUpBLElBQUlBLENBQU1BO29CQUV2QkEsY0FBU0EsR0FBR0EsaUJBQWlCQSxDQUFBQTtvQkFDN0JBLGtCQUFhQSxHQUFHQSxzQkFBc0JBLENBQUFBO2dCQUhaQSxDQUFDQTtnQkFLbkNELDZCQUFNQSxHQUFOQSxVQUFPQSxLQUFZQTtvQkFDbEJFLElBQUlBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO29CQUNqQ0EsSUFBSUEsT0FBT0EsR0FBR0EsSUFBSUEsY0FBT0EsQ0FBQ0EsRUFBRUEsY0FBY0EsRUFBRUEsa0JBQWtCQSxFQUFFQSxDQUFDQSxDQUFDQTtvQkFDbEVBLElBQUlBLE9BQU9BLEdBQUdBLElBQUlBLHFCQUFjQSxDQUFDQSxFQUFFQSxPQUFPQSxFQUFFQSxPQUFPQSxFQUFFQSxDQUFDQSxDQUFDQTtvQkFDdkRBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLEVBQUVBLElBQUlBLEVBQUVBLE9BQU9BLENBQUNBO3lCQUNuREEsR0FBR0EsQ0FBQ0EsVUFBQUEsR0FBR0EsSUFBSUEsT0FBQUEsR0FBR0EsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0EsSUFBSUEsRUFBZkEsQ0FBZUEsQ0FBQ0EsQ0FBQUE7Z0JBQzdCQSxDQUFDQTtnQkFFREYsa0NBQVdBLEdBQVhBLFVBQVlBLFNBQW9CQTtvQkFDL0JHLElBQUlBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBO29CQUNyQ0EsSUFBSUEsT0FBT0EsR0FBR0EsSUFBSUEsY0FBT0EsQ0FBQ0EsRUFBRUEsY0FBY0EsRUFBRUEsa0JBQWtCQSxFQUFFQSxDQUFDQSxDQUFDQTtvQkFDbEVBLElBQUlBLE9BQU9BLEdBQUdBLElBQUlBLHFCQUFjQSxDQUFDQSxFQUFFQSxPQUFPQSxFQUFFQSxPQUFPQSxFQUFFQSxDQUFDQSxDQUFDQTtvQkFDdkRBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLElBQUlBLEVBQUVBLE9BQU9BLENBQUNBO3lCQUN2REEsR0FBR0EsQ0FBQ0EsVUFBQUEsR0FBR0EsSUFBSUEsT0FBQUEsR0FBR0EsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0EsSUFBSUEsRUFBZkEsQ0FBZUEsQ0FBQ0EsQ0FBQUE7Z0JBQzdCQSxDQUFDQTtnQkFFREgsK0JBQVFBLEdBQVJBO29CQUNDSSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxlQUFlQSxDQUFDQTt5QkFDaENBLEdBQUdBLENBQUNBLFVBQUFBLEdBQUdBLElBQUtBLE9BQUFBLEdBQUdBLENBQUNBLElBQUlBLEVBQUVBLEVBQVZBLENBQVVBLENBQUNBO3lCQUN2QkEsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzlCQSxDQUFDQTtnQkFFT0osa0NBQVdBLEdBQW5CQSxVQUFxQkEsS0FBZUE7b0JBQ2pDSyxtRkFBbUZBO29CQUNuRkEsNENBQTRDQTtvQkFDM0NBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO29CQUNyQkEsTUFBTUEsQ0FBQ0EsdUJBQVVBLENBQUNBLEtBQUtBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBLEtBQUtBLElBQUlBLGNBQWNBLENBQUNBLENBQUNBO2dCQUNqRUEsQ0FBQ0E7Z0JBbkNITDtvQkFBQ0EsaUJBQVVBLEVBQUVBOztpQ0FvQ1pBO2dCQUFEQSxtQkFBQ0E7WUFBREEsQ0FwQ0EsQUFvQ0NBLElBQUE7WUFwQ0QsdUNBb0NDLENBQUEiLCJmaWxlIjoiZXZlbnRzL2V2ZW50LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9ICAgICBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtIdHRwLCBSZXNwb25zZSxSZXF1ZXN0T3B0aW9ucywgSGVhZGVyc30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gICAgIGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgJ3J4anMvUngnO1xyXG5pbXBvcnQge0V2ZW50fSBmcm9tICcuL2V2ZW50JztcclxuaW1wb3J0IHtVc2VyRXZlbnR9IGZyb20gJy4vVXNlckV2ZW50JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuXHJcbmV4cG9ydCBjbGFzcyBFdmVudFNlcnZpY2Uge1xyXG5cdGNvbnN0cnVjdG9yIChwcml2YXRlIGh0dHA6IEh0dHApe1x0fVxyXG5cclxuXHRwcml2YXRlIF9ldmVudFVSTCA9ICcvYXBpQ3JlYXRlRXZlbnQnXHJcblx0cHJpdmF0ZSBfdXNlckV2ZW50VXJsID0gJy9hcGlJbnNjcmlwdGlvbkV2ZW50J1xyXG5cdFxyXG5cdGNyZWF0ZShtb2RlbDogRXZlbnQpIHtcclxuXHRcdGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkobW9kZWwpO1xyXG5cdFx0bGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XHJcblx0XHRsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5fZXZlbnRVUkwsIGJvZHksIG9wdGlvbnMpXHJcblx0XHQubWFwKHJlcyA9PiByZXMuanNvbigpLmRhdGEpXHJcblx0fVxyXG5cclxuXHRpbnNjcmlwdGlvbih1c2VyRXZlbnQ6IFVzZXJFdmVudCkge1xyXG5cdFx0bGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh1c2VyRXZlbnQpO1xyXG5cdFx0bGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XHJcblx0XHRsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5fdXNlckV2ZW50VXJsLCBib2R5LCBvcHRpb25zKVxyXG5cdFx0Lm1hcChyZXMgPT4gcmVzLmpzb24oKS5kYXRhKVxyXG5cdH1cclxuXHJcblx0Z2V0RXZlbnQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldCgnL2FwaUdldEV2ZW50cycpXHJcblx0XHRcdFx0XHRcdC5tYXAocmVzID0+ICByZXMuanNvbigpKVxyXG5cdFx0XHRcdFx0XHQuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGhhbmRsZUVycm9yIChlcnJvcjogUmVzcG9uc2UpIHtcclxuICAgIC8vIGluIGEgcmVhbCB3b3JsZCBhcHAsIHdlIG1heSBzZW5kIHRoZSBlcnJvciB0byBzb21lIHJlbW90ZSBsb2dnaW5nIGluZnJhc3RydWN0dXJlXHJcbiAgICAvLyBpbnN0ZWFkIG9mIGp1c3QgbG9nZ2luZyBpdCB0byB0aGUgY29uc29sZVxyXG5cdCAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHQgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
