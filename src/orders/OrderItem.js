import React from 'react'

export default function OrderItem({ order, productList, userList, onDelete }) {
  // Selecting data
  const userName = useSelector(state => state.users.userList.find(user => user.id === order.userId).name)

  const product = productList.find(product => product.id === order.productId);
  return (
    <li className="list-group-item">
      <button className="btn btn-danger me-2" onClick={() => onDelete(order.id)}>Delete</button>
      { userName } bought { product.name } for ${ product.price }
    </li>
  )
}
