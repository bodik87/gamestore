import React from 'react'
import { CartBlock } from '../cart-block'
import { Link } from 'react-router-dom'

import './header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="wrapper">
                <Link to="/" className='header__store-title'>GameStore</Link>
            </div>
            <div className="wraper header__cart-btn-wrapper">
                <CartBlock />
            </div>
        </div>
    )
}

export default Header 