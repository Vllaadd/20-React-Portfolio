import React, { useState } from 'react';

const Nav = () => {
    const [state, setState] = useState(true);
    return ( 
        <nav className='navbar'>
            <div className='container'>
                <div className='navbar_container'>
                    <ul className='navbar_left-logo'>
                        {/* <img src='/images/logo.png' alt='logo' /> */}
                    </ul>
                    {/* {state ? ( */}
                    <ul className='navbar-right'>
                        <li><a href='#home'>Home</a></li>
                        <li><a href='#about'>About</a></li>
                        <li><a href='#portfolio'>Portfolio</a></li>
                        <li><a href='#contact'>Contact</a></li>
                    </ul>
                    {/* ) : ('')} */}
                </div>

            </div>
        </nav>
     );
};
 
export default Nav;