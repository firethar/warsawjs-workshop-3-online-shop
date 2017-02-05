const URL = 'http://warsawjs.shop.dev:3000/products';

export default class ProductService {
    constructor (httpService) {
        this.httpService = httpService;
    }
    fetchProducts() {
        return this.httpService.$get(URL);
    }
}