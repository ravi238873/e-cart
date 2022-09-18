import React, { useState } from 'react'
import Products from './jsonfiles/products.json'
import { Routes, Route } from 'react-router-dom'
import Product from './pages/Product'
import Cart from './pages/Cart'
import NavBar from './components/NavBar'



const App = () => {

  const [cartItems, setCartItems] = useState([]);


  const handleAddProduct = (product) => {

    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(cartItems.map((item) => item.id === product.id ?
        { ...ProductExist, quantity: ProductExist.quantity + 1 } : item))
    }

    else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

  }


  const handleRemoveProduct = (product) => {

    const ProductExist = cartItems.find((item) => item.id === product.id);

    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(cartItems.map((item) => item.id === product.id ? { ...ProductExist, quantity: ProductExist.quantity - 1 } : item))
    }

  }

  const handleCartClearance = () => {
    setCartItems([]);
  }


  return (

    <>
      <NavBar />

      <Routes>

        <Route exact path="/" element={<Product products={Products} handleAddProduct={handleAddProduct} />} />

        <Route path="cart" element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance} />} />

      </Routes>

    </>


  )
}

export default App