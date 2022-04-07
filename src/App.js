import React, { useState } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Route, Routes, Link } from 'react-router-dom'
import CartPage from './cart/CartPage'
import { SHOPPING_GOODS, CART_ITEMS } from './data'
import HomePage from './home/HomePage'
import ShoppingGoodPage from './shopping/ShoppingGoodPage'
import ShoppingPage from './shopping/ShoppingPage'


export default function App() {

  const [shoppingGoods, setShoppingGoods] = useState(SHOPPING_GOODS);
  const [cartItems, setCartItems] = useState(CART_ITEMS);

  const handleAddToCart = (goodId) => {
    // look through the cart, see if it's already in the shopping cart
    const item = cartItems.find( item => item.goodId === goodId )
    if(item) {
      setCartItems(currCartItems => {
        const currItem = currCartItems.find( i => i.goodId === goodId )
        const index = currCartItems.findIndex( i => i.goodId === goodId )

        const cartItemsCopy = [...currCartItems];
        const itemCopy = {...currItem, quantity: currItem.quantity + 1 }
        cartItemsCopy[index] = itemCopy;

        return cartItemsCopy;
      })
    }
    else {
      // make a new item
      // if it's not, then we need a new cart item, set to the quanitity 1, add it to the array of car items
    }
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <div className="container">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/shopping">Shopping</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
          </Nav>
        </div>
      </Navbar>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shopping" element={<ShoppingPage shoppingGoods={shoppingGoods} />} />
          <Route path="/shopping/:goodId" element={<ShoppingGoodPage shoppingGoods={shoppingGoods} onAddToCart={handleAddToCart} />} />
          <Route path="/cart" element={<CartPage shoppingGoods={shoppingGoods} cartItems={cartItems} />} />
        </Routes>
      </div>
    </>
  )
}
