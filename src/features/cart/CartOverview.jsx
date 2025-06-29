import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utilities/helpers";

function CartOverview() {
    //total number of cart items
    const totalCartQuantity = useSelector(getTotalCartQuantity);

    // totalPrice of cart items
    const totalCartPrice = useSelector(getTotalCartPrice);


    if(!totalCartQuantity) return null;

    return (
        <div className="text-sm bg-stone-800 text-stone-200 uppercase px-4 py-4 flex justify-between items-center sm:px-6 ">
            <p className="text-stone-300 text-semibold space-x-4 sm:space-x-6 sm:text-base">
                <span>{totalCartQuantity} pizzas</span>
                <span>{formatCurrency(totalCartPrice)}</span>
            </p>
            <Link to='/cart'>Open cart &rarr;</Link>
        </div>
    );
}

export default CartOverview;
