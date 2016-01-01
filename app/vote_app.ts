/// <reference path="../typings/angular2/angular2.d.ts" />

import {
    Component,
    View,
    NgFor,
    bootstrap
} from "angular2/angular2";


class Book {
    title: string;
    link: string;
    votes: number;

    constructor(title, link){
        this.title = title;
        this.link = link;
        this.votes = 0;
    }

    voteUp(){
        this.votes +=1;
        return false;
    }

    voteDown(){
        this.votes -=1;
        return false;
    }

    domain(){
        var link = this.link.split('//')[1];
        return link.split('/')[0];
    }
}


@Component({
    selector: 'vote-book',
    properties: ['book'], // to change after upgrade angular
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
class VoteBook {
    book: Book;

}
//bootstrap(VoteBook);


@Component({
    selector: 'vote'
})
@View({
    template: `
        <h2> Vote books </h2>
        <section class="new-link">
            <div class="control-group">
                <div><label for="title">Title</label></div>
                <div><input name="title" #newtitle></div>
            </div>
            <div class="control-group">
                <div><label for="link">Link</label></div>
                <div><input name="link" #newlink></div>
            </div>

            <button (click)="addBook(newtitle, newlink)">Submit</button>
        </section>

        <vote-book *ng-for="#book of books" [book]="book"></vote-book>
    `,
    directives: [NgFor, VoteBook]
})
class VoteApp {
    books: Array<Book>;

    constructor(){
        this.books = [
          new Book("aa", "http://www.onet.pl"),
          new Book("ff", "http://www.google.pl"),
          new Book("hh", "http://www.gazeta.pl")
    ];
    }

    addBook(title, link) {
        this.books.push(new Book(title.value, link.value));
        title.value = '';
        link.value = '';
    }

}
bootstrap(VoteApp);

///////////////////////////////////////////
@Component({
    selector: 'hello-world'
})
@View({
    directives: [NgFor],
    template: `
    <ul>
        <li *ng-for="#name of names"> Hello {{name}}</li>
    </ul>
    `
})
class HelloWorld {

    names: Array<string>;

    constructor(){
        this.names = ["ala", "ola", "kasia"];
    }
}
bootstrap(HelloWorld);

