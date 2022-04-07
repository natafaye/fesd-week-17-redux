import React from 'react'

function CartPageItemRow({ item, shoppingGoods }) {
  const good = shoppingGoods.find( g => g.id === item.goodId )
  return (
    <li className="list-group-item">{good.name} - {item.quantity}</li>
  )
}

export default function CartPage({ shoppingGoods, cartItems }) {
  return (
    <>
      <h2>Shopping Cart</h2>
      <ul className="list-group">
        {cartItems.map(item => <CartPageItemRow item={item} shoppingGoods={shoppingGoods} key={item.id} />)}
      </ul>
    </>
  )
}
