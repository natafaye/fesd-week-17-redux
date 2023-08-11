import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { postOrder } from '../orders/orderSlice';

export default function ProductPage() {
  let { productId } = useParams();
  productId = parseInt(productId);

  const product = useSelector(state => state.products.productList.find( p => p.id === productId ))
  const loggedInUserId = useSelector(state => state.users.loggedInUserId);

  const dispatch = useDispatch();

  const onOrderButtonClick = () => {
    dispatch(postOrder({ productId: productId, userId: loggedInUserId }));
  }

  return (
    <div>
      <h2>{ product.name } - ${ product.price.toFixed(2) }</h2>
      <img src={product.image} className="w-50" alt={product.name}/>
      <p>{ product.description}</p>
      <button className="btn btn-success" onClick={ onOrderButtonClick }>Order</button>
    </div>
  )
}
