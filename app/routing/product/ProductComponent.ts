/// <reference path="../../../typings/angular2/angular2.d.ts" />

import {Component, View, provide, bootstrap} from "angular2/angular2";

import {RouteConfig,  ROUTER_DIRECTIVES, ROUTER_PROVIDERS,
    LocationStrategy, HashLocationStrategy} from 'angular2/router';

@Component({
    selector: 'productComp'
})
@View({
    directives: [ROUTER_DIRECTIVES],
    template: `
  <h1> Product! </h1>

  <div class="page-header">
        <div class="container">
           <!-- <div class="navLinks">
                <a [router-link]="['/Main']">Main</a>
                <a [router-link]="['/Interest']">Interest</a>
                <a [router-link]="['/Sportify']">Sportify</a>
            </div>-->
        </div>
    </div>
    <div class="content">
        <div class="container">

     <!--   <router-outlet></router-outlet>-->
        </div>
    </div>
  `
})
//@RouteConfig([
   // {path: '/',        redirectTo: "/main"},
  //  {path: '/', component: MainComponent, as: 'Main'  },
  //  {path: '/main', component: MainComponent, as: 'Main'  },
  //  {path: '/interest', component: InterestComponent, as: 'Interest'  },
  //  {path: '/sportify', component: SportifyComponent, as: 'Sportify'  }
//])
export class ProductComponent{

}
bootstrap(ProductComponent, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);


@Component({
    selector: 'main'
})
@View({
    template: `
  <h1> main! </h1>
  `
})

export class MainComponent{

}

@Component({
    selector: 'interest'
})
@View({
    template: `
  <h1> interest! </h1>
  `
})

export class InterestComponent{

}

@Component({
    selector: 'sportify'
})
@View({
    template: `
  <h1> sportify! </h1>
  `
})

export class SportifyComponent{

}