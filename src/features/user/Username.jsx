import React from 'react'
import { useSelector } from 'react-redux'

const Username = () => {
    const userName = useSelector(store => store.user.userName)
    // console.log(userName)

    // if(!userName) return null;

    return (
        <div className='text-sm font-semibold hidden md:block'>
            {userName}
        </div>
    )
}

export default Username