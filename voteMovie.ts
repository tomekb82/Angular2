/// <reference path="typings/angular2/angular2.d.ts" />
import {
    Component,
    View,
    bootstrap
} from "angular2/angular2";


@Component({
    selector: 'vote-movie'
})
@View({
    template: `
        <article>
            <div class="votes">{{votes}}</div>
            <div class="main">
                <h2>
                    <a href="{{link}}">{{title}}</a>
                </h2>
                <ul>
                    <li><a href (click)='voteUp()'>upvote</a></li>
                    <li><a href (click)='voteDown()'>downvote</a></li>
                </ul>
            </div>
        </article>
    `
})
export class VoteMovie {
    votes: number;
    title: string;
    link: string;

    constructor(){
        this.votes = 10;
        this.title = "Kleks";
        this.link = "www.e.e"
    }

    voteUp(){
        this.votes +=1;
        return false;
    }

    voteDown(){
        this.votes -=1;
        return false;
    }

}
bootstrap(VoteMovie);


