/// <reference path="../typings/angular2/angular2.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require("angular2/angular2");
var Product = (function () {
    function Product(id, name, image_url, department, price) {
        this.id = id;
        this.name = name;
        this.image_url = image_url;
        this.department = department;
        this.price = price;
    }
    return Product;
})();
var StoreNav = (function () {
    function StoreNav() {
    }
    StoreNav = __decorate([
        angular2_1.Component({
            selector: 'store-nav'
        }),
        angular2_1.View({
            template: "\n        <nav>\n            <ul>\n                <li><a href=\"/\">Home</a></li>\n                <li><a href=\"storeApp.html\">Product list</a></li>\n                <li><a href=\"voteApp.html\">Vote Book</a></li>\n                <li><a href=\"formApp.html\">Form Book</a></li>\n                <li><a href=\"httpApp.html\">Http</a></li>\n                <li>Help</li>\n             </ul>\n        </nav>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], StoreNav);
    return StoreNav;
})();
angular2_1.bootstrap(StoreNav);
var ProductImage = (function () {
    function ProductImage() {
    }
    ProductImage = __decorate([
        angular2_1.Component({
            selector: 'product-image',
            properties: ['image_url']
        }),
        angular2_1.View({
            template: "\n  <img class=\"product-image\" [src]=\"image_url\">\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], ProductImage);
    return ProductImage;
})();
var ProductDepartment = (function () {
    function ProductDepartment() {
    }
    ProductDepartment = __decorate([
        angular2_1.Component({
            selector: 'product-department',
            properties: ['department']
        }),
        angular2_1.View({
            directives: [angular2_1.NgFor, angular2_1.NgIf],
            template: "\n  <div class=\"product-department\">\n    <span *ng-for=\"#name of department; #i=index\">\n      <a href=\"#\">{{ name }}</a>\n      <span>{{i < (department.length-1) ? '>' : ''}}</span>\n    </span>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], ProductDepartment);
    return ProductDepartment;
})();
var PriceDisplay = (function () {
    function PriceDisplay() {
    }
    PriceDisplay = __decorate([
        angular2_1.Component({
            selector: 'price-display',
            properties: ['price']
        }),
        angular2_1.View({
            template: "\n  <div class=\"price-display\">${{ price }}</div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], PriceDisplay);
    return PriceDisplay;
})();
var ProductRow = (function () {
    function ProductRow() {
        this.click = new angular2_1.EventEmitter();
    }
    ProductRow.prototype.clicked = function () {
        this.click.next(this.product);
    };
    ProductRow = __decorate([
        angular2_1.Component({
            selector: 'product-row',
            properties: ['product'],
            events: ['click']
        }),
        angular2_1.View({
            directives: [ProductImage, ProductDepartment, PriceDisplay],
            template: "\n  <div class=\"product-row cf\" (click)=\"clicked()\">\n    <product-image [image_url]=\"product.image_url\"></product-image>\n    <div class=\"product-info\">\n      <div class=\"product-id\">ID: #{{ product.id }}</div>\n      <div class=\"product-name\">{{ product.name }}</div>\n      <product-department [department]=\"product.department\"></product-department>\n    </div>\n    <price-display [price]=\"product.price\"></price-display>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], ProductRow);
    return ProductRow;
})();
var ProductsList = (function () {
    function ProductsList() {
        this.click = new angular2_1.EventEmitter();
    }
    ProductsList.prototype.clicked = function (product) {
        this.click.next(product);
    };
    ProductsList = __decorate([
        angular2_1.Component({
            selector: 'products-list',
            properties: ['products'],
            events: ['click']
        }),
        angular2_1.View({
            directives: [angular2_1.NgFor, ProductRow],
            template: "\n  <div class=\"products-list\">\n    <product-row *ng-for=\"#product of products\" [product]=\"product\" (click)='clicked(product)'>\n    </product-row>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], ProductsList);
    return ProductsList;
})();
var StoreApp = (function () {
    function StoreApp() {
        this.products = [];
        this.products.push(new Product('104544-2', 'Nykee Running Shoes', 'https://climbinggearreviewsuk.files.wordpress.com/2013/05/the-north-face-anti-matter-jacket.jpg', ['Men', 'Shoes', 'Running Shoes'], 109.99));
        this.products.push(new Product('187611-0', 'South Face Jacket', 'https://climbinggearreviewsuk.files.wordpress.com/2013/05/the-north-face-anti-matter-jacket.jpg', ['Women', 'Apparel', 'Jackets & Vests'], 238.99));
        this.products.push(new Product('443102-9', 'Addeds Active Hat', 'http://i.ebayimg.com/00/s/NDI5WDUwMA==/z/bUYAAOxycmBSsRxU/$_35.JPG?set_id=2', ['Men', 'Accessories', 'Hats'], 29.99));
    }
    StoreApp.prototype.productClicked = function (product) {
        alert('Product clicked: ' + product.name);
    };
    StoreApp = __decorate([
        angular2_1.Component({
            selector: 'store-app'
        }),
        angular2_1.View({
            directives: [ProductsList],
            template: "\n  <div class=\"store-app\">\n    <products-list [products]=\"products\" (click)=\"productClicked($event)\">\n    </products-list>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], StoreApp);
    return StoreApp;
})();
angular2_1.bootstrap(StoreApp);
