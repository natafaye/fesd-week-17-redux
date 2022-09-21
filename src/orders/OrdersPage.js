import React from 'react'
import { useSelector } from 'react-redux'
import OrderItem from './OrderItem'

export default function OrdersPage() {
  const orderList = useSelector(state => state.orders.orderList)
  
  return (
    <div className="row">
      <div className="col">
        <ul className="list-group">
          {orderList.map(order => (
            <OrderItem key={order.id} order={order} />
          ))}
        </ul>
      </div>
    </div>
  )
}
