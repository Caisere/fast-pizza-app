import { createBrowserRouter, redirect, type LoaderFunctionArgs, type ActionFunctionArgs } from "react-router-dom"
import { RouterProvider } from "react-router-dom"
import { getMenu, getOrder, createOrder } from "./services/apiRestaurant";
import { Suspense } from "react";
import toast, { Toaster } from "react-hot-toast";
import store from "./store";
import { clearCart } from "./features/cart/cartSlice";
import type { createOrderError } from "./types";
// import type { LoaderFunctionArgs, ActionFunctionArgs } from "react-router-dom";

//component
import Home from './ui/Home'
import Menu from './features/menu/Menu'
import Cart from './features/cart/Cart'
import Order from './features/order/Order'
import CreateOrder from './features/order/CreateOrder'
import AppLayout from "./ui/AppLayout"
import Error from './ui/Error'
import Loader from "./ui/Loader";

const isValidPhone = (str: string) =>
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
                loader: async function loader({params}: LoaderFunctionArgs) {
                    const order = await getOrder(params.orderId);
                    return order
                },
                errorElement: <Error />       

            },
            {
                path: '/order/new',
                Component: CreateOrder,
                action: async function action({ request }:ActionFunctionArgs) {
                    const formData = await request.formData();
                    // console.log(formData)
                    //convert the formData to an object
                    const data = Object.fromEntries(formData)
                    // console.log(data)
                    
                    const order = {
                        ...data,
                        phone: data.phone as string,
                        cart: JSON.parse(data.cart as string),
                        priority: data.priority === 'true'
                    }
                    // console.log(order)
                    
                    // handling Form submission errors
                    const errors:createOrderError = {}
                    if(!isValidPhone(order.phone)) {
                        errors.phone = 'Please enter a valid phone number as we may need to contact you during delivery'
                    }
                    // return error is there is an error with the form submission, and make no server request at all.
                    if(Object.keys(errors).length > 0) return errors
                    // only create a new order if there is no error af all and redirect afterward
                    const newOrder = await createOrder(order);
                    toast.success('Order successfully placed')
                    // console.log(order)
                    store.dispatch(clearCart())
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
        <Suspense fallback={<Loader />}>
            <Toaster
                position="top-center"
                gutter={12}
                containerStyle={{
                    margin: '8px'
                }}
                toastOptions={{
                    success: {
                        duration: 3000
                    },
                    error: {
                        duration: 5000
                    },
                    style: {
                        fontSize: '16px',
                        maxWidth: '500px',
                        padding: '12px 20px',
                        backgroundColor: "#292524",
                        color: "#fff",
                        borderRadius: "4px",
                        boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                        textAlign: 'center'
                    }
                }}
            />
            <RouterProvider router={router} />
        </Suspense>
    )
}

export default App
