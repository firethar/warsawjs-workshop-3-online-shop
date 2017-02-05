const TEMPLATE = `
<footer class="row">
    <section class="col-md-12">
        <p>&copy; Copyright WarsawJS</p>
    </section>
</footer>
`;
export default class FooterComponent {
    constructor(){
        console.log("footer!")
    }
    template() {
        return TEMPLATE;
    }
}