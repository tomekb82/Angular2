/// <reference path="../../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, NgIf,Injector} from "angular2/angular2";

import {RouteParams, CanActivate} from 'angular2/router';
import {AuthService} from "app/auth/AuthService";

@CanActivate(
    (nextInstr, currInstr) => {
        let injector = Injector.resolveAndCreate([AuthService]);
        let authService: AuthService = injector.get(AuthService);
        console.log('nextInstr', nextInstr);
        console.log('currInstr', currInstr);
        return authService.isLogged();
    }
)
@Component({
    selector: 'protected',
    providers: [AuthService]
})
@View({
    template: `
        <h1>Protected</h1>

  `
})

export class ProtectedComponent{

}

bootstrap(ProtectedComponent);