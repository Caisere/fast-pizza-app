import { useLoaderData } from "react-router-dom";

//component 
import MenuItem from './MenuItem'

function Menu() {
    const menu = useLoaderData();
    // console.log(menu)

    return <ul className="divide-y divide-stone-200 px-2">
        {menu.map(pizza => (
            <MenuItem pizza={pizza} key={pizza.id} />
        ))}
    </ul>;
}




export default Menu;
