/// <reference path="../typings/angular2/angular2.d.ts" />
import {
    Component,
    NgFor,
    View,
    bootstrap
} from "angular2/angular2";


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

