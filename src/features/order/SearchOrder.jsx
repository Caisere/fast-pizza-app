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
                onChange={handleOrderSearch} />
        </form>
    )
}

export default SearchOrder