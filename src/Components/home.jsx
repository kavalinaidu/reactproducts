import React, { useEffect, useState } from 'react'
import  {NavLink} from 'react-router-dom'
import '../Styles/home.css'

const Home = () => {
    let [products,setProducts]=useState([])
    useEffect(() =>{
        let fetchData=async()=>{
            let response=await fetch('https://dummyjson.com/products')
            let data=await response.json()
            setProducts(data.products)
        }
        fetchData()
    },[])
return (
    <div className='home'>
       <div className='home1'>
       {products.map((data)=>(
            <div className='home2'>
                <img src={data.thumbnail} alt="" />
                <div className='product_details'>
                    <h3>Brand:{data.brand}</h3>
                    <h3>Device Name:{data.title}</h3>
                    <p>
                        Original Price:
                        <span style={{textDecoration:"line-through"}}>
                            {(data.price *80).toFixed(2)}
                        </span>
                        {`(${data.discountPercentage}% OFF)`}
                    </p>
                    <p>Discounted price: {((data.price*80)*(1-data.discountPercentage/100)).toFixed(2)}</p>
                    <NavLink to={`/${data.id}`}><button className='btn'>View</button></NavLink>

                </div>
            </div>

        ))}
       </div>
    </div>
)
}

export default Home
