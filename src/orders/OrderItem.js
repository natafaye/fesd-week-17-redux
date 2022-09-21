import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteOrder } from './orderSlice';

export default function OrderItem({ order }) {
  const userName = useSelector(state => state.users.userList.find(user => user.id === order.userId).name)
  const product = useSelector(state => state.products.productList.find(product => product.id === order.productId));
  const dispatch = useDispatch();

  return (
    <li className="list-group-item">
      <button className="btn btn-danger me-2" onClick={() => dispatch(deleteOrder(order.id))}>Delete</button>
      { userName } bought { product.name } for ${ product.price }
    </li>
  )
}
