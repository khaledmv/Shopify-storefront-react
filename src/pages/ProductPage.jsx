import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { ShopContext } from '../context/ShopProvider';

const ProductPage = () => {
    const { handle } = useParams();
    const { fetchProductByHandle,  product } = useContext(ShopContext);

    useEffect(()=>{

        fetchProductByHandle(handle);
    },[fetchProductByHandle, handle])

    if(!product.title) return <div> Loading...</div>
  return (
    <div>
        <h1> { product.title} </h1>
    </div>
  )
}

export default ProductPage