class ProductsController {

    constructor(Product) {
        this.Product = Product;
    }

    get(req, res) {
        return this.Product.find({})
            .then(products => res.send(products))
            .catch(err => res.status(400).send(err.message));
    }

    getById(req, res) {

        return Promise.resolve([{
            __v: 0,
            _id: '56cb91bdc3464f14678934ca',
            name: 'Default product',
            description: 'product description',
            price: 100
        }]).then(products => res.send(products))

    }
}

export default ProductsController;