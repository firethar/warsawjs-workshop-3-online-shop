const TEMPLATE = `
<div class="col-sm-6 col-md-4">
    <div class="thumbnail">
      <img ng-src="{{$ctrl.productData.image}}" alt="...">
      <div class="caption">
        <h3>{{$ctrl.productData.name}}</h3>
        <p>{{$ctrl.productData.description}}</p>
        <p><a href="#" class="btn btn-primary" role="button" ng-click="$ctrl.addProductToCart()">Add to cart</a></p>
      </div>
    </div>
</div>
`;
export default class ProductComponent {
    constructor() {
        //console.log("Hi!")
        this.bindings = {
            "productData" : "="
        };
        this.controller = ProductController;
    }
    template() {
        return TEMPLATE;
    }
}

class ProductController {
    constructor(cartService) {
        this.cartService = cartService;
    }
    $onInit() {
        //console.log(this.productData);
    }
    addProductToCart() {
        //console.log(this.productData.name);
        this.cartService.addToCart(this.productData);
    }
}