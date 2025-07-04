import React from 'react'
import { Link } from 'react-router-dom';


const Button = ({children, disabled, to, type, onClick}) => {

    const base = 'bg-yellow-400 text-sm inline-block rounded-full font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed'

    const styles = {
        primary: base + ' px-4 py-3 md:px-6 md:py-4',
        small: base + ' py-3 px-4 text-xs md:px-5 md:py-2.5',
        round: base + ' px-2 py-1 text-xs md:px-3 md:py-2 md:text-xs ',
        secondary: 'text-xs bg-transparent border-2 border-stone-300  px-4 py-2.5 inline-block rounded-full font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:text-stone-800 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-3.5'
    }

    if(to) return (
        <Link 
            to={to}
            className={styles[type]}
        >
                {children}
        </Link>
    )


    return (
        <button
            disabled={disabled}
            className={styles[type]}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button