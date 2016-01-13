/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, bootstrap, View} from "angular2/angular2";
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, AbstractControl, NgIf,Validators} from 'angular2/angular2';

@Component({
    selector: 'simple-form'
})
@View({
    directives: [FORM_DIRECTIVES],
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


function codeValidator(control) {
    if (control.value.length<1 || control.value.length>5){
        return {invalidCode: true};
    }
}

@Component({
    selector: 'builder-form',
    viewBindings: [FormBuilder]
})
@View({
    directives: [FORM_DIRECTIVES, NgIf],
    template: `
  <div>
    <h2>Form Builder: Book store</h2>
    <form [ng-form-model]="myForm"
          (submit)="onSubmit(myForm.value)">

      <div class="form-group" [class.has-error]="!id.valid && id.touched">
        <label for="idInput">ID - with explicit validation</label>
        <input type="text"
               class="form-control"
               id="idInput"
               placeholder="ID"
               [ng-form-control]="id">
         <div *ng-if="!id.valid" class="bg-warning">ID is invalid</div>
         <div *ng-if="id.hasError('required')" class="bg-warning">ID is required</div>
      </div>
      <div class="form-group" [class.has-error]="!myForm.find('name').valid && myForm.find('name').touched">
        <label for="nameInput">Name - using components(Controls) references export</label>
        <input type="text"
               class="form-control"
               id="nameInput"
               placeholder="Name"
               #name = "form"
               [ng-form-control]="myForm.controls['name']">
         <div *ng-if="!name.control.valid" class="bg-warning">name is invalid</div>
         <div *ng-if="name.control.hasError('required')" class="bg-warning">name is required</div>
      </div>
      <div class="form-group" [class.has-error]="!code.valid && code.touched">
        <label for="codeInput">Code - custom validation</label>
        <input type="text"
               class="form-control"
               id="codeInput"
               placeholder="Code"
               [ng-form-control]="code">
         <div *ng-if="!code.valid" class="bg-warning">Code is invalid</div>
         <div *ng-if="code.hasError('required')" class="bg-warning">Code is required</div>
         <div *ng-if="code.hasError('invalidCode')" class="bg-warning">Code must begin have max.1-5 characters</div>
      </div>

      <div *ng-if="!myForm.valid" class="bg-warning">Form is invalid</div>

      <button type="submit" class="btn btn-default">Submit</button>
    </form>
  </div>
  `
})

export class BuilderForm {
    myForm: ControlGroup;
    id: AbstractControl;
    code: AbstractControl;

    constructor(fb: FormBuilder) {
        this.myForm = fb.group({
            "id": ["", Validators.required],
            "name": ["", Validators.required],
            "code": ["", Validators.compose([Validators.required, codeValidator])]
        });
        this.id = this.myForm.controls['id'];
        this.code = this.myForm.controls['code'];

        this.myForm.valueChanges.observer({ // TODO: new implementation using 'subscribe' function
            next: (value) => {
                console.log("form changed to: ", value);
            }
        })
    }
    
    onSubmit(value) {
        console.log('BuilderForm: you submitted value: ', value);
    }
}
bootstrap(BuilderForm);