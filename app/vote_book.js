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
var VoteBook = (function () {
    function VoteBook() {
    }
    VoteBook = __decorate([
        angular2_1.Component({
            selector: 'vote-book',
            properties: ['book'],
        }),
        angular2_1.View({
            template: "\n        <article>\n            <div class=\"votes\">{{book.votes}}</div>\n            <div class=\"main\">\n                <h2>\n                    <a href=\"{{book.link}}\">{{book.title}}</a>\n                    <span>({{book.domain()}})</span>\n                </h2>\n                <ul>\n                    <li><a href (click)='book.voteUp()'>upvote</a></li>\n                    <li><a href (click)='book.voteDown()'>downvote</a></li>\n                </ul>\n            </div>\n        </article>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], VoteBook);
    return VoteBook;
})();
exports.VoteBook = VoteBook;
angular2_1.bootstrap(VoteBook);
