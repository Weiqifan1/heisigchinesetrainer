import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import './Navbar.css';

const Navbar = props => {

    const handleClick = (e) => {
        console.log('you clicked the button!');
    }

        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">React</h1>
                <div className="menu-icon">

                </div>
                <ul className=
                    'nav-menu'>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url} onClick={handleClick}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        );

}

export default Navbar;