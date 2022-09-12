import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { BiCartAlt } from 'react-icons/bi'
import { CartMenu } from '../cart-menu'
import { ItemsInCart } from '../items-in-cart'
import './cart-block.css'
import { calcTotalPrice } from '../utils'

export const CartBlock = () => {
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
    // посчитаем сумму покупок
    const items = useSelector(state => state.cart.itemsInCart)
    const totalPrice = calcTotalPrice(items)
    return (
        <div className='cart-block' onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}>
            <ItemsInCart quantity={items.length} />
            <BiCartAlt
                size={25}
                className="cat-block__icon"
            />
            {totalPrice > 0 ?
                <span className='cat-block__total-price'>{totalPrice} грн.</span>
                : null}
            {isCartMenuVisible && <CartMenu items={items} onClick={() => null} />}
        </div>
    )
}