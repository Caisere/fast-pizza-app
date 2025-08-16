import { useState } from "react";
import { Form, useActionData, useNavigation} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//imported functions
import { getCart } from "../cart/cartSlice";
import { getTotalCartPrice } from "../cart/cartSlice";
import { formatCurrency } from "../../utilities/helpers";
import { fetchAddress } from "../user/userSlice";

//components
import Button from "../../ui/Button";
import EmptyCart from "../cart/EmptyCart";
import type { AppDispatch, RootState } from "../../store";




function CreateOrder() {
    //priority state
    const [withPriority, setWithPriority] = useState<boolean>(false);

    const navigation = useNavigation()
    const dispatch = useDispatch<AppDispatch>()


    const isSubmitting = navigation.state === 'submitting'
    const cart = useSelector(getCart)
    const {userName, status: getAddressStatus, position, address, error: getAddressError }= useSelector((store:RootState) => store.user)

    // console.log(position)

    const isLoading = getAddressStatus === 'loading';

    
    // get total cart item price
    const totalCartPrice = useSelector(getTotalCartPrice)

    // get priority price which is 20% of the total cart price
    const priorityPrice = totalCartPrice * 0.2
    
    // computed total price when priority is checked and when it is not
    const totalPriceWithPriority = withPriority ? totalCartPrice + priorityPrice : totalCartPrice


    // error from form submission
    const formErrors = useActionData()


    // function to handle get address button/action
    function handleGetLocation() {
        // e.preventDefault()
        dispatch(fetchAddress())
    }


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
                    {formErrors?.phone && <p className="text-xs mt-2 text-red-700 bg-red-100 p-2 rounded-md text-center">{formErrors.phone}</p>}
                    </div>
                </div>

                <div className="mb-5 flex flex-col gap-2 relative sm:flex-row sm:items-center">
                    <label htmlFor="address" className="sm:basis-40">Address</label>
                    <div className="grow">
                        <input 
                            type="text" 
                            name="address"
                            disabled={isLoading}
                            defaultValue={address}
                            id="address" 
                            required
                            className="input w-full"
                        />
                        {getAddressError && <p className="text-xs mt-2 text-red-700 bg-red-100 p-2 rounded-md text-center">{getAddressError}</p>}
                    </div>
                    { !address &&
                        <span className="absolute md:top-[5px] md:right-[5px]">
                            <Button disabled={isLoading} type='small' onClick={handleGetLocation}>Get Location</Button>
                        </span>
                    }
                </div>

                <div className="mb-12 flex flex-col gap-5">
                    <div className="flex gap-5 items-center">
                        <input
                            type="checkbox"
                            name="priority"
                            id="priority"
                            value={`${withPriority}`}
                            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
                            checked={withPriority}
                            onChange={(e) => setWithPriority(e.target.checked)}
                        />
                        <label htmlFor="priority" className="font-medium">Want to yo give your order priority?</label>
                    </div>
                    <span className="text-sm text-yellow-600 font-semibold">
                        Note, marking order as priority attract a 20% price of your order price
                    </span>
                </div>

                <input 
                    type="hidden" 
                    name='cart' 
                    value={JSON.stringify(cart)} 
                />
                <input 
                    type="hidden" 
                    name='position' 
                    value={position.lat && position.lng ? `${position.lat}:${position.lng}` : ''} 
                />

                <div>
                    <Button type='primary' disabled={isSubmitting}>
                        {isSubmitting && isLoading && getAddressError ? 'Placing Order...' : `Order now for ${formatCurrency(totalPriceWithPriority)}`}
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


