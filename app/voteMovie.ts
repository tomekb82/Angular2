/// <reference path="../typings/angular2/angular2.d.ts" />
import {
    Component,
    View,
    bootstrap
} from "angular2/angular2";
import {Movie} from "app/model/Movie"

@Component({
    selector: 'vote-movie'
})
@View({
    template: `
        <article>
            <div class="votes">{{movie.votes}}</div>
            <div class="main">
                <h2>
                    <a href="{{movie.link}}">{{movie.title}}</a>
                </h2>
                <ul>
                    <li><a href (click)='movie.voteUp()'>upvote</a></li>
                    <li><a href (click)='movie.voteDown()'>downvote</a></li>
                </ul>
            </div>
        </article>
    `
})
export class VoteMovie {
    movie: Movie;

    constructor(){
        this.movie = new Movie("ee", "dd");
    }

}
bootstrap(VoteMovie);


