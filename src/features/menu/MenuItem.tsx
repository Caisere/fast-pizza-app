import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import type { PizzaType } from "../../types";

//imported function
import { formatCurrency } from "../../utilities/helpers";
import { addCart, getCurrentQuantityById } from "../cart/cartSlice";

//components
import UpdateCartQuantity from "../cart/UpdateCartQuantity";
import Button from "../../ui/Button";
import DeleteButton from "../cart/DeleteButton";

type MenuItemProps = {
    pizza: PizzaType;
};

function MenuItem({ pizza }: MenuItemProps) {
    const dispatch = useDispatch()
    
    const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

    const checkPizzaQuantity = useSelector(getCurrentQuantityById(id))
    const isCartItem = checkPizzaQuantity > 0
    // console.log(checkPizzaQuantity)

    function handleAddCart() {
        const newPizza = {
            pizzaId: id,
            name,
            quantity: 1,
            unitPrice,
            totalPrice: unitPrice * 1,
        }
        dispatch(addCart(newPizza))
        toast.success(`successfully added ${name} to the cart`)
    }

    return (
        <li className="flex gap-4 py-2 ">
            <img src={imageUrl} alt={name} className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`} />
            <div className="flex flex-col flex-1 pt-0.5">
                <p className="font-medium ">{name}</p>
                {/* <p>{id}</p> */}
                <p className="text-sm italic text-stone-500 capitalize">{ingredients.join(', ')}</p>
                <div className="mt-auto flex items-center justify-between">
                    {!soldOut ? <p className="text-sm">{formatCurrency(unitPrice)}</p> : <p className="text-sm uppercase font-medium text-stone-500">Sold out</p>}

                    {isCartItem && 
                        <div className="flex items-center gap-3 sm:gap-3 md:gap-6"> 
                            <UpdateCartQuantity pizzaId={id}/>
                            <DeleteButton pizzaId={id} name={name}/>
                        </div>
                    }

                    {!soldOut && !isCartItem && <Button type='small' onClick={handleAddCart}>Add to Cart</Button>}
                </div>
            </div>
        </li>
    );
}

export default MenuItem;
