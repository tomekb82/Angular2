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
/// <reference path="typings/angular2/angular2.d.ts" />
var angular2_1 = require("angular2/angular2");
var VoteApp = (function () {
    function VoteApp() {
    }
    VoteApp = __decorate([
        angular2_1.Component({
            selector: 'vote'
        }),
        angular2_1.View({
            directives: [angular2_1.NgFor],
            template: "\n        <section class=\"new-link\">\n            <div class=\"control-group\">\n                <div><label for=\"title\">Movie title</label></div>\n                <div><input name=\"title\"></div>\n            </div>\n            <div class=\"control-group\">\n                <div><label for=\"link\">Link</label></div>\n                <div><input name=\"link\"></div>\n            </div>\n\n            <button>Submit</button>\n        </section>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], VoteApp);
    return VoteApp;
})();
angular2_1.bootstrap(VoteApp);
