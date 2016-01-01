/// <reference path="../typings/angular2/angular2.d.ts" />
import {
    Component,
    View,
    NgFor,
    bootstrap
} from "angular2/angular2";
import {VoteBook} from "vote_book";
import {Book} from "model/book";

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


