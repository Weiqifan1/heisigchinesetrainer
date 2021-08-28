import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = props => {

    const handleClick = (e) => {
        console.log('you clicked the button!');
    }

        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">React</h1>
                <div className="menu-icon">

                </div>
                <div className='nav-menu'>
                    <Link to="/"> Home </Link>
                    <Link to="services"> Services</Link>

                </div>

            </nav>
        );

}

export default Navbar;
