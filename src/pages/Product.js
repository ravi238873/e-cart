import React from 'react'
import ItemCard from '../components/ItemCard'
import "../css/Product.css"


const Product = ({ products, handleAddProduct }) => {

    return (

        <div className="card-grid">
            <ItemCard products={products} handleAddProduct={handleAddProduct} />
        </div>

    )
}

export default Product