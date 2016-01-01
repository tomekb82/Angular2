/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, bootstrap, View} from "angular2/angular2";
import {formDirectives, FormBuilder, ControlGroup} from "angular2/angular2";

@Component({
    selector: 'simple-form'
})
@View({
    directives: [formDirectives],
    template: `
  <div>
    <h2>Simple form: Book store</h2>
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
export class SimpleForm {
    onSubmit(value) {
        console.log('SimpleForm: you submitted value: ', value);
    }
}
bootstrap(SimpleForm);


@Component({
    selector: 'builder-form',
    viewInjector: [FormBuilder]
})
@View({
    directives: [formDirectives],
    template: `
  <div>
    <h2>Form Builder: Book store</h2>
    <form [ng-form-model]="myForm"
          (submit)="onSubmit(myForm.value)">

      <div class="form-group">
        <label for="idInput">ID</label>
        <input type="text"
               class="form-control"
               id="idInput"
               placeholder="ID"
               [ng-form-control]="myForm.controls['id']">
      </div>
      <div class="form-group">
        <label for="nameInput">Name - </label>
        <input type="text"
               class="form-control"
               id="nameInput"
               placeholder="Name"
               [ng-form-control]="myForm.controls['name']">
      </div>

      <button type="submit" class="btn btn-default">Submit</button>
    </form>
  </div>
  `
})
export class BuilderForm {
    myForm: ControlGroup;

    constructor(fb: FormBuilder) {
        this.myForm = fb.group({
            "id": [""],
            "name": [""]
        });
    }

    onSubmit(value) {
        console.log('BuilderForm: you submitted value: ', value);
    }
}
bootstrap(BuilderForm);