import { useState } from "react";
import { Form, useActionData, useNavigation} from "react-router-dom";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";
import { getCart } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";
import { getTotalCartPrice } from "../cart/cartSlice";
import { formatCurrency } from "../../utilities/helpers";
// import {createOrder} from '../../services/apiRestaurant'



function CreateOrder() {
    const [withPriority, setWithPriority] = useState(false);
    const navigation = useNavigation()
    const isSubmitting = navigation.state === 'submitting'
    const userName = useSelector(store => store.user.userName)
    const cart = useSelector(getCart)
    
    // get total cart item price
    const totalCartPrice = useSelector(getTotalCartPrice)

    // get priority price which is 20% of the total cart price
    const priorityPrice = totalCartPrice * 0.2
    
    // computed total price when priority is checked and when it is not
    const totalPriceWithPriority = withPriority ? totalCartPrice + priorityPrice : totalCartPrice



    const formErrors = useActionData()
    // console.log(formErrors)
    // const cart = fakeCart;

    if (cart.length === 0) return <EmptyCart />

    return (
        <div className="px-4 py-6">
            <h2 className="text-xl font-semibold mb-8"> Ready to order? Let's go!</h2>

            <Form method="POST">
                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <label htmlFor="customer" className="sm:basis-40">First Name</label>
                    <input 
                        type="text" 
                        name="customer"
                        id="customer" 
                        defaultValue={userName}
                        required 
                        className="input flex-1"
                    />
                </div>

                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <label htmlFor="phone" className="sm:basis-40">Phone number</label>
                    <div className="grow">
                        <input 
                            type="tel" 
                            name="phone"
                            id="phone" 
                            required 
                            className="input w-full"
                        />
                    {formErrors?.phone && <p className="text-xs mt-2 text-red-700 bg-red-100 p-2 rounded-md">{formErrors.phone}</p>}
                    </div>
                </div>

                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <label htmlFor="address" className="sm:basis-40">Address</label>
                    <div className="grow">
                        <input 
                            type="text" 
                            name="address"
                            id="address" 
                            required
                            className="input w-full"
                        />
                    </div>
                </div>

                <div className="mb-12 flex flex-col gap-5">
                    <div className="flex gap-5 items-center">
                        <input
                            type="checkbox"
                            name="priority"
                            id="priority"
                            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
                            value={withPriority}
                            onChange={(e) => setWithPriority(e.target.checked)}
                        />
                        <label htmlFor="priority" className="font-medium">Want to yo give your order priority?</label>
                    </div>
                    <span className="text-sm text-yellow-600 font-semibold">Note, marking order as priority attract a 20% price of your order price</span>
                </div>
                <input 
                    type="hidden" 
                    name='cart' 
                    value={JSON.stringify(cart)} 
                />
                <div>
                    <Button type='primary' disabled={isSubmitting}>
                        {isSubmitting ? 'Placing Order...' : `Order now for ${formatCurrency(totalPriceWithPriority)}`}
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default CreateOrder;

// export async function action({ request }) {
//     const formData = await request.formData();
//     const data = Object.fromEntries(formData)
    
//     const order = {
//         ...data,
//         cart: JSON.parse(data.cart),
//         priority: data.priority === 'on'
//     }
//     console.log(order)
    
//     const newOrder = await createOrder(order);

//     return redirect(`/order/${newOrder.id}`)
// }


// https://uibakery.io/regex-library/phone-number
// const isValidPhone = (str) =>
//   /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
//     str
//   );

// const fakeCart = [
//     {
//         pizzaId: 12,
//         name: "Mediterranean",
//         quantity: 2,
//         unitPrice: 16,
//         totalPrice: 32,
//     },
//     {
//         pizzaId: 6,
//         name: "Vegetale",
//         quantity: 1,
//         unitPrice: 13,
//         totalPrice: 13,
//     },
//     {
//         pizzaId: 11,
//         name: "Spinach and Mushroom",
//         quantity: 1,
//         unitPrice: 15,
//         totalPrice: 15,
//     },
// ];


