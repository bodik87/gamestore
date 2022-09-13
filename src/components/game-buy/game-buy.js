import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../button/button'
import { deleteItemFromCart, setItemInCart } from '../redux/cart/reducer'
import './game-buy.css'

export const GameBuy = ({ game }) => {

    const dispatch = useDispatch()
    // чтобы узнать есть ли элементы в корзине, возьмем их список...
    const items = useSelector(state => state.cart.itemsInCart)
    // и узнаем есть ли элемент в корзине
    const isItemInCart = items.some(item => item.id === game.id)

    // функция удаления из/добавления в корзину
    const handleClick = (e) => {
        e.stopPropagation();
        if (isItemInCart) {
            dispatch(deleteItemFromCart(game.id))
        } else {
            dispatch(setItemInCart(game))
        }
    }

    return (
        <div className='game-buy'>
            <span className='game-buy__price'><b>{game.price}</b> грн</span>
            <Button
                type={isItemInCart ? "secondary" : "primary"}
                onClick={handleClick}>
                {isItemInCart ? 'Убрать из корзины' : 'В корзину'}
            </Button>
        </div>
    )
}