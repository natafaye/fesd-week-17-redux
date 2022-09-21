import React, { useState } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Route, Routes, Link } from 'react-router-dom'
import LoginPage from './users/LoginPage'
import { ORDERS, PRODUCTS, USERS } from './data'
import OrdersPage from './orders/OrdersPage'
import ProductPage from './products/ProductPage'
import ShoppingPage from './products/ShoppingPage'

export default function App() {
  const [productList, setProductList] = useState(PRODUCTS);

  

  const createProduct = (newProductData) => {
    setProductList(productList.concat({ ...newProductData, id: productList[productList.length - 1].id + 1 }))
  }

  const loggedInUser = userList.find(user => user.id === loggedInUserId)

  const numUserOrders = orderList.filter(order => order.userId === loggedInUserId).length

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
          <Route path="/" element={<ShoppingPage productList={productList} />} />
          <Route path="/products/:productId" element={<ProductPage productList={productList} onOrder={createOrder} />} />
          <Route path="/orders" element={<OrdersPage orderList={orderList} productList={productList} onDelete={deleteOrder}/>} />
          <Route path="/login" element={<LoginPage/>} />
        </Routes>
      </div>
    </>
  )
}
