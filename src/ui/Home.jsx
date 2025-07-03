import { useSelector } from 'react-redux';
import { getUserName } from '../features/user/userSlice';

//components
import CreateUser from '../features/user/CreateUser'
import Button from './Button';

function Home() {
    const userName = useSelector(getUserName)

    return (
        <div className="my-10 text-center px-4 sm:my-16">
            <h1 className='text-xl font-semibold mb-8 md:text-4xl'>
                The best pizza.
                <br />
                <span className="text-yellow-500 md:text-3xl">
                    Straight out of the oven, to you doorstep.
                </span>
            </h1>
            {userName === '' 
                ? 
                <CreateUser /> 
                : 
                <Button 
                    to='/menu' 
                    type='primary'
                >
                    Continue Ordering, {userName}
                </Button>
            }
        </div>
    );
}

export default Home;
