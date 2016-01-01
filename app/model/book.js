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
    return Book;
})();
exports.Book = Book;
