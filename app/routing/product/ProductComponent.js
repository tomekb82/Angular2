/// <reference path="../../../typings/angular2/angular2.d.ts" />
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
var ProductComponent = (function () {
    function ProductComponent() {
    }
    ProductComponent = __decorate([
        angular2_1.Component({
            selector: 'productComp'
        }),
        angular2_1.View({
            directives: [router_1.ROUTER_DIRECTIVES],
            template: "\n  <h1> Product! </h1>\n\n  <div class=\"page-header\">\n        <div class=\"container\">\n           <!-- <div class=\"navLinks\">\n                <a [router-link]=\"['/Main']\">Main</a>\n                <a [router-link]=\"['/Interest']\">Interest</a>\n                <a [router-link]=\"['/Sportify']\">Sportify</a>\n            </div>-->\n        </div>\n    </div>\n    <div class=\"content\">\n        <div class=\"container\">\n\n     <!--   <router-outlet></router-outlet>-->\n        </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], ProductComponent);
    return ProductComponent;
})();
exports.ProductComponent = ProductComponent;
angular2_1.bootstrap(ProductComponent, [router_1.ROUTER_PROVIDERS, angular2_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })]);
var MainComponent = (function () {
    function MainComponent() {
    }
    MainComponent = __decorate([
        angular2_1.Component({
            selector: 'main'
        }),
        angular2_1.View({
            template: "\n  <h1> main! </h1>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], MainComponent);
    return MainComponent;
})();
exports.MainComponent = MainComponent;
var InterestComponent = (function () {
    function InterestComponent() {
    }
    InterestComponent = __decorate([
        angular2_1.Component({
            selector: 'interest'
        }),
        angular2_1.View({
            template: "\n  <h1> interest! </h1>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], InterestComponent);
    return InterestComponent;
})();
exports.InterestComponent = InterestComponent;
var SportifyComponent = (function () {
    function SportifyComponent() {
    }
    SportifyComponent = __decorate([
        angular2_1.Component({
            selector: 'sportify'
        }),
        angular2_1.View({
            template: "\n  <h1> sportify! </h1>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], SportifyComponent);
    return SportifyComponent;
})();
exports.SportifyComponent = SportifyComponent;
