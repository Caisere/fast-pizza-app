// import { useState } from "react";
import { Form, useActionData, useNavigation} from "react-router-dom";
import Button from "../../ui/Button";
// import {createOrder} from '../../services/apiRestaurant'

// https://uibakery.io/regex-library/phone-number
// const isValidPhone = (str) =>
//   /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
//     str
//   );

const fakeCart = [
    {
        pizzaId: 12,
        name: "Mediterranean",
        quantity: 2,
        unitPrice: 16,
        totalPrice: 32,
    },
    {
        pizzaId: 6,
        name: "Vegetale",
        quantity: 1,
        unitPrice: 13,
        totalPrice: 13,
    },
    {
        pizzaId: 11,
        name: "Spinach and Mushroom",
        quantity: 1,
        unitPrice: 15,
        totalPrice: 15,
    },
];

function CreateOrder() {
    // const [withPriority, setWithPriority] = useState(false);
    const navigation = useNavigation()
    const isSubmitting = navigation.state === 'submitting'
    // console.log(isSubmitting)

    const formErrors = useActionData()
    // console.log(formErrors)

    const cart = fakeCart;

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

                <div className="mb-12 flex gap-5 items-center">
                    <input
                        type="checkbox"
                        name="priority"
                        id="priority"
                        className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
                        // value={withPriority}
                        // onChange={(e) => setWithPriority(e.target.checked)}
                    />
                    <label htmlFor="priority" className="font-medium">Want to yo give your order priority?</label>
                </div>
                <input 
                    type="hidden" 
                    name='cart' 
                    value={JSON.stringify(cart)} 
                />
                <div>
                    <Button type='primary' disabled={isSubmitting}>
                        {isSubmitting ? 'Placing Order...' : 'Order now'}
                    </Button>
                </div>
            </Form>
        </div>
    );
}

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

export default CreateOrder;
