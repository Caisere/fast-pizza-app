import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


import { createUser } from './userSlice';

//components
import Button from '../../ui/Button';



function CreateUser() {
    const [username, setUsername] = useState('');
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(createUser(username))
        navigate('/menu')
    }

    return (
        <form onSubmit={handleSubmit}>
            <p className='mb-4 text-sm text-stone-600 md:text-base'>👋 Welcome! Please start by telling us your name:</p>

            <input
                type="text"
                placeholder="Your full name"
                value={username}
                minLength={4}
                maxLength={15}
                onChange={(e) => setUsername(e.target.value)}
                className='w-72 input mb-8'
            />

            {username !== '' && (
                <div>
                    <Button type='primary'>Start Ordering</Button>
                </div>
            )}
        </form>
    );
}

export default CreateUser;
