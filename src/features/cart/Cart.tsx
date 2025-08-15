// components
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem'

import type { AppDispatch,  RootState } from '../../store';


//helper functions
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from './cartSlice';


function Cart() {

    const userName = useSelector((store:RootState) => store.user.userName)

    const cart = useSelector((store:RootState) => store.cart.cart);
    const dispatch = useDispatch<AppDispatch>()

    const noCart = cart.length === 0;

    // handle clear cart
    function handleClearCart() {
        dispatch(clearCart())
    }

    return (
        <div className='px-4 py-3  '>
            <LinkButton to='/menu'>
                &larr; Back to menu
            </LinkButton>

            <h2 className='mt-7 text-xl font-semibold'>Your cart, {userName}</h2>

            {noCart && <h1 className='mt-6 font-semibold'>No cart yet, Please add cart to place your order 😍</h1>}

            <ul className='divide-y divide-stone-200 border-b mt-3'>
                {cart.map(item => (
                    <CartItem item={item} key={item.pizzaId} />
                ))}
            </ul>

            <div className='mt-6 space-x-2'>
                <Button type='primary' to="/order/new">
                    Order pizzas
                </Button>
                <Button type='secondary' onClick={handleClearCart}>Clear cart</Button>
            </div>
        </div>
    );
}

export default Cart;

