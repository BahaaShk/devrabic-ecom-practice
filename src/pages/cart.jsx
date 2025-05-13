import { products } from "../utils/products";
import CartCard from "../components/cart-card/cartCard";
import React from "react";
import { useContext } from "react";
import { MainContext } from "../utils/context";

export default function Cart() {
  const { username, cartProducts, user, loading } = useContext(MainContext);

const calculateTotalPrice = () => {
  if(cartProducts){
    let totalPrice = 0;
    cartProducts.forEach((product)=> {
totalPrice += product.price
    })
    return totalPrice
  } else {
    return 0
  }
}

  return loading ? (
    <div className="cart__message">Loading ...</div>
  ) : !user ? (
    <div className="cart__message">Please login to view cart</div>
  ) : (
    <div className="cart">
      <div className="cart__products">
        {!cartProducts.length ? (
          <div className="cart__message cart__message--empty-cart">
            Please add products to your cart
          </div>
        ) : (
          cartProducts.map((product) => {
            return <CartCard product={product} key={product.id} />;
          })
        )}
      </div>
      <div className="cart__checkout">
        <h1>Checkout: </h1>
        <h2>Username: {username} </h2>
        <h2> Total : ${calculateTotalPrice()}</h2>
        {calculateTotalPrice() !== 0 &&
        <button className="primary">Pay</button> }
      </div>
    </div>
  );
}
