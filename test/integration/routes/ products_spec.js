import Product from '../../../src/models/product';


describe('Products Management', () => {
    let request;

    before(() => {
        return setupApp().then(app => {
            request = superTest(app)
        })
    });
    const defaultId = '56cb91bdc3464f14678934ca';
    const defaultProduct = {
        name: 'Default product',
        description: 'product description',
        price: 100
    };

    beforeEach(() => {
        const product = new Product(defaultProduct);
        console.log('product', product);
        product._id = defaultId;
        return Product.remove({})
            .then(() => product.save());
    });

    afterEach(() => Product.remove({}));

    const expectedProduct = {
        __v: 0,
        _id: defaultId,
        name: 'Default product',
        description: 'product description',
        price: 100
    };

    describe('GET /products', () => {
        it('should to return a list of products', done => {
            request
                .get('/products')
                .end((err, res) => {
                    expect(res.body).to.eql([expectedProduct]);
                    done(err);
                });
        });

        context('when an id is specified', done => {
           it('should to return 200 with one product', done => {
              request
                  .get(`/products/${defaultId}`)
                  .end((err, res) => {
                      expect(res.statusCode).to.eql(200);
                      expect(res.body).to.eql([expectedProduct]);
                      done(err);
                  });
           });
        });
    });
});