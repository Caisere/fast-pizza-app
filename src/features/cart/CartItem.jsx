// helper functions
import { formatCurrency } from "../../utilities/helpers";
import UpdateCartQuantity from "./UpdateCartQuantity";

//components
import DeleteButton from "./DeleteButton";



function CartItem({ item }) {

    const { pizzaId, name, quantity, totalPrice } = item;

    
    return (
        <li className="py-3 sm:flex sm:items-center sm:justify-between">
            <p className="mb-1 sm:mb-0">
                {quantity}&times; {name}
            </p>
            <div className="flex justify-between items-center sm:gap-6">
                <p className="text-small font-bold">{formatCurrency(totalPrice)}</p>
                <UpdateCartQuantity pizzaId={pizzaId}/>
                <DeleteButton pizzaId={pizzaId} name={name}/>
            </div>
        </li>
    );
}

export default CartItem;
