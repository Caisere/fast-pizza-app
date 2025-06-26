import { createBrowserRouter } from "react-router-dom"
import { RouterProvider } from "react-router-dom"
import { getMenu, getOrder } from "./services/apiRestaurant";

//component
import Home from './ui/Home'
import Menu from './features/menu/Menu'
import Cart from './features/cart/Cart'
import Order from './features/order/Order'
import CreateOrder, {action as CreateOrderAction} from './features/order/CreateOrder'
import AppLayout from "./ui/AppLayout"
import Error from './ui/Error'


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
                action: CreateOrderAction
            },
            {
                path: '/cart',
                Component: Cart
            }
        ]
    }
])


function App() {
    return <RouterProvider router={router} />
}

export default App
