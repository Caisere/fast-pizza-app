import { useLoaderData } from "react-router-dom";

//component 
import MenuItem from './MenuItem'
import type { PizzaType } from "../../types";

function Menu() {
    const menu = useLoaderData<PizzaType[]>();
    // console.log(menu)

    return <ul className="divide-y divide-stone-200 px-2">
        {menu.map(pizza => (
            <MenuItem pizza={pizza} key={pizza.id} />
        ))}
    </ul>;
}




export default Menu;
