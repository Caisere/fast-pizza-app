import React from 'react'
import { Link } from 'react-router-dom'

//components
import SearchOrder from '../features/order/SearchOrder'
import Username from '../features/user/Username'

const Header = () => {
    return (
        <header className='bg-yellow-400 uppercase px-4 py-3 border-b border-stone-200 flex items-center justify-between sm:px-6'>
            <Link to='/' className='tracking-widest'>Fast Pizza Co.</Link>
            <SearchOrder />
            <Username />
        </header>
    )
}

export default Header