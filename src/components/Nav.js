import React, { useState } from 'react';

const Nav = () => {
    const [state, setState] = useState(true);
    return ( 
        <nav className='navbar'>
            <div className='container'>
                <div className='navbar-container'>
                    <ul className='navbar-left'>

                    </ul>
                    {state ? (
                        <ul className='mavbar-right'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Portfolio</li>
                            <li>Contact</li>
                        </ul>
                    ) : ('')}
                </div>

            </div>

        </nav>
     );
};
 
export default Nav;