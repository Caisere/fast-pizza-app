import { formatCurrency } from "../../utilities/helpers";
import type {CartItem} from "../../types";


// Type for the selected order item
type SelectedOrderItem = Pick<CartItem, 'quantity' | 'name' | 'totalPrice'>;

// Type for the props of the OrderItem component
type OrderItemProps = {
    item: SelectedOrderItem
    isLoadingIngredients: boolean;
    ingredients: string[];
};


function OrderItem({ item, isLoadingIngredients, ingredients }: OrderItemProps) {
    const { quantity, name, totalPrice } = item;

    return (
        <li className="py-3 space-y-2">
            <div className="flex items-center justify-between gap-4 text-sm">
                <p><span className="font-bold">{quantity}&times;</span> {name}</p>
                <p className="font-bold">{formatCurrency(totalPrice)}</p>
            </div>
            <p className="text-xs capitalize italic"><span className="font-semibold">Ingredients:</span> {isLoadingIngredients ? 'Loading Ingredient...' : ingredients.join(', ')}</p>
        </li>
    );
}

export default OrderItem;
