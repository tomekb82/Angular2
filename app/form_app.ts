/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, bootstrap, View} from "angular2/angular2";
import {formDirectives, FormBuilder, ControlGroup} from "angular2/angular2";

@Component({
    selector: 'form-app'
})
@View({
    directives: [formDirectives],
    template: `
  <div>
    <h2>Form: Book store</h2>
    <form #f="form"
          (submit)="onSubmit(f.value)">

      <div class="form-group">
        <label for="idInput">ID</label>
        <input type="text" 
               class="form-control" 
               id="idInput"
               placeholder="Book id"
               ng-control="id">
      </div>

      <button type="submit" class="btn btn-default">Submit</button>
    </form>
  </div>
  `
})
export class FormApp {
    onSubmit(value) {
        console.log('you submitted value: ', value);
    }
}
bootstrap(FormApp);