"use client"
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cart);
    useEffect(()=>{
        console.log(cartItems, "cart")
    },[cartItems])
  return (
    <div className='w-full lg;w-3/4 mx-auto mt-32 '>
        <div className='w-1/2 mx-auto'>
            {cartItems.map((item)=>{
                return(
                    <div key={item.title} className='w-full h-24 bg-gray-300'>{item.title}</div>
                )
            })}
        </div>
    </div>
  )
}

export default Cart