import React from 'react'
import Button from '../../ui/Button'
import { useDispatch, useSelector } from 'react-redux'
import {decreaseCartQuantity, increaseCartQuantity} from './cartSlice'
import { getCurrentQuantityById } from './cartSlice'

const UpdateCartQuantity = ({pizzaId}) => {

    const dispatch = useDispatch()

    const currentQuantity = useSelector(getCurrentQuantityById(pizzaId))

    function handleQuantityDecrease() {
        dispatch(decreaseCartQuantity(pizzaId))
    }

    function handleQuantityIncrease() {
        dispatch(increaseCartQuantity(pizzaId))
    }

    return (
        <div className='flex gap-2 items-center md:gap-3'>
            <Button type='round' onClick={handleQuantityDecrease}>-</Button>
            <span className='text-sm font-bold'>{currentQuantity}</span>
            <Button type='round' onClick={handleQuantityIncrease}>+</Button>
        </div>
    )
}

export default UpdateCartQuantity