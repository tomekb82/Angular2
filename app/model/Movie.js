var Movie = (function () {
    function Movie(title, link) {
        this.title = title;
        this.link = link;
        this.votes = 0;
    }
    Movie.prototype.voteUp = function () {
        this.votes += 1;
        return false;
    };
    Movie.prototype.voteDown = function () {
        this.votes -= 1;
        return false;
    };
    return Movie;
})();
exports.Movie = Movie;
