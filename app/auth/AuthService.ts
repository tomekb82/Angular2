/// <reference path="../../typings/angular2/angular2.d.ts" />


import {Injectable, provide} from "angular2/angular2";

@Injectable()
export class AuthService {

    login(user:string, password:string): boolean {
        console.log("login srv");
        if(user === "user" && password ==="password"){
            localStorage.setItem("username", user);
            return true;
        }
        return false;
    }

    logout(){
        localStorage.removeItem("username");
    }

    getUser(){
        console.log("g srvetUser");
        return localStorage.getItem("username");
    }

    isLogged(){
        return this.getUser !== null;
    }
}

export var AUTH_PROVIDERS: Array<any> = [
  provide(AuthService, {useClass: AuthService})
];