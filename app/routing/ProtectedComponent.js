/// <reference path="../../typings/angular2/angular2.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require("angular2/angular2");
var router_1 = require('angular2/router');
var AuthService_1 = require("app/auth/AuthService");
var ProtectedComponent = (function () {
    function ProtectedComponent() {
    }
    ProtectedComponent = __decorate([
        router_1.CanActivate(function (nextInstr, currInstr) {
            var injector = angular2_1.Injector.resolveAndCreate([AuthService_1.AuthService]);
            var authService = injector.get(AuthService_1.AuthService);
            console.log('nextInstr', nextInstr);
            console.log('currInstr', currInstr);
            return authService.isLogged();
        }),
        angular2_1.Component({
            selector: 'protected',
            providers: [AuthService_1.AuthService]
        }),
        angular2_1.View({
            template: "\n        <h1>Protected</h1>\n\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], ProtectedComponent);
    return ProtectedComponent;
})();
exports.ProtectedComponent = ProtectedComponent;
angular2_1.bootstrap(ProtectedComponent);
