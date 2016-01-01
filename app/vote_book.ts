/// <reference path="../typings/angular2/angular2.d.ts" />
import {
    Component,
    View,
    bootstrap
} from "angular2/angular2";
import {Book} from "model/book";

@Component({
    selector: 'vote-book',
    properties/*inputs:*/: ['book'], // to change after upgrade angular
})
@View({
    template: `
        <article>
            <div class="votes">{{book.votes}}</div>
            <div class="main">
                <h2>
                    <a href="{{book.link}}">{{book.title}}</a>
                    <span>({{book.domain()}})</span>
                </h2>
                <ul>
                    <li><a href (click)='book.voteUp()'>upvote</a></li>
                    <li><a href (click)='book.voteDown()'>downvote</a></li>
                </ul>
            </div>
        </article>
    `
})
export class VoteBook {
    book: Book;

}
bootstrap(VoteBook);


