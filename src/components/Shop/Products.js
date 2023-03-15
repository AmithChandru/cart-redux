import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {

  const productItems = [
    {
      id: 'p1',
      price: 10,
      title: 'First item',
      description: 'The very first item'
    },
    {
      id: 'p2',
      price: 5,
      title: 'Second item',
      description: 'The very second item'
    },
    {
      id: 'p3',
      price: 15,
      title: 'Third item',
      description: 'The very third item'
    },
    {
      id: 'p4',
      price: 20,
      title: 'Fourth item',
      description: 'The very fourth item'
    },
  ]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productItems.map((item) => {
          return (
            <ProductItem title={item.title} id={item.id} price={item.price} description={item.description} />
          )
        })}
      </ul>
    </section>
  );
};

export default Products;
