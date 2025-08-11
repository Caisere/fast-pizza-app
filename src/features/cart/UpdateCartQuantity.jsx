
import { useDispatch, useSelector } from 'react-redux'

//imported functions
import {decreaseCartQuantity, increaseCartQuantity} from './cartSlice'
import { getCurrentQuantityById } from './cartSlice'

//components
import Button from '../../ui/Button'



const UpdateCartQuantity = ({pizzaId}) => {

    const dispatch = useDispatch()

    // current quantity
    const currentQuantity = useSelector(getCurrentQuantityById(pizzaId))


    // decrease quantity function
    function handleQuantityDecrease() {
        dispatch(decreaseCartQuantity(pizzaId))
    }

    // increase quantity function
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