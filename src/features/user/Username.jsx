
import { useSelector } from 'react-redux'
import { getUserName } from './userSlice'

const Username = () => {
    const userName = useSelector(getUserName)
    // console.log(userName)

    // if(!userName) return null;

    return (
        <div className='text-sm font-semibold hidden md:block'>
            {userName}
        </div>
    )
}

export default Username