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
var AuthService = (function () {
    function AuthService() {
    }
    AuthService.prototype.login = function (user, password) {
        console.log("login srv");
        if (user === "user" && password === "password") {
            localStorage.setItem("username", user);
            return true;
        }
        return false;
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem("username");
    };
    AuthService.prototype.getUser = function () {
        console.log("g srvetUser");
        return localStorage.getItem("username");
    };
    AuthService.prototype.isLogged = function () {
        return this.getUser !== null;
    };
    AuthService = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AuthService);
    return AuthService;
})();
exports.AuthService = AuthService;
exports.AUTH_PROVIDERS = [
    angular2_1.provide(AuthService, { useClass: AuthService })
];
