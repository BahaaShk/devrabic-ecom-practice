import React from 'react'
import { RxTrash } from 'react-icons/rx'

const CartCard = ({product}) => {
  const {name, price , description, imageURL} = product
  const handleDelete = () => {
    
  }
  return (
  
      <div className='cart-card'>
        <img src={imageURL} alt={name} className='cart-card__image' />
        <span className='cart-card__title'>{name}</span>
        <span className='cart-card__description'>{description}</span>
        <p>{price}</p>
        <RxTrash onClick={handleDelete} className='cart-card__icon' />
      </div>
  
  )
}

export default CartCard