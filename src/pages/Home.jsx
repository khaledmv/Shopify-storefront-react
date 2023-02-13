import React, { useContext, useEffect } from 'react'
import { Link } from "react-router-dom"

import { ShopContext } from '../context/ShopProvider'

const Home = () => {

    const { fetchAllProducts, products } = useContext(ShopContext);

    useEffect(() => {
        fetchAllProducts()
    },[fetchAllProducts])

    if(!products) return <div>loading</div>

  return (
       
        <div> 
            {
                products.map(product => (
                
                    <Link to={`/products/${product.handle}`} key={product.title}>
                         <p>{ product.title } </p>
                    </Link>

                   
                ))
            }
        </div>
  )
}

export default Home