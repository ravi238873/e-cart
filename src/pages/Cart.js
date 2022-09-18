import React from 'react'
import "../css/Cart.css"


const Cart = ({ cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance }) => {


    const totalPrice = cartItems.reduce(
        (price, item) => price + item.quantity * item.price, 0
    )

    return (
        <div className="cart-items">
            <h2 className="cart-items-header">Cart Items</h2>
            <div className="clear-cart">
                {
                    cartItems.length >= 1 && (
                        <button className="clear-cart-button" onClick={handleCartClearance}>Clear Cart</button>
                    )
                }

            </div>


            {cartItems.length === 0 && <div className="cart-items-empty" >No items added in cart</div>}

            <div>
                {cartItems.map((item) => {
                    return (

                        <div key={item.id} className="cart-item-list">
                            <img src={item.thumbnail} alt={item.name} className="cart-items-image" />
                            <div className="cart-items-name">{item.name}</div>
                            <div className="cart-items-function">
                                <button className="cart-items-add" onClick={() => handleAddProduct(item)}>+</button>
                                <button className="cart-items-remove" onClick={() => handleRemoveProduct(item)}>-</button>

                            </div>
                            <div className="cart-items-price">{item.quantity} * {item.currency} {item.price}</div>
                        </div>
                    )
                })}
            </div>
            <div className='cart-item-total-price-name'>
                Total Price:
                <div className="cart-item-total-price"> USD {totalPrice}</div>
            </div>

        </div>
    )
}

export default Cart