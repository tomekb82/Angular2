/// <reference path="../typings/angular2/angular2.d.ts" />
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
var Book = (function () {
    function Book(title, link) {
        this.title = title;
        this.link = link;
        this.votes = 0;
    }
    Book.prototype.voteUp = function () {
        this.votes += 1;
        return false;
    };
    Book.prototype.voteDown = function () {
        this.votes -= 1;
        return false;
    };
    Book.prototype.domain = function () {
        var link = this.link.split('//')[1];
        return link.split('/')[0];
    };
    return Book;
})();
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
angular2_1.bootstrap(VoteBook);
var VoteApp = (function () {
    function VoteApp() {
        this.books = [
            new Book("aa", "http://www.onet.pl"),
            new Book("ff", "http://www.google.pl"),
            new Book("hh", "http://www.gazeta.pl")
        ];
    }
    VoteApp.prototype.addBook = function (title, link) {
        this.books.push(new Book(title.value, link.value));
        title.value = '';
        link.value = '';
    };
    VoteApp = __decorate([
        angular2_1.Component({
            selector: 'vote'
        }),
        angular2_1.View({
            template: "\n        <h2> Vote books </h2>\n        <section class=\"new-link\">\n            <div class=\"control-group\">\n                <div><label for=\"title\">Title</label></div>\n                <div><input name=\"title\" #newtitle></div>\n            </div>\n            <div class=\"control-group\">\n                <div><label for=\"link\">Link</label></div>\n                <div><input name=\"link\" #newlink></div>\n            </div>\n\n            <button (click)=\"addBook(newtitle, newlink)\">Submit</button>\n        </section>\n\n        <vote-book *ng-for=\"#book of books\" [book]=\"book\"></vote-book>\n    ",
            directives: [angular2_1.NgFor, VoteBook]
        }), 
        __metadata('design:paramtypes', [])
    ], VoteApp);
    return VoteApp;
})();
angular2_1.bootstrap(VoteApp);
