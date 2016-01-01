/// <reference path="../typings/angular2/angular2.d.ts" />

import {
    Component,
    View,
    NgFor,
    NgIf,
    EventEmitter,
    bootstrap
} from "angular2/angular2";

class Product {
    id: string;
    name: string;
    image_url: string;
    department: Array<string>;
    price: number;

    constructor(id:string, name:string, image_url:string, department: Array<string>, price: number) {
        this.id = id;
        this.name = name;
        this.image_url = image_url;
        this.department = department;
        this.price = price;
    }
}

@Component({
    selector: 'store-nav'
})
@View({
    template: `
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="storeApp.html">Product list</a></li>
                <li><a href="voteApp.html">Vote Book</a></li>
                <li><a href="formApp.html">Form Book</a></li>
                <li>Help</li>
             </ul>
        </nav>
    `
})
class StoreNav {

}
bootstrap(StoreNav);

@Component({
    selector: 'product-image',
    properties: ['image_url']
})
@View({
    template: `
  <img class="product-image" [src]="image_url">
  `
})
class ProductImage {
    product: Product;
}


@Component({
    selector: 'product-department',
    properties: ['department']
})
@View({
    directives: [NgFor, NgIf],
    template: `
  <div class="product-department">
    <span *ng-for="#name of department; #i=index">
      <a href="#">{{ name }}</a>
      <span>{{i < (department.length-1) ? '>' : ''}}</span>
    </span>
  </div>
  `
})
class ProductDepartment {
    product: Product;
}

@Component({
    selector: 'price-display',
    properties: ['price']
})
@View({
    template: `
  <div class="price-display">\${{ price }}</div>
  `
})
class PriceDisplay {
    price: number;
}

@Component({
    selector: 'product-row',
    properties: ['product'],
    events: ['click']  // TODO: change on 'outputs'
})
@View({
    directives: [ProductImage, ProductDepartment, PriceDisplay],
    template: `
  <div class="product-row cf" (click)="clicked()">
    <product-image [image_url]="product.image_url"></product-image>
    <div class="product-info">
      <div class="product-id">ID: #{{ product.id }}</div>
      <div class="product-name">{{ product.name }}</div>
      <product-department [department]="product.department"></product-department>
    </div>
    <price-display [price]="product.price"></price-display>
  </div>
  `
})
class ProductRow {
    product: Product;
    click: EventEmitter;

    constructor() {
        this.click = new EventEmitter();
    }

    clicked() {
        this.click.next(this.product);
    }
}

@Component({
    selector: 'products-list',
    properties: ['products'],//, 'name'],
    events: ['click'] //TODO: // change on 'outputs'
})
@View({
    directives: [NgFor, ProductRow],
    template: `
  <div class="products-list">
    <product-row *ng-for="#product of products" [product]="product" (click)='clicked(product)'>
    </product-row>
  </div>
  `
})
class ProductsList {
    products: Array<Product>;
    click: EventEmitter;

    constructor() {
        this.click = new EventEmitter();
    }

    clicked(product) {
        this.click.next(product);
    }
}

@Component({
    selector: 'store-app'
})
@View({
    directives: [ProductsList],
    template: `
  <div class="store-app">
    <products-list [products]="products" (click)="productClicked($event)">
    </products-list>
  </div>
  `
})
class StoreApp {
    products: Array<Product>;

    constructor() {
        this.products = [];
        this.products.push(new Product(
            '104544-2', 'Nykee Running Shoes',
            'https://climbinggearreviewsuk.files.wordpress.com/2013/05/the-north-face-anti-matter-jacket.jpg',
            ['Men', 'Shoes', 'Running Shoes'],
            109.99
        ));
        this.products.push(new Product(
            '187611-0', 'South Face Jacket',
            'https://climbinggearreviewsuk.files.wordpress.com/2013/05/the-north-face-anti-matter-jacket.jpg',
            ['Women', 'Apparel', 'Jackets & Vests'],
            238.99
        ));
        this.products.push(new Product(
            '443102-9', 'Addeds Active Hat',
            'http://i.ebayimg.com/00/s/NDI5WDUwMA==/z/bUYAAOxycmBSsRxU/$_35.JPG?set_id=2',
            ['Men', 'Accessories', 'Hats'],
            29.99
        ));
    }

    productClicked(product) {
        alert('Product clicked: ' + product.name);
    }
}

bootstrap(StoreApp);