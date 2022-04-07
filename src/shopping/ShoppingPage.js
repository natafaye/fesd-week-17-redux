import React from 'react'
import { Link } from 'react-router-dom'

function ShoppingPageGoodCard({ good }) {
    return (
        <div><Link to={ "/shopping/" + good.id }>{ good.name }</Link></div>
    )
}

export default function ShoppingPage({ shoppingGoods }) {
  return (
    <div>
        { shoppingGoods.map( good => <ShoppingPageGoodCard good={good} key={good.id}/>)}
    </div>
  )
}
