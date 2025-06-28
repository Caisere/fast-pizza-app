import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchOrder = () => {
    const [searchOrderId, setSearchOrderId] = useState('')
    const navigate = useNavigate()


    function handleOrderSearch(e) {
        setSearchOrderId(e.target.value)
    }

    function handleSearch(e) {
        e.preventDefault()
        navigate(`/order/${searchOrderId}`)
        setSearchOrderId('')
    }

    return (
        <form onSubmit={handleSearch}>
            <input 
                type="text" 
                placeholder='Input Search #' 
                value={searchOrderId} 
                onChange={handleOrderSearch} 
                className='rounded-full px-4 py-2 text-sm bg-yellow-100 placeholder:text-stone-400 w-28 sm:focus:w-72 transition-all duration-300 focus:outline-none focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64'
            />
                
        </form>
    )
}

export default SearchOrder