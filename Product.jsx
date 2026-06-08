import ProductData from "../ProductData";
import "./Products.css";

function Products() {
  const products = ProductData();

  return (
    <div className="products-container">

      <h1>Our Products</h1>

      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>

            <img
              src={product.image}
              alt={product.name}
            />

            <h3>{product.name}</h3>

            <p>{product.description}</p>

            <p>{product.price}</p>

            <p>{product.category}</p>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Products;