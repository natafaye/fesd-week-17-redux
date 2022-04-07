import React from 'react'
import { useParams } from 'react-router-dom';

export default function ShoppingGoodPage({ shoppingGoods, onAddToCart }) {
  let { goodId } = useParams();
  goodId = parseInt(goodId);
  const good = shoppingGoods.find( g => g.id === goodId )

  const onAddButtonClick = () => {
    onAddToCart(goodId);
  }

  return (
    <div>
      <h2>{ good.name } - ${ good.price.toFixed(2) }</h2>
      <p>{ good.description}</p>
      <button className="btn btn-success" onClick={ onAddButtonClick }>Add to Cart</button>
    </div>
  )
}
