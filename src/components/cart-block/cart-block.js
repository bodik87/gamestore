import React from 'react'
import { BiCartAlt } from 'react-icons/bi'
import './cart-block.css'

export const CartBlock = () => {
    return (
        <div className='cart-block'>
            <BiCartAlt size={25} className="cat-block__icon" />
            <span className='cat-block__total-price'>2000 грн</span>
        </div>
    )
}