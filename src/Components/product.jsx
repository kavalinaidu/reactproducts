import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import '../Styles/product.css';

const Product = ({ cart, setCart }) => {
    let [product, setProducts] = useState([])
    let params = useParams()
    let id = params.id
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch(`https://dummyjson.com/products/${id}`)
            let data = await response.json()
            setProducts(data)
        }
        fetchData()
    })



    const addToCart = () => {
        const isProductInCart = cart.find(item => item.id === product.id);
        if (!isProductInCart) {
            setCart([...cart, product]);
        }
    };


    // let addToCart = () => {
    //     cart.map((data)=>{
    //         if(data.id===product.id){
    //             setCart([...cart,data])
    //         }
    //     })
    // }

    return (
        <div className='product'>
            <div className='product1'>
                <h1>Product Details</h1>
            </div>
            <div className='img'>
                <img src={product.thumbnail} alt="" />
            </div>
            <div className='product-info'>
                <h1>{product.title}</h1>
                <h3>Device Name:{product.title}</h3>
                    <p>
                        Original Price:
                        <span style={{textDecoration:"line-through"}}>
                            {(product.price *80).toFixed(2)}
                        </span>
                        {`(${product.discountPercentage}% OFF)`}
                    </p>
                    <p>Discounted price: {((product.price*80)*(1-product.discountPercentage/100)).toFixed(2)}</p>
                <p><strong>About the Product:</strong>{product.description}</p>
                <button onClick={addToCart} >Add to Cart</button>
                <button> <NavLink to='/'>Back</NavLink> </button>
            </div>
        </div>
    )
}

export default Product;
