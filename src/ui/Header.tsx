
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

//imported function
import { getUserName } from '../features/user/userSlice'

//components
import SearchOrder from '../features/order/SearchOrder'
import Username from '../features/user/Username'

const Header = () => {
    const userName = useSelector(getUserName);

    return (
        <header className='bg-yellow-400 uppercase px-4 py-3 border-b border-stone-200 flex items-center justify-between sm:px-6'>
            <Link to='/' className='tracking-widest'>Fast Pizza Co.</Link>
            {userName && <SearchOrder />}
            <Username />
        </header>
    )
}

export default Header