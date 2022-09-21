import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Route, Routes, Link } from 'react-router-dom'
import LoginPage from './users/LoginPage'
import OrdersPage from './orders/OrdersPage'
import ProductPage from './products/ProductPage'
import ShoppingPage from './products/ShoppingPage'
import { useSelector } from 'react-redux'

export default function App() {
  const loggedInUser = useSelector(state => state.users.userList.find(user => user.id === state.users.loggedInUserId))
  const numUserOrders = useSelector(state => state.orders.orderList.filter(order => order.userId === state.users.loggedInUserId).length)

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
          <span className="navbar-text">{ loggedInUser.name } | { numUserOrders } orders</span>
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
