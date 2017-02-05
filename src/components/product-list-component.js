const TEMPLATE = `
<section>    
    <product-component ng-repeat="product in $ctrl.products" product-data="product"></product-component>
</section>
`;
export default class ProductListComponent {
    constructor() {
        this.controller = ProductListController;
    }
    template() {
        return TEMPLATE;
    }
}
class ProductListController {
    constructor(productService) {
        //console.log("Constructor", Date.now());

        productService.fetchProducts().then((response) => {
            this.products = response.data;
            //console.log(products);
        });
    }
    $onInit() {
        //console.log("Init", Date.now());
        this.products = [];
    }
}