import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
    return (
        <div className='text-center mt-10 flex flex-col items-center gap-8'>
            <LinkButton to="/menu">&larr; Back to menu</LinkButton>
            <p className='font-bold'>Your cart is still empty. Start adding some pizzas :)</p>
        </div>
    );
}

export default EmptyCart;
