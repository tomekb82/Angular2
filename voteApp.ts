/// <reference path="typings/angular2/angular2.d.ts" />
import {
    Component,
    NgFor,
    View,
    bootstrap
} from "angular2/angular2";


@Component({
    selector: 'vote'
})
@View({
    directives: [NgFor],
    template: `
        <section class="new-link">
            <div class="control-group">
                <div><label for="title">Movie title</label></div>
                <div><input name="title" #newtitle></div>
            </div>
            <div class="control-group">
                <div><label for="link">Link</label></div>
                <div><input name="link" #newlink></div>
            </div>

            <button (click)="addVote(newtitle, newlink)">Submit</button>
        </section>
    `
})
class VoteApp {
    addVote(title,link){
        console.log("Adding vote, title=" + title.value + ", link=" + link.value);
    }

}
bootstrap(VoteApp);


