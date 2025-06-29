import { createBrowserRouter, redirect } from "react-router-dom"
import { RouterProvider } from "react-router-dom"
import { getMenu, getOrder, createOrder } from "./services/apiRestaurant";
import { Suspense } from "react";

//component
import Home from './ui/Home'
import Menu from './features/menu/Menu'
import Cart from './features/cart/Cart'
import Order from './features/order/Order'
import CreateOrder from './features/order/CreateOrder'
import AppLayout from "./ui/AppLayout"
import Error from './ui/Error'
import Loader from "./ui/Loader";

const isValidPhone = (str) =>
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
        str
    );


const router = createBrowserRouter([
    {
        Component: AppLayout, // layout route
        errorElement: <Error />,
        children: [
            {
                path: '/',
                index: true,
                Component: Home, 
            },
            {
                path: '/menu',
                Component: Menu,
                loader: async function loader() {
                    const menu = await getMenu()
                    return menu
                },
                errorElement: <Error />       
            },
            {
                path: '/order/:orderId',
                Component: Order,
                loader: async function loader({params}) {
                    const order = await getOrder(params.orderId);
                    return order
                },
                errorElement: <Error />       

            },
            {
                path: '/order/new',
                Component: CreateOrder,
                action: async function action({ request }) {
                    const formData = await request.formData();
                    //convert the formData to an object
                    const data = Object.fromEntries(formData)
                    
                    const order = {
                        ...data,
                        cart: JSON.parse(data.cart),
                        priority: data.priority === 'on'
                    }

                    // handling Form submission errors
                    const errors = {}
                    if(!isValidPhone(order.phone)) {
                        errors.phone = 'Please enter a valid phone number as we may need to contact you during delivery'
                    }
                    // return error is there is an error with the form submission, and make no server request at all.
                    if(Object.keys(errors).length > 0) return errors

                    // console.log(order)
                    // only create a new order if there is no error af all and redirect afterward
                    const newOrder = await createOrder(order);

                    return redirect(`/order/${newOrder.id}`)
                },
                errorElement: <Error />       
            },
            {
                path: '/cart',
                Component: Cart
            }
        ]
    }
])


function App() {
    return (
        <Suspense fallback={Loader}>
            <RouterProvider router={router} />
        </Suspense>
    )
}

export default App
