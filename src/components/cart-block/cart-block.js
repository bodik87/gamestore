import React, { useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BiCartAlt } from 'react-icons/bi'

import { CartMenu } from '../cart-menu'
import { ItemsInCart } from '../items-in-cart'
import { calcTotalPrice } from '../utils'

import './cart-block.css'

export const CartBlock = () => {
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
    // посчитаем сумму покупок
    const items = useSelector(state => state.cart.itemsInCart)
    const totalPrice = calcTotalPrice(items)

    const navigate = useNavigate()

    // функция для кнопки "Обработать заказ". Если функция передается как пропс - самое время для useCallback
    const handleClick = useCallback(() => {
        setIsCartMenuVisible(false)
        navigate(`/order`)
    }, [navigate])

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
            {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
        </div>
    )
}