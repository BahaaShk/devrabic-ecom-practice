import ProductCard from "../components/product-card/ProductCard";
import { products } from "../utils/products";
import { useContext } from "react";
import { MainContext } from "../utils/context";


function Store() {
  const {user, loading, filteredProducts} = useContext(MainContext)
  return loading ? (<div className="cart__message">Loading ...</div>) : user ? (  <div className="store">
      {filteredProducts.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>): (
    <div className="store">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}

export default Store;