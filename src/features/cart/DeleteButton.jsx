import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCart } from './cartSlice'
import Button from '../../ui/Button'

const DeleteButton = ({pizzaId}) => {
    const dispatch = useDispatch()

    function handleDeleteCart() {
        dispatch(removeCart(pizzaId))
    } 

    return (
        <Button type='small' onClick={handleDeleteCart}>Delete</Button>
    )
}

export default DeleteButton