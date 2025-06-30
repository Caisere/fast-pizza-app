import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCart } from './cartSlice'
import Button from '../../ui/Button'
import toast from 'react-hot-toast'


const DeleteButton = ({pizzaId, name}) => {
    const dispatch = useDispatch()

    function handleDeleteCart() {
        dispatch(removeCart(pizzaId))
        toast.success(`successfully deleted ${name} to the cart`);
    } 

    return (
        <Button type='small' onClick={handleDeleteCart}>Delete</Button>
    )
}

export default DeleteButton