import { products } from "../utils/products";
import CartCard from "../components/cart-card/cartCard";
import React from "react";

export default function Cart() {
  return (
    <div className="cart">
      <div className="cart__products">
        {
          products.map((product) => {
          return <CartCard product={product} key={product.id} />
          })
        }
      </div>
      <div className="cart__checkout">
        <h1>Checkout</h1>
        <h2>Username: </h2>
        <h2> Total:$999</h2>
        <button>Pay</button>
      </div>
    </div>
  );
}
