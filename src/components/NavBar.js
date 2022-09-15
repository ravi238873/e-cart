import React from 'react'
import { Link } from 'react-router-dom'

import '/node_modules/bootstrap/dist/css/bootstrap.min.css'

const NavBar = () => {
    return (
        <>
            <nav>

                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="product">Product</Link>
                    </li>
                    <li>
                        <Link to="cart">Cart</Link>
                    </li>
                </ul>

            </nav>
        </>
    )
}

export default NavBar