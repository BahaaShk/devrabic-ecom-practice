import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../../utils/context";

const ProductCard = ({ product }) => {
  const { name, description, wasPrice, price, imageURL } = product;
  const { user } = useContext(MainContext);
  const navigate = useNavigate();

  const redirectToLogin = () => {
    navigate("/authenticate");
  };

  const addToCart = () => {};

  return (
    <div className="product-card">
      <div className="product-card__content">
        <img
          src={imageURL}
          alt={name}
          className="product-card__content__image"
        />
        <span className="product-card__content__title">{name}</span>
        <div className="product-card__content__price">
          {price}
          <span className="product-card__content__price__slash">
            {wasPrice}
          </span>
        </div>
        <span className="product-card__content__description">
          {description}
        </span>
      </div>
      <button
        onClick={user ? addToCart : redirectToLogin}
        className="product-card__btn"
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
