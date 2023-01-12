import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'My first book',
    description: 'The first book I ever wrote'
  },
  {
    id: 'p2',
    price: 8,
    title: 'Doritos',
    description: 'I miss u so much since your just cost 7 reais the medium package'
  },
  {
    id: 'p3',
    price: 10,
    title: 'Pickle jar',
    description: 'A bunch of pickles'
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}

      </ul>
    </section>
  );
};

export default Products;
