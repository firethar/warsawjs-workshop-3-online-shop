import loadAppModule from './modules/app-module.js';
import HeaderComponent from './components/header-component.js';
import CartComponent from './components/cart-component.js';
import ProductComponent from './components/product-component.js';
import ProductListComponent from './components/product-list-component.js';
import FooterComponent from './components/footer-component.js';
import HTTPService from './services/http-service.js';
import ProductService from './services/products-service.js';
import StorageService from './services/storage-service.js';
import CartService from './services/cart-service.js';

let shop = loadAppModule();
shop.component('headerComponent', new HeaderComponent());
shop.component('cartComponent', new CartComponent());
shop.component('productComponent', new ProductComponent());
shop.component('productListComponent', new ProductListComponent());
shop.component('footerComponent', new FooterComponent());

shop.factory('httpService', HTTPService);
shop.service('productService', ProductService);
shop.factory('storageService', StorageService);
shop.service('cartService', CartService);

angular.bootstrap(window.document, ['app']);