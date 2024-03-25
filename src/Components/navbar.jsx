import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Styles/navbar.css';

const Navbar = () => {
return (
    <>
        <div className="container">
        <div className='header'>
            <h2>Products</h2>
            </div>
            <div className='nav'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/cart">Cart</NavLink>
            </div>
        
        </div>
    </>
)
}

export default Navbar
