
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'

import type { AppDispatch } from '../../store'

type SelectedBeleteButtonProps = Pick<cartItem, 'pizzaId' | 'name'>;

interface deleteButtonProps {
    pizzaId: SelectedBeleteButtonProps['pizzaId'];
    name: SelectedBeleteButtonProps['name'];
}

// imported function
import { removeCart } from './cartSlice'

//components
import Button from '../../ui/Button'
import type { cartItem } from '../../types'

const DeleteButton = ({pizzaId, name}: deleteButtonProps) => {
    //redux action dispatcher
    const dispatch = useDispatch<AppDispatch>()


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