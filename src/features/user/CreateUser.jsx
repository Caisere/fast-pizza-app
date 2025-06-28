import { useState } from 'react';
import Button from '../../ui/Button';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
    const [username, setUsername] = useState('');
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault();
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
                    {/* <button>Start ordering</button> */}
                </div>
            )}
        </form>
    );
}

export default CreateUser;
