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
var AuthService_1 = require("app/auth/AuthService");
var LoginComponent = (function () {
    function LoginComponent(authService) {
        this.authService = authService;
        this.message = "";
    }
    LoginComponent.prototype.login = function (username, password) {
        console.log("login");
        this.message = "";
        if (!this.authService.login(username, password)) {
            this.message = "Login incorrect!";
            console.log(this.message);
            setTimeout(function () {
                this.message = "";
            }.bind(this), 2500);
        }
        return false;
    };
    LoginComponent.prototype.logout = function () {
        this.authService.logout();
        return false;
    };
    LoginComponent = __decorate([
        angular2_1.Component({
            selector: 'login',
            providers: [AuthService_1.AuthService]
        }),
        angular2_1.View({
            directives: [angular2_1.NgIf],
            template: "\n\n  <form class=\"form-inline\" *ng-if=\"!authService.getUser()\">\n    <h4> Login form </h4>\n\n    <div class=\"\"form-group>\n        <label for=\"username\">User:</label>\n        <input class=\"form-control\" name=\"username\" #username>\n    </div>\n\n    <div class=\"\"form-group>\n        <label for=\"password\">Password:</label>\n        <input class=\"form-control\" name=\"password\" #password>\n    </div>\n\n    <a class=\"btn btn-default\" (click)=\"login(username.value, password.value)\">Submit</a>\n\n  </form>\n\n  <div class=\"well\"  *ng-if=\"authService.getUser()\">\n        Logged in as <b> {{authService.getUser() }} </b>\n        <a href (click)=\"logout()\">Log out</a>\n  </div>\n\n  <div clas=\"alert alert-danger\" role=\"alert\" *ng-if=\"message\">\n        {{message}}\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof AuthService_1.AuthService !== 'undefined' && AuthService_1.AuthService) === 'function' && _a) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a;
})();
exports.LoginComponent = LoginComponent;
angular2_1.bootstrap(LoginComponent);
