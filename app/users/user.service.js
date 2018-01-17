System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', "rxjs/add/operator/map"], function(exports_1) {
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
    var UserService;
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
            function (_1) {}],
        execute: function() {
            UserService = (function () {
                function UserService(http) {
                    this.http = http;
                    this._userUrl = '/apilogin';
                    this._loginurl = '/loginapi';
                }
                UserService.prototype.getUser = function () {
                    return this.http.get(this._userUrl)
                        .map(function (res) { return res.json(); });
                };
                UserService.prototype.login = function (email, password) {
                    var body = JSON.stringify({ email: email, password: password });
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(this._loginurl, body, options)
                        .map(function (res) { return res.json().data; });
                    console.log("data");
                };
                UserService.prototype.inscription = function (firstName, lastName, email, password, phone, mobile) {
                    var body = JSON.stringify({ lastName: lastName, firstName: firstName, email: email, password: password, phone: phone, mobile: mobile });
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(this._userUrl, body, options)
                        .map(function (res) { return res.json().data; });
                };
                UserService.prototype.Error = function (error) {
                    console.log(error);
                    return Observable_1.Observable.throw(error.json().error || 'error');
                };
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], UserService);
                return UserService;
            })();
            exports_1("UserService", UserService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzL3VzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6WyJVc2VyU2VydmljZSIsIlVzZXJTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiVXNlclNlcnZpY2UuZ2V0VXNlciIsIlVzZXJTZXJ2aWNlLmxvZ2luIiwiVXNlclNlcnZpY2UuaW5zY3JpcHRpb24iLCJVc2VyU2VydmljZS5FcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUdDQSxxQkFBcUJBLElBQVVBO29CQUFWQyxTQUFJQSxHQUFKQSxJQUFJQSxDQUFNQTtvQkFFdkJBLGFBQVFBLEdBQUdBLFdBQVdBLENBQUNBO29CQUN2QkEsY0FBU0EsR0FBR0EsV0FBV0EsQ0FBQ0E7Z0JBSEVBLENBQUNBO2dCQUtuQ0QsNkJBQU9BLEdBQVBBO29CQUNDRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQTt5QkFDbENBLEdBQUdBLENBQUNBLFVBQUFBLEdBQUdBLElBQUlBLE9BQUFBLEdBQUdBLENBQUNBLElBQUlBLEVBQUVBLEVBQVZBLENBQVVBLENBQUNBLENBQUFBO2dCQUN4QkEsQ0FBQ0E7Z0JBRURGLDJCQUFLQSxHQUFMQSxVQUFNQSxLQUFhQSxFQUFFQSxRQUFnQkE7b0JBQ3BDRyxJQUFJQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxFQUFFQSxPQUFBQSxLQUFLQSxFQUFHQSxVQUFBQSxRQUFRQSxFQUFFQSxDQUFDQSxDQUFDQTtvQkFDaERBLElBQUlBLE9BQU9BLEdBQUdBLElBQUlBLGNBQU9BLENBQUNBLEVBQUVBLGNBQWNBLEVBQUVBLGtCQUFrQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7b0JBQ2xFQSxJQUFJQSxPQUFPQSxHQUFHQSxJQUFJQSxxQkFBY0EsQ0FBQ0EsRUFBRUEsT0FBT0EsRUFBRUEsT0FBT0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7b0JBQ3ZEQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxFQUFFQSxJQUFJQSxFQUFFQSxPQUFPQSxDQUFDQTt5QkFDbkRBLEdBQUdBLENBQUNBLFVBQUFBLEdBQUdBLElBQUlBLE9BQUFBLEdBQUdBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBLElBQUlBLEVBQWZBLENBQWVBLENBQUNBLENBQUNBO29CQUM3QkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ3JCQSxDQUFDQTtnQkFFREgsaUNBQVdBLEdBQVhBLFVBQVlBLFNBQWlCQSxFQUFFQSxRQUFnQkEsRUFBRUEsS0FBYUEsRUFBRUEsUUFBZ0JBLEVBQUVBLEtBQWFBLEVBQUVBLE1BQWNBO29CQUM5R0ksSUFBSUEsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsRUFBQ0EsVUFBQUEsUUFBUUEsRUFBRUEsV0FBQUEsU0FBU0EsRUFBRUEsT0FBQUEsS0FBS0EsRUFBR0EsVUFBQUEsUUFBUUEsRUFBRUEsT0FBQUEsS0FBS0EsRUFBRUEsUUFBQUEsTUFBTUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7b0JBQ25GQSxJQUFJQSxPQUFPQSxHQUFHQSxJQUFJQSxjQUFPQSxDQUFDQSxFQUFFQSxjQUFjQSxFQUFFQSxrQkFBa0JBLEVBQUVBLENBQUNBLENBQUNBO29CQUNsRUEsSUFBSUEsT0FBT0EsR0FBR0EsSUFBSUEscUJBQWNBLENBQUNBLEVBQUVBLE9BQU9BLEVBQUVBLE9BQU9BLEVBQUVBLENBQUNBLENBQUNBO29CQUN2REEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsRUFBRUEsSUFBSUEsRUFBRUEsT0FBT0EsQ0FBQ0E7eUJBQ2xEQSxHQUFHQSxDQUFDQSxVQUFBQSxHQUFHQSxJQUFJQSxPQUFBQSxHQUFHQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQSxJQUFJQSxFQUFmQSxDQUFlQSxDQUFDQSxDQUFBQTtnQkFDN0JBLENBQUNBO2dCQUVPSiwyQkFBS0EsR0FBYkEsVUFBY0EsS0FBZ0JBO29CQUM3QkssT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7b0JBQ25CQSxNQUFNQSxDQUFDQSx1QkFBVUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0EsS0FBS0EsSUFBR0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3ZEQSxDQUFDQTtnQkFqQ0ZMO29CQUFDQSxpQkFBVUEsRUFBRUE7O2dDQWtDWkE7Z0JBQURBLGtCQUFDQTtZQUFEQSxDQWxDQSxBQWtDQ0EsSUFBQTtZQWxDRCxxQ0FrQ0MsQ0FBQSIsImZpbGUiOiJ1c2Vycy91c2VyLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9ICAgICBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtIdHRwLCBSZXNwb25zZSxSZXF1ZXN0T3B0aW9ucywgSGVhZGVyc30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gICAgIGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiXHJcbmltcG9ydCB7TG9naW59IGZyb20gJy4vbG9naW4nXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcblxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xyXG5cdGNvbnN0cnVjdG9yIChwcml2YXRlIGh0dHA6IEh0dHApe1x0fVxyXG5cclxuXHRwcml2YXRlIF91c2VyVXJsID0gJy9hcGlsb2dpbic7XHJcblx0cHJpdmF0ZSBfbG9naW51cmwgPSAnL2xvZ2luYXBpJztcclxuXHJcblx0Z2V0VXNlciAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLl91c2VyVXJsKVxyXG5cdFx0Lm1hcChyZXMgPT4gcmVzLmpzb24oKSlcclxuXHR9XHJcblxyXG5cdGxvZ2luKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcclxuXHRcdGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCAsIHBhc3N3b3JkIH0pO1xyXG5cdFx0bGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XHJcblx0XHRsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5fbG9naW51cmwsIGJvZHksIG9wdGlvbnMpXHJcblx0XHQubWFwKHJlcyA9PiByZXMuanNvbigpLmRhdGEpO1xyXG5cdFx0Y29uc29sZS5sb2coXCJkYXRhXCIpO1xyXG5cdH1cclxuXHJcblx0aW5zY3JpcHRpb24oZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcsIGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIHBob25lOiBzdHJpbmcsIG1vYmlsZTogc3RyaW5nKSB7XHJcblx0XHRsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHtsYXN0TmFtZSwgZmlyc3ROYW1lLCBlbWFpbCAsIHBhc3N3b3JkLCBwaG9uZSwgbW9iaWxlIH0pO1xyXG5cdFx0bGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XHJcblx0XHRsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5fdXNlclVybCwgYm9keSwgb3B0aW9ucylcclxuXHRcdC5tYXAocmVzID0+IHJlcy5qc29uKCkuZGF0YSlcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgRXJyb3IoZXJyb3IgOiBSZXNwb25zZSkge1xyXG5cdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8J2Vycm9yJyk7XHJcblx0fVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
