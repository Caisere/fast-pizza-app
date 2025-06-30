import { formatCurrency } from "../../utilities/helpers";
import Button from "../../ui/Button";
// import { useDispatch } from "react-redux";
// import { removeCart } from "./cartSlice";
import DeleteButton from "./DeleteButton";

function CartItem({ item }) {
    // const dispatch = useDispatch()
    const { pizzaId, name, quantity, totalPrice } = item;
        // pizzaId;

    //handle delete pizza
    // function handleDeleteCart() {
    //     dispatch(removeCart(pizzaId))
    // } 
    
    
    return (
        <li className="py-3 sm:flex sm:items-center sm:justify-between">
            <p className="mb-1 sm:mb-0">
                {quantity}&times; {name}
            </p>
            <div className="flex justify-between items-center sm:gap-6">
                <p className="text-small font-bold">{formatCurrency(totalPrice)}</p>
                <DeleteButton pizzaId={pizzaId} name={name}/>
                {/* <Button type='small' onClick={handleDeleteCart}>Delete</Button> */}
            </div>
        </li>
    );
}

export default CartItem;
