
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'

// imported function
import { removeCart } from './cartSlice'

//components
import Button from '../../ui/Button'

const DeleteButton = ({pizzaId, name}) => {
    //redux action dispatcher
    const dispatch = useDispatch()


    // function to delete cart pizza by id
    function handleDeleteCart() {
        dispatch(removeCart(pizzaId))
        toast.success(`successfully deleted ${name} to the cart`);
    } 

    return (
        <Button type='small' onClick={handleDeleteCart}>Delete</Button>
    )
}

export default DeleteButton