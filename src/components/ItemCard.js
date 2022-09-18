import React from 'react'

const ItemCard = ({ products, handleAddProduct }) => {


    return (
        <>
            {
                products.map((item) => {

                    return (
                        <div className="card" style={{ width: "18rem" }} key={item.id}>
                            <img className="card-image-top" src={item.thumbnail} alt={item.name} />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <h5 className="card-title" >{item.price}</h5>
                                <button className="btn btn-primary" onClick={() => handleAddProduct(item)}>Add To Cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ItemCard