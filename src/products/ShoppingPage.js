import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { createOrder } from '../orders/orderSlice';

function ProductCard({ product }) {
  const loggedInUserId = useSelector(state => state.users.loggedInUserId)
  const dispatch = useDispatch();

  const onOrderButtonClick = () => {
    dispatch(createOrder({ productId: product.id, userId: loggedInUserId })) // telling redux to update the data
  }

  return (
    <div className="col">
      <div className="card">
        <img className="card-img-top" src={product.image} alt={product.name}/>
        <div className="card-body">
          <h5 className="card-title"><Link to={"/products/" + product.id}>{product.name}</Link></h5>
          <button className="btn btn-success" onClick={onOrderButtonClick}>Order</button>
        </div>
      </div>
    </div>
  )
}

export default function ShoppingPage() {
  const productList = useSelector(state => state.products.productList)

  return (
    <div className="row">
      {productList.map(product => <ProductCard product={product} key={product.id} /> )}
    </div>
  )
}
