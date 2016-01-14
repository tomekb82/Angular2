/// <reference path="../../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, NgIf} from "angular2/angular2";

import {RouteParams} from 'angular2/router';
import {AuthService} from "app/auth/AuthService";

@Component({
    selector: 'login',
    providers: [AuthService]
})
@View({
    directives: [NgIf],
    template: `

  <form class="form-inline" *ng-if="!authService.getUser()">
    <h4> Login form </h4>

    <div class=""form-group>
        <label for="username">User:</label>
        <input class="form-control" name="username" #username>
    </div>

    <div class=""form-group>
        <label for="password">Password:</label>
        <input class="form-control" name="password" #password>
    </div>

    <a class="btn btn-default" (click)="login(username.value, password.value)">Submit</a>

  </form>

  <div class="well"  *ng-if="authService.getUser()">
        Logged in as <b> {{authService.getUser() }} </b>
        <a href (click)="logout()">Log out</a>
  </div>

  <div clas="alert alert-danger" role="alert" *ng-if="message">
        {{message}}
  </div>
  `
})

export class LoginComponent{

    message: string;

    constructor(public authService: AuthService){
        this.message = "";
    }

    login(username: string, password: string): boolean {
        console.log("login");
        this.message = "";
        if(!this.authService.login(username,password)){
            this.message = "Login incorrect!";
            console.log(this.message);
            setTimeout(function(){
                this.message = "";
            }.bind(this), 2500);
        }
        return false;
    }

    logout(): boolean{
        this.authService.logout();
        return false;
    }

}

bootstrap(LoginComponent);