import React from 'react'
import { Link } from 'react-router-dom'

//components
import SearchOrder from '../features/order/SearchOrder'

const Header = () => {
    return (
        <header>
            <Link to='/'>Fast Pizza Co.</Link>
            <SearchOrder />
        </header>
    )
}

export default Header