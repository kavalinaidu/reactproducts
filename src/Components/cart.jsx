import React from 'react'
import '../Styles/cart.css';
import { NavLink } from 'react-router-dom';

const Cart = ({ cart, setCart }) => {
    let subTotal = cart.reduce((sum, x) => {
        return sum + x.price;
    }, 0)

    return (
        <div className='cart'>
            {cart.map(data => {
                return (
                    <div key={data.id} className='cart-item'>
                        <img src={data.thumbnail} alt="" />

                        <div className="cart-details">
                            <h3>Brand:{data.brand}</h3>
                            <h3>Device Name:{data.title}</h3>
                            <p>
                                Original Price:
                                <span style={{ textDecoration: "line-through" }}>
                                    {(data.price * 80).toFixed(2)}
                                </span>
                                {`(${data.discountPercentage}% OFF)`}
                            </p>
                            <p>Discounted price: {((data.price * 80) * (1 - data.discountPercentage / 100)).toFixed(2)}</p>
                            <NavLink to='/'> <button className='btn1'>Back</button></NavLink>
                        </div>

                    </div>
                )
            })}
            <h1>SubTotal:Rs.{subTotal}</h1>
        </div>
    )
}

export default Cart
