import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCT = [
  {
    id: "p1",
    price: 1190,
    title: "MacBook Pro",
    description:
      "Our most advanced Neural Engine for up to 11x faster machine learning. And up to 20 hours of battery life - the longest ever in a Mac, it's our most popular pro notebook on a whole new level.",
  },
  {
    id: "p2",
    price: 10,
    title: "Phone Case",
    description: "A cell phone case is the protective cover for a Smartphone and will prevent it from damages by different types of mishaps such as scratches, minor accidents and water spills.",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((product) => (
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
