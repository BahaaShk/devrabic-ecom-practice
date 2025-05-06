import ProductCard from "../components/product-card/ProductCard";
import { products } from "../utils/products";

function Store() {
  return (
    <div className="store">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}

export default Store;