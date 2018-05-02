import React from 'react';

import "./navBar.css";
import hover from 'hover.css';


const NavBar = (props) => {
    return (
        <div className="page-navBar">
                <a className="hvr-glow" href="#About">About</a>
                <a className="hvr-glow" href="#Portfolio">Portfolio</a>
                <a className="hvr-glow" href="#Connect">Connect</a>
        </div>
    ) 
};

export default NavBar;