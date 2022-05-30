import React from 'react';
import LOGO from '../assets/Logo.png';


const Header = () => {
    return (
        <header className='flex flex-row items-center justify-between px-20 font-serif text-xl font-bold'>
            <div className=''>
                <img className='' src={LOGO} alt='logo' />
            </div>
            <div className='space-x-12'>
                <a className='' href='#'>Wedding Cards</a>
                <a className='' href='#'>Birthday Cards</a>
                <a className='' href='#'>Feeling Cards</a>
                <a className='' href='#'>Anniversary Cards</a>
            </div>
            <div className=''>
                Login | Signup
            </div>
        </header>
    )
}

export default Header;