const TEMPLATE = `
<li class="dropdown">
  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Koszyk {{$ctrl.cartService.cartCount()}}<span class="caret"></span></a>
  <ul class="dropdown-menu">
    <li ng-repeat="item in $ctrl.cartService.getCart() track by $index">{{item.name}}<span class=""></span></li>
  </ul>
</li>
`;
export default class CartComponent {
    constructor() {
        this.controller = CartController;
        //console.log("cart component")
    }
    template() {
        return TEMPLATE;
    }
}
class CartController {
    constructor(cartService) {
        this.cartService = cartService;
    }
    $onInit() {
        //console.log('cartController');
    }
}