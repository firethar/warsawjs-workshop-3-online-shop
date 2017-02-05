const KEY = "eoiwjqpioejw";

export default class CartService {
    constructor(storageService) {
        this.storage = storageService;
        this.cart = storageService.read(KEY) || [];
    }
    addToCart(product) {
        this.cart.push(product);
        this.storage.save(KEY, this.cart);
    }
    getCart() {
        return this.cart;
    }
    cartCount() {
        return this.cart.length;
    }
    removeFromCart(product) {
        this.cart.splice(product);
    }
}