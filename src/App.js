import React, { useEffect } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Route, Routes, Link } from 'react-router-dom'
import LoginPage from './users/LoginPage'
import OrdersPage from './orders/OrdersPage'
import ProductPage from './products/ProductPage'
import ShoppingPage from './products/ShoppingPage'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrders } from './orders/orderSlice'

export default function App() {
  const loggedInUsername = useSelector(state => state.users.userList.find(user => user.id === state.users.loggedInUserId).name)
  const numUserOrders = useSelector(state => state.orders.orderList.filter(order => order.userId === state.users.loggedInUserId).length)
  const loading = useSelector(state => state.orders.loading)
  const errorMessage = useSelector(state => state.orders.errorMessage)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchOrders())
    dispatch(fetchProducts())
  })

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <div className="container">
          <Navbar.Brand href="#home">Chairs R Us</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Shopping</Nav.Link>
            <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
          <span className="navbar-text">{ loggedInUsername } | { numUserOrders } orders</span>
        </div>
      </Navbar>
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<ShoppingPage />} />
          <Route path="/products/:productId" element={<ProductPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </>
  )
}
