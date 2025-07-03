import { formatCurrency } from "../../utilities/helpers";



function OrderItem({ item, isLoadingIngredients, ingredients }) {
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
